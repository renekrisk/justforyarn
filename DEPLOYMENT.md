# Deployment Guide for Vuka Careers Portal

This guide outlines how to build, configure, and upload the Vuka React web application to your cPanel hosting as a subfolder at `inkcoaching.co.ke/vuka`.

---

## Step 1: Build the Project

Open your local terminal in the project root and run:
```bash
npm run build
```

This compiles the TypeScript files and packages the assets into a new folder named `dist/` in your workspace.

The built `dist/` folder will have this structure:
```
dist/
├── index.html          ← references /vuka/assets/... (absolute paths with base)
├── .htaccess           ← SPA rewrite rules for /vuka/ subfolder
├── assets/
│   ├── index-*.js      ← bundled JavaScript
│   └── index-*.css     ← bundled CSS
├── favicon.svg
├── icons.svg
├── logo.png
└── vukalogo.png
```

> **Note:** `vite.config.ts` is configured with `base: '/vuka/'` so all asset paths are prefixed with `/vuka/`. This ensures the site works correctly when deployed as a subfolder.

---

## Step 2: Upload to cPanel

1. Log into **https://cpanel.inkcoaching.co.ke**
2. Open **File Manager**
3. Navigate to `/home/inkcoach/public_html/`
4. Create a new folder named `vuka` (if it doesn't exist)
5. Go inside the `vuka` folder
6. Click **Upload** at the top of the screen
7. Upload **all files and folders** from your local `dist/` directory — **preserve the `assets/` subdirectory**
8. Make sure `.htaccess` is uploaded as a file (not a directory)

---

## Step 3: Verify

Visit **https://inkcoaching.co.ke/vuka** — the site should load. Try refreshing a sub-route like `/vuka/courses` to confirm the SPA redirect works.

---

## Method 2: Automated Deployment via FTP Script

To save time on future updates, you can run an automated script. We have provided a zero-dependency Python script (`deploy.py`) in your repository.

### Running the script:
1. Make sure you run `npm run build` first to compile the latest site version.
2. Open [deploy.py](file:///c:/Users/Admin/Desktop/vuka/deploy.py) and update the credentials:
   ```python
   FTP_HOST = "inkcoaching.co.ke"
   FTP_USER = "inkcoach"
   FTP_PASS = "your_correct_password_here"
   ```
3. Run the script from your terminal:
   ```bash
   python deploy.py
   ```
   This will automatically log in, create the remote directory if it doesn't exist, and upload all files from the local `dist/` folder in the correct structure (including the `assets/` subdirectory).
