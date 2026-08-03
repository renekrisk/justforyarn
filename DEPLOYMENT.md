# Deployment Guide for Vuka Careers Portal

This guide outlines how to build, configure, and upload the Vuka React web application to your cPanel hosting for `inkcoaching.co.ke`.

---

## Method 1: Manual Deployment via cPanel File Manager (Recommended)

### 1. Build the Project
Open your local terminal in the project root and run:
```bash
npm run build
```
This compiles the TypeScript files and packages the assets into a new folder named `dist/` in your workspace.

### 2. Configure React Router Redirects (`.htaccess`)
Because this is a Single Page Application (SPA) utilizing React Router, you need to configure Apache to redirect all sub-routes (e.g., `/courses`, `/about`, `/training`) back to `index.html`. Otherwise, refreshing these pages on a live server will throw a "404 Not Found" error.

Create a file named `.htaccess` inside the **`dist/`** directory on your local machine and paste the corresponding configuration:

* **If deploying to a subfolder (e.g., `https://inkcoaching.co.ke/vuka`)**:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /vuka/
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /vuka/index.html [L]
  </IfModule>
  ```

* **If deploying to a subdomain or main domain (e.g., `https://vuka.inkcoaching.co.ke`)**:
  ```apache
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
  </IfModule>
  ```

### 3. Compress the Build
1. Go inside your `dist/` directory.
2. Select **all items** inside `dist/` (including the `.htaccess` file, the `assets` folder, `favicon.svg`, etc.).
3. Compress them into a ZIP archive named `vuka_build.zip`.
   *(Note: Make sure to zip the contents inside the `dist` folder directly, not the `dist` folder itself).*

### 4. Upload and Extract in cPanel
1. Navigate to: **`https://cpanel.inkcoaching.co.ke`**
2. Log in using your cPanel username (`inkcoach`) and your correct password.
3. Open **File Manager**.
4. Go into the **`public_html`** directory.
5. Choose your target destination:
   - **For Subfolder**: Create a new folder named `vuka` and go inside it.
   - **For Subdomain**: Go to your subdomain's designated document root.
6. Click **Upload** at the top of the screen and upload `vuka_build.zip`.
7. Once finished, right-click `vuka_build.zip` inside File Manager and select **Extract**.
8. Refresh the directory and delete the `vuka_build.zip` file.

---

## Method 2: Automated Deployment via FTP Script

To save time on future updates, you can run an automated script. We have provided a zero-dependency Python script (`deploy.py`) in your repository.

### Running the script:
1. Make sure you run `npm run build` first to compile the latest site version.
2. Ensure you have created the `.htaccess` file inside `dist/` (see Step 2 above).
3. Open [deploy.py](file:///c:/Users/Admin/Desktop/vuka/deploy.py) and update the credentials:
   ```python
   FTP_HOST = "inkcoaching.co.ke"
   FTP_USER = "inkcoach"
   FTP_PASS = "your_correct_password_here"
   ```
4. Run the script from your terminal:
   ```bash
   python deploy.py
   ```
   This will automatically log in, create the remote directory if it doesn't exist, and upload all files from the local `dist/` folder in the correct structure.
