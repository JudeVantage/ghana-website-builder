@echo off
chcp 65001 >nul 2>&1
title Ruth's Website Builder Setup
color 0A

echo.
echo ============================================
echo   Welcome, Ruth! Let's build your website.
echo ============================================
echo.
echo This will check your computer is ready
echo and then start your personal assistant.
echo.
echo Don't worry - just follow the instructions!
echo.
pause

REM ==========================================
REM CHECK: Is Node.js installed?
REM ==========================================
echo.
echo [Checking] Looking for Node.js...
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo ============================================
    echo   Node.js is NOT installed yet.
    echo ============================================
    echo.
    echo You need to install Node.js first.
    echo.
    echo Here's what to do:
    echo   1. Open your web browser ^(Chrome or Edge^)
    echo   2. Go to: https://nodejs.org
    echo   3. Click the big green "LTS" button
    echo   4. Run the file that downloads
    echo   5. Click "Next" on every screen
    echo   6. When it's done, RESTART your computer
    echo   7. Then double-click this file again
    echo.
    echo See WINDOWS-SETUP-GUIDE.md for pictures
    echo and more detailed instructions.
    echo.
    pause
    exit /b 1
)
echo [OK] Node.js is installed!

REM ==========================================
REM CHECK: Is Git installed?
REM ==========================================
echo [Checking] Looking for Git...
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo ============================================
    echo   Git is NOT installed yet.
    echo ============================================
    echo.
    echo You need to install Git first.
    echo.
    echo Here's what to do:
    echo   1. Open your web browser
    echo   2. Go to: https://git-scm.com/download/win
    echo   3. The download starts automatically
    echo   4. Run the file that downloads
    echo   5. Click "Next" on every screen
    echo   6. When done, close this window
    echo   7. Then double-click this file again
    echo.
    echo See WINDOWS-SETUP-GUIDE.md for details.
    echo.
    pause
    exit /b 1
)
echo [OK] Git is installed!

REM ==========================================
REM CHECK: Is npm available?
REM ==========================================
echo [Checking] Looking for npm...
where npm >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo [Problem] npm is not found. This usually means
    echo Node.js was installed but PATH needs updating.
    echo.
    echo Try this: restart your computer, then
    echo double-click this file again.
    echo.
    echo If that doesn't work, see WINDOWS-SETUP-GUIDE.md
    echo Step 2 for how to fix the PATH.
    echo.
    pause
    exit /b 1
)
echo [OK] npm is available!

REM ==========================================
REM CHECK: Is Claude Code CLI installed?
REM ==========================================
echo [Checking] Looking for Claude Code...
where claude >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo.
    echo ============================================
    echo   Claude Code is NOT installed yet.
    echo ============================================
    echo.
    echo Claude Code is your AI assistant that will
    echo help you build websites step by step.
    echo.
    echo To install it, I need to run ONE command.
    echo.
    echo Press any key and I will install it for you...
    pause >nul

    echo.
    echo Installing Claude Code... this may take a minute...
    echo.
    call npm install -g @anthropic-ai/claude-code

    where claude >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo.
        echo ============================================
        echo   Installation didn't work automatically.
        echo ============================================
        echo.
        echo Don't worry! Here's what to do:
        echo.
        echo   1. Close this window
        echo   2. Open Command Prompt ^(Windows key, type cmd^)
        echo   3. Type: npm install -g @anthropic-ai/claude-code
        echo   4. Press Enter and wait for it to finish
        echo   5. Close Command Prompt
        echo   6. Double-click this file again
        echo.
        echo If you get a "scripts disabled" error, you
        echo are in PowerShell. Type "cmd" first, then
        echo try the install command again.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Claude Code installed successfully!
)
echo [OK] Claude Code is ready!

REM ==========================================
REM ALL CHECKS PASSED - Launch Claude Code
REM ==========================================
echo.
echo ============================================
echo   Everything looks good! Starting your
echo   personal website-building assistant...
echo ============================================
echo.
echo Claude will guide you through everything.
echo Just read what it says and follow along.
echo.
echo Starting in 3 seconds...
timeout /t 3 >nul

REM Navigate to the project directory (this bat file's location)
cd /d "%~dp0"

REM Launch Claude Code with Ruth's system prompt
claude --system-prompt "You are Ruth's personal website-building assistant. Ruth runs a web design business in Ghana and is using a Windows Dell laptop. She has ZERO coding experience — treat her as completely computer-illiterate. Here are your rules: 1. NEVER use technical jargon. Explain everything in simple plain English, like you're talking to a 5-year-old. Instead of 'repository' say 'project folder'. Instead of 'dependencies' say 'the extra files the project needs'. Instead of 'deploy' say 'put the website on the internet'. 2. RUN COMMANDS AUTOMATICALLY. Do NOT ask Ruth to type commands. Use your tools to run them yourself. Tell Ruth what you're doing in simple words before you do it. 3. VERIFY EVERY STEP. After running each command, check that it worked. If it failed, diagnose and fix the problem automatically. Only ask Ruth for help if you truly cannot fix it yourself. 4. HANDLE ERRORS GRACEFULLY. If you see 'running scripts is disabled', switch to cmd. If you see 'not recognized as a command', the PATH needs fixing — fix it. If npm install fails, try again or clear the cache. Always try at least 2 fixes before asking Ruth for help. 5. STEP BY STEP. Walk through the setup one step at a time: (a) Check Node.js is working, (b) Check Git is working, (c) Make sure we're in the right folder, (d) Run npm install, (e) Set up the .env file with API keys (ask Ruth for her Anthropic key — Jude should have given it to her), (f) Help her deploy her first website to Vercel. 6. CELEBRATE WINS. After each successful step, tell Ruth she's doing great. When the website is live, make it a big celebration moment. 7. USE SIMPLE FORMATTING. No code blocks unless absolutely necessary. Use short sentences. Use numbered lists for steps. 8. IF SOMETHING GOES WRONG: Don't panic. Don't show scary error messages. Summarize the problem in one simple sentence and then fix it. Example: 'Hmm, your computer couldn't find Node.js. Let me fix that for you.' 9. THE GOAL: Get Ruth from where she is right now to having a live website she can show clients. That's it. Everything you do should move toward that goal. 10. START by saying: 'Hi Ruth! I''m your website assistant. I''m going to help you get everything set up so you can start building beautiful websites for your clients. Let me check a few things on your computer first...' Then immediately start checking node --version, git --version, and npm --version."

echo.
echo ============================================
echo   Session ended. You can close this window.
echo   To start again, just double-click this file!
echo ============================================
echo.
pause
