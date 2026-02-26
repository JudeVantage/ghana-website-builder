#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Color output helpers
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

const log = {
  info: (msg) => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  step: (msg) => console.log(`${colors.bright}${msg}${colors.reset}`),
};

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--config' && args[i + 1]) {
      parsed.configPath = args[i + 1];
      i++;
    } else if (args[i] === '--output' && args[i + 1]) {
      parsed.outputPath = args[i + 1];
      i++;
    } else if (args[i] === '--deploy') {
      parsed.deploy = true;
    }
  }
  
  return parsed;
}

// Load and validate config
async function loadConfig(configPath) {
  try {
    const configContent = await fs.readFile(configPath, 'utf8');
    const config = JSON.parse(configContent);
    
    // Validate required fields
    const required = [
      'variant',
      'business.name',
      'business.phone',
      'business.whatsapp',
      'business.address',
      'business.hours',
    ];
    
    for (const field of required) {
      const keys = field.split('.');
      let value = config;
      for (const key of keys) {
        value = value?.[key];
      }
      if (!value) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    // Validate variant exists
    const validVariants = ['variant-1-modern', 'variant-2-luxury', 'variant-3-classic'];
    if (!validVariants.includes(config.variant)) {
      throw new Error(`Invalid variant. Must be one of: ${validVariants.join(', ')}`);
    }
    
    return config;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Config file not found: ${configPath}`);
    }
    throw error;
  }
}

// Call Claude API to generate content
async function generateContent(config) {
  log.step('\n🤖 Generating AI content...');
  
  const Anthropic = require('@anthropic-ai/sdk');
  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
  });
  
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY environment variable not set');
  }
  
  const businessType = 'barbershop';
  const location = config.business.address;
  
  const prompt = `You are a professional copywriter for a ${businessType} in Ghana called "${config.business.name}".

Business Details:
- Name: ${config.business.name}
- Location: ${location}
- Tagline: ${config.business.tagline}
- Services: ${config.services.map(s => s.name).join(', ')}

Generate compelling, professional content for the following sections. Make it culturally appropriate for Ghana, warm, inviting, and authentic. Keep paragraphs short and impactful.

Respond ONLY with valid JSON in this exact format:
{
  "about": "2-3 paragraphs about the barbershop's story, values, and what makes them special",
  "services": [
    {"name": "${config.services[0].name}", "description": "1 sentence describing this service"},
    {"name": "${config.services[1].name}", "description": "1 sentence describing this service"},
    {"name": "${config.services[2].name}", "description": "1 sentence describing this service"},
    {"name": "${config.services[3].name}", "description": "1 sentence describing this service"}
  ]
}`;

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: prompt
      }],
    });
    
    const content = message.content[0].text;
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }
    
    const generated = JSON.parse(jsonMatch[0]);
    log.success('AI content generated successfully');
    
    return generated;
  } catch (error) {
    log.error(`AI generation failed: ${error.message}`);
    throw error;
  }
}

// Copy template and replace placeholders
async function buildSite(config, generatedContent, outputPath) {
  log.step('\n📦 Building site...');
  
  const templatePath = path.join(__dirname, 'sites/templates/barbershop', config.variant);
  
  // Check if template exists
  try {
    await fs.access(templatePath);
  } catch {
    throw new Error(`Template not found: ${templatePath}`);
  }
  
  // Copy template to output
  log.info(`Copying template from ${config.variant}...`);
  await execAsync(`cp -r "${templatePath}" "${outputPath}"`);
  log.success('Template copied');
  
  // Build replacement map
  const replacements = {
    '{{BUSINESS_NAME}}': config.business.name,
    '{{BUSINESS_TAGLINE}}': config.business.tagline,
    '{{BUSINESS_PHONE}}': config.business.phone,
    '{{PHONE_NUMBER}}': config.business.phone,
    '{{WHATSAPP_NUMBER}}': config.business.whatsapp,
    '{{BUSINESS_ADDRESS}}': config.business.address,
    '{{BUSINESS_HOURS}}': config.business.hours,
    '{{BUSINESS_NAME_LOWER}}': config.business.name.toLowerCase().replace(/[^a-z0-9]/g, ''),
    '{{ABOUT_TEXT}}': generatedContent.about,
    '{{HERO_TITLE}}': config.hero?.title || config.business.name,
    '{{HERO_TITLE_LINE1}}': config.hero?.title_line1 || 'Your Style',
    '{{HERO_TITLE_LINE2}}': config.hero?.title_line2 || 'Our Passion',
    '{{HERO_SUBTITLE}}': config.hero?.subtitle || config.business.tagline,
    '{{OWNER_NAME}}': config.owner?.name || 'The Owner',
  };
  
  // Add service replacements
  for (let i = 0; i < 4; i++) {
    const service = config.services[i] || { name: 'Service', price: 'GH₵0', description: '' };
    const generated = generatedContent.services[i] || { description: '' };
    
    replacements[`{{SERVICE_${i + 1}_NAME}}`] = service.name;
    replacements[`{{SERVICE_${i + 1}_PRICE}}`] = service.price;
    replacements[`{{SERVICE_${i + 1}_DESCRIPTION}}`] = service.description || generated.description;
  }
  
  // Replace in all relevant files
  const filesToProcess = [
    'app/layout.tsx',
    'app/page.tsx',
    'components/*.tsx',
  ];
  
  log.info('Replacing placeholders...');
  
  for (const pattern of filesToProcess) {
    const files = await execAsync(`find "${outputPath}" -path "*/${pattern}" -type f`);
    const fileList = files.stdout.trim().split('\n').filter(Boolean);
    
    for (const file of fileList) {
      let content = await fs.readFile(file, 'utf8');
      
      for (const [placeholder, value] of Object.entries(replacements)) {
        content = content.replace(new RegExp(placeholder, 'g'), value);
      }
      
      await fs.writeFile(file, content, 'utf8');
    }
  }
  
  log.success('Placeholders replaced');
}

// Install dependencies
async function installDependencies(outputPath) {
  log.step('\n📥 Installing dependencies...');
  
  try {
    await execAsync(`cd "${outputPath}" && npm install --silent`, {
      maxBuffer: 1024 * 1024 * 10, // 10MB buffer
    });
    log.success('Dependencies installed');
  } catch (error) {
    log.error('Failed to install dependencies');
    throw error;
  }
}

// Deploy to Vercel
async function deployToVercel(outputPath) {
  log.step('\n🚀 Deploying to Vercel...');
  
  try {
    // Check if vercel CLI is installed
    try {
      await execAsync('which vercel');
    } catch {
      throw new Error('Vercel CLI not installed. Run: npm install -g vercel');
    }
    
    log.info('Running vercel deploy...');
    const { stdout } = await execAsync(`cd "${outputPath}" && vercel --prod --yes`, {
      maxBuffer: 1024 * 1024 * 10,
    });
    
    // Extract URL from output
    const urlMatch = stdout.match(/https:\/\/[^\s]+/);
    const url = urlMatch ? urlMatch[0] : null;
    
    if (url) {
      log.success(`Site deployed successfully!`);
      console.log(`\n${colors.bright}${colors.green}🌐 Live URL: ${url}${colors.reset}\n`);
      return url;
    } else {
      log.warning('Deployment completed but URL not found in output');
      return null;
    }
  } catch (error) {
    log.error(`Deployment failed: ${error.message}`);
    throw error;
  }
}

// Main function
async function main() {
  console.log(`${colors.cyan}
╔══════════════════════════════════════════╗
║   🇬🇭 Ghana Website Builder - Deploy    ║
║        AI-Powered Template System        ║
╚══════════════════════════════════════════╝
${colors.reset}`);
  
  const args = parseArgs();
  
  if (!args.configPath) {
    log.error('Usage: node deploy-site.js --config <config.json> [--output <path>] [--deploy]');
    process.exit(1);
  }
  
  try {
    // Load config
    log.step('📋 Loading configuration...');
    const config = await loadConfig(args.configPath);
    log.success(`Config loaded: ${config.business.name} (${config.variant})`);
    
    // Generate AI content
    const generatedContent = await generateContent(config);
    
    // Set output path
    const timestamp = Date.now();
    const outputPath = args.outputPath || path.join(
      __dirname,
      'sites/deployed',
      `${config.business.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${timestamp}`
    );
    
    // Build site
    await buildSite(config, generatedContent, outputPath);
    
    // Install dependencies
    await installDependencies(outputPath);
    
    log.success(`\n✨ Site built successfully at: ${outputPath}`);
    
    // Deploy if requested
    if (args.deploy) {
      const url = await deployToVercel(outputPath);
      
      // Save deployment info
      const deployInfo = {
        businessName: config.business.name,
        variant: config.variant,
        url: url,
        localPath: outputPath,
        deployedAt: new Date().toISOString(),
      };
      
      await fs.writeFile(
        path.join(outputPath, 'deployment-info.json'),
        JSON.stringify(deployInfo, null, 2)
      );
    } else {
      log.info('\n💡 To deploy, run: node deploy-site.js --config <config> --deploy');
      log.info(`   Or manually: cd "${outputPath}" && vercel --prod`);
    }
    
    console.log(`\n${colors.green}${colors.bright}🎉 All done! Site is ready.${colors.reset}\n`);
    
  } catch (error) {
    log.error(`\n${error.message}`);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { loadConfig, generateContent, buildSite };
