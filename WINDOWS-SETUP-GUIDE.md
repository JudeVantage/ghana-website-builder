# Ruth's Windows Setup Guide

## Getting Your Computer Ready to Build Websites

Hello Ruth! This guide will walk you through every single step to get your Dell laptop ready. Don't worry if you've never done anything like this before — just follow each step exactly, and you'll be fine.

**Before we start, one important thing:**
We will be using a program called **Command Prompt** (also called **CMD**). It's a small window where you type commands. Think of it like texting your computer — you type something, press Enter, and it does what you asked.

---

## Table of Contents

1. [Step 1: Install Node.js](#step-1-install-nodejs)
2. [Step 2: Fix the PATH Problem](#step-2-fix-the-path-problem-if-node-is-not-recognized)
3. [Step 3: Install Git](#step-3-install-git)
4. [Step 4: Set CMD as Your Default Terminal](#step-4-set-cmd-as-your-default-terminal)
5. [Step 5: Download the Project](#step-5-download-the-project)
6. [Step 6: Install Project Dependencies](#step-6-install-project-dependencies)
7. [Step 7: Deploy to Vercel](#step-7-deploy-to-vercel)
8. [Troubleshooting](#troubleshooting-common-errors)

---

## Step 1: Install Node.js

Node.js is a program that lets your computer run the website builder. Without it, nothing works.

### What to do:

1. Open your web browser (Chrome, Edge, etc.)

2. Go to this website: **https://nodejs.org**

3. You will see a big green button that says something like **"22.x.x LTS"** (the numbers may be different — that's okay). Click that button.

   > **What you should see on screen:** The Node.js homepage with two big green download buttons. Click the one on the LEFT that says "LTS" (this means "Long Term Support" — it's the safer, more stable version).

4. A file will download. It will be called something like `node-v22.x.x-x64.msi`. Go to your **Downloads** folder and double-click it.

   > **What you should see on screen:** A setup wizard window with the Node.js logo (a green hexagon shape).

5. Click **Next** on every screen. **Do NOT change any settings.** Just keep clicking Next.

   > **IMPORTANT:** On the screen that says "Tools for Native Modules", there is a checkbox that says "Automatically install the necessary tools". **Check this box** (click on it so it has a checkmark). Then click Next.

6. Click **Install**. Windows may ask "Do you want to allow this app to make changes?" — click **Yes**.

7. Click **Finish** when it's done.

### How to check it worked:

1. Press the **Windows key** on your keyboard (it's the key with the Windows logo, usually between Ctrl and Alt on the bottom left).

2. Type: `cmd`

3. You'll see "Command Prompt" appear. Click on it.

   > **What you should see on screen:** A black window with white text that says something like `C:\Users\Ruth>`

4. Type this exactly and press Enter:

   ```
   node --version
   ```

5. You should see a number like `v22.12.0` (the exact number doesn't matter).

   > **What you should see on screen:** The version number appears on the next line, like `v22.12.0`

**If you see an error instead, go to [Step 2: Fix the PATH Problem](#step-2-fix-the-path-problem-if-node-is-not-recognized).**

---

## Step 2: Fix the PATH Problem (If "node is not recognized")

Sometimes after installing Node.js, your computer doesn't know where to find it. This is the most common problem.

### What the error looks like:

```
'node' is not recognized as an internal or external command,
operable program or batch file.
```

### Fix Option 1: Close and reopen Command Prompt

This is the easiest fix. Sometimes your computer just needs a fresh start.

1. Close the Command Prompt window (click the X in the top right corner).
2. Open a NEW Command Prompt:
   - Press the **Windows key**
   - Type `cmd`
   - Click **Command Prompt**
3. Type `node --version` again and press Enter.

**Did it work?** Great, move on to Step 3!

**Still getting the error?** Try Fix Option 2 below.

### Fix Option 2: Restart your computer

Yes, really. This fixes the problem most of the time.

1. Save anything you're working on.
2. Click the **Start menu** (Windows key) → Click the **Power button** → Click **Restart**.
3. After your computer restarts, open Command Prompt again and try `node --version`.

**Did it work?** Move on to Step 3!

**STILL getting the error?** Try Fix Option 3 below.

### Fix Option 3: Manually add Node.js to PATH

This sounds scary, but just follow each step exactly:

1. Press the **Windows key** on your keyboard.
2. Type: `environment variables`
3. Click on **"Edit the system environment variables"**

   > **What you should see on screen:** A window called "System Properties" with tabs at the top.

4. Click the **"Environment Variables..."** button at the bottom of that window.

   > **What you should see on screen:** A new window with two sections — "User variables" on top and "System variables" on the bottom.

5. In the **top section** ("User variables"), find the one called **Path** and click on it.
6. Click the **"Edit..."** button.

   > **What you should see on screen:** A list of folder paths.

7. Click the **"New"** button.
8. Type this exactly:

   ```
   C:\Program Files\nodejs\
   ```

9. Click **OK** on every window to close them all (click OK three times).

10. **Close** any Command Prompt windows and open a **new** one.

11. Type `node --version` and press Enter. It should work now!

---

## Step 3: Install Git

Git is a program that lets you download the website project from the internet. Think of it like a special download tool for code.

### What to do:

1. Open your web browser.

2. Go to: **https://git-scm.com/download/win**

3. The download should start automatically. If it doesn't, click the link that says **"Click here to download manually"**.

   > **What you should see on screen:** A file downloading called something like `Git-2.x.x-64-bit.exe`

4. Go to your **Downloads** folder and double-click the file.

5. A setup wizard will appear. **Click Next on every screen. Don't change anything.** Just keep clicking Next until you reach Install.

   > There will be MANY screens (around 10). That's normal. Just keep clicking Next.

6. Click **Install**.

7. Click **Finish** when it's done.

### How to check it worked:

1. **Close** any open Command Prompt windows.
2. Open a **new** Command Prompt (Windows key → type `cmd` → click Command Prompt).
3. Type this and press Enter:

   ```
   git --version
   ```

4. You should see something like `git version 2.43.0`

   > **What you should see on screen:** The version number on the next line.

---

## Step 4: Set CMD as Your Default Terminal

Windows has two terminal programs: **Command Prompt (CMD)** and **PowerShell**. PowerShell often causes problems, so we want to make sure you're using CMD.

### Why this matters:

PowerShell has a security setting that blocks many commands. You might see this error:

```
File C:\...\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

CMD doesn't have this problem. So let's make sure CMD is your default.

### What to do:

1. Right-click on the **Start button** (the Windows logo in the bottom left corner of your screen).
2. Look at the menu that appears. If you see **"Command Prompt"** — great, you're already set!
3. If you see **"Windows PowerShell"** instead, do this:
   - Press the **Windows key**
   - Type: `terminal` or `Windows Terminal`
   - If **Windows Terminal** opens, click the **small down arrow** at the top of the window (next to the + tab button)
   - Click **Settings**
   - Under **"Default profile"**, change it from "Windows PowerShell" to **"Command Prompt"**
   - Click **Save**

### If you're stuck in PowerShell right now:

If you see `PS C:\Users\Ruth>` instead of `C:\Users\Ruth>`, you're in PowerShell. Just type this and press Enter:

```
cmd
```

That will switch you to Command Prompt. You'll know it worked because the `PS` at the beginning will disappear.

---

## Step 5: Download the Project

Now we're going to download the website builder project to your computer.

### First, decide where to put it:

Let's put it on your Desktop so it's easy to find.

1. Open Command Prompt (Windows key → type `cmd` → click Command Prompt).

2. Type this and press Enter:

   ```
   cd Desktop
   ```

   > **What you should see on screen:** The prompt changes to `C:\Users\Ruth\Desktop>`

3. Now type this and press Enter:

   ```
   git clone https://github.com/AJB-hub/website-builder.git
   ```

   > **Replace the URL above with the actual URL Jude gives you.** He will send you the correct link.

   > **What you should see on screen:** You'll see messages about "Cloning into...", "Receiving objects...", and finally "done." This means the download is complete.

4. Now go into the project folder. Type this and press Enter:

   ```
   cd website-builder
   ```

   > **What you should see on screen:** The prompt changes to `C:\Users\Ruth\Desktop\website-builder>`

### How to find your project folder later:

If you ever need to find this folder again:

1. Open **File Explorer** (the folder icon on your taskbar, or press **Windows key + E**).
2. Click on **Desktop** in the left sidebar.
3. You'll see a folder called **website-builder**. That's your project!

### How to get the folder path:

If any program asks you for the "folder path":

1. Open **File Explorer**.
2. Navigate to the **website-builder** folder.
3. Click on the **address bar** at the top (where it shows the folder location). It will highlight and show the full path, something like:

   ```
   C:\Users\Ruth\Desktop\website-builder
   ```

4. Press **Ctrl + C** to copy it.

---

## Step 6: Install Project Dependencies

"Dependencies" are extra pieces of software that the website builder needs to work. Think of them like ingredients for a recipe — you need them before you can cook.

### What to do:

1. Make sure you're in the project folder. Your Command Prompt should show:

   ```
   C:\Users\Ruth\Desktop\website-builder>
   ```

   If it doesn't, type this and press Enter:

   ```
   cd C:\Users\Ruth\Desktop\website-builder
   ```

2. Type this and press Enter:

   ```
   npm install
   ```

   > **What you should see on screen:** A bunch of text will scroll by. This is normal — it's downloading and installing all the pieces. Wait for it to finish (it might take 1-3 minutes depending on your internet speed).

   > When it's done, you'll see something like `added 245 packages in 30s` and get your prompt back.

### If you see warnings:

You might see yellow text that says "WARN" — **this is normal and okay.** Warnings are not errors. As long as you don't see red text that says "ERR!" you're fine.

### If you see the PowerShell error:

If you see this:

```
File C:\...\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

You're in PowerShell, not CMD. Type `cmd` and press Enter, then try `npm install` again.

---

## Step 7: Deploy to Vercel

Vercel is the service that puts your website on the internet so anyone can see it. Think of it like a hosting company — it gives your website an address that people can visit.

### Step 7a: Install Vercel CLI

1. In your Command Prompt (make sure you're in the project folder), type this and press Enter:

   ```
   npm install -g vercel
   ```

   > **What you should see on screen:** Some text scrolling, then a message saying it was added successfully.

### Step 7b: Log into Vercel

1. Type this and press Enter:

   ```
   npx vercel login
   ```

2. It will ask you how you want to log in. Use the arrow keys on your keyboard to select an option, then press Enter.

   > **Recommended:** Select **"Continue with Email"** and type in your email address.

   > **What you should see on screen:** A message saying "We sent an email to [your email]. Please follow the steps provided inside it and make sure the security code matches."

3. **Go check your email.** You'll have an email from Vercel. Click the **"Verify"** button in that email.

   > **What you should see on screen:** After you click the button in your email, go back to Command Prompt. It should say something like "Congratulations! You are now logged in."

### Step 7c: Deploy your site

1. Now you can deploy a site! You'll use a config file to tell the builder what website to create. Jude will help you set up the config file for each client.

2. When you're ready to deploy, type:

   ```
   npm run deploy
   ```

   > Jude will walk you through creating the config file for each client's website.

---

## Troubleshooting: Common Errors

### Error: "cannot be loaded because running scripts is disabled"

**Full error:**
```
File C:\Users\Ruth\AppData\Roaming\npm\npm.ps1 cannot be loaded because
running scripts is disabled on this system.
```

**What it means:** You're using PowerShell instead of Command Prompt.

**How to fix it:**

Option A (Quick fix): Type `cmd` and press Enter. Then try your command again.

Option B (Change your default): Follow [Step 4](#step-4-set-cmd-as-your-default-terminal) above to switch your default to CMD.

Option C (Fix PowerShell — only if you must use PowerShell): Open PowerShell as Administrator:
1. Press the **Windows key**
2. Type `PowerShell`
3. Right-click on **Windows PowerShell** and choose **"Run as administrator"**
4. Type this and press Enter:
   ```
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
5. Type `Y` and press Enter when it asks you to confirm.
6. Close PowerShell and try your command again.

---

### Error: "'node' is not recognized as an internal or external command"

**What it means:** Your computer can't find Node.js.

**How to fix it:** Follow [Step 2](#step-2-fix-the-path-problem-if-node-is-not-recognized) above.

---

### Error: "'git' is not recognized as an internal or external command"

**What it means:** Git isn't installed or your computer can't find it.

**How to fix it:**
1. Make sure you completed [Step 3](#step-3-install-git).
2. Close ALL Command Prompt windows.
3. Open a NEW Command Prompt.
4. Try `git --version` again.
5. If it still doesn't work, restart your computer and try again.

---

### Error: "'npm' is not recognized as an internal or external command"

**What it means:** Same as the node problem — npm comes with Node.js.

**How to fix it:** Follow the same steps as [Step 2](#step-2-fix-the-path-problem-if-node-is-not-recognized).

---

### Problem: "I don't know what folder I'm in"

**How to tell where you are:** Look at the text before the `>` in Command Prompt. That's your current folder.

For example:
- `C:\Users\Ruth>` means you're in your home folder.
- `C:\Users\Ruth\Desktop>` means you're on your Desktop.
- `C:\Users\Ruth\Desktop\website-builder>` means you're in the project folder. (This is where you want to be!)

**How to get to the project folder from anywhere:**

Type this and press Enter:
```
cd C:\Users\Ruth\Desktop\website-builder
```

---

### Problem: "The terminal shows a weird path or I'm lost"

Type this and press Enter to go back to your home folder:
```
cd %USERPROFILE%
```

Then navigate to the project:
```
cd Desktop\website-builder
```

---

### Problem: "npm install is taking forever"

This is usually an internet speed issue. In Ghana, depending on your connection, it might take 5-10 minutes. Just be patient and let it finish. Don't close the window!

If it gets stuck for more than 15 minutes, press **Ctrl + C** to stop it, then try again:
```
npm install
```

---

### Problem: "Vercel login isn't working / I didn't get the email"

1. Check your spam/junk folder.
2. Make sure you typed your email correctly.
3. Try again:
   ```
   npx vercel login
   ```
4. If you have a GitHub account, try logging in with GitHub instead — select that option when prompted.

---

### Problem: "I closed Command Prompt and don't know how to get back"

1. Press the **Windows key**.
2. Type `cmd`.
3. Click **Command Prompt**.
4. Type this to get back to the project:
   ```
   cd C:\Users\Ruth\Desktop\website-builder
   ```

---

## Quick Reference Card

Here are the commands you'll use most often. Keep this handy!

| What you want to do | Command to type |
|---|---|
| Open Command Prompt | Windows key → type `cmd` → click it |
| Go to the project folder | `cd C:\Users\Ruth\Desktop\website-builder` |
| Check if Node.js is installed | `node --version` |
| Check if Git is installed | `git --version` |
| Install project dependencies | `npm install` |
| Deploy a website | `npm run deploy` |
| Switch from PowerShell to CMD | `cmd` |
| Go to your home folder | `cd %USERPROFILE%` |

---

## Need Help?

If you get stuck on any step:
1. **Take a screenshot** of what you see on screen (press the **Print Screen** button on your keyboard, or press **Windows key + Shift + S** to use the snipping tool).
2. Send the screenshot to Jude on WhatsApp.
3. Don't worry — every error has a fix!

Remember: You cannot break your computer by typing commands in Command Prompt. The worst that can happen is an error message, and we can always fix those.

**You've got this, Ruth!**
