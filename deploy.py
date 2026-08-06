import os
from ftplib import FTP, error_perm

# ── FTP Configuration ────────────────────────────────────────────────────────
FTP_HOST = "inkcoaching.co.ke"
FTP_USER = "inkcoach"
FTP_PASS = "YOUR_CORRECT_PASSWORD"  # Replace this with your correct password

# Target directory on the hosting server.
# Deploying to subfolder: inkcoaching.co.ke/vuka
REMOTE_TARGET_DIR = "/public_html/vuka"
LOCAL_BUILD_DIR = "dist"


def ensure_remote_dir(ftp, path):
    """
    Recursively ensures that a directory path exists on the FTP server.
    """
    parts = filter(None, path.split("/"))
    current_path = ""
    for part in parts:
        current_path += "/" + part
        try:
            ftp.cwd(current_path)
        except error_perm:
            print(f"[FTP] Creating remote directory: {current_path}")
            ftp.mkd(current_path)
            ftp.cwd(current_path)


def upload_directory(ftp, local_dir, remote_dir):
    """
    Recursively walks through a local folder and uploads all files via FTP.
    """
    ensure_remote_dir(ftp, remote_dir)

    for item in os.listdir(local_dir):
        local_path = os.path.join(local_dir, item)
        remote_path = remote_dir + "/" + item

        if os.path.isdir(local_path):
            # Recurse into subdirectory
            upload_directory(ftp, local_path, remote_path)
        else:
            # Upload file in binary mode
            print(f"[FTP] Uploading: {local_path} -> {remote_path}")
            with open(local_path, "rb") as f:
                ftp.storbinary(f"STOR {item}", f)


def main():
    if not os.path.exists(LOCAL_BUILD_DIR):
        print(f"[Error] Local build directory '{LOCAL_BUILD_DIR}' not found.")
        print("Please run 'npm run build' first to compile the website.")
        return

    print("=== Starting Vuka Website FTP Deployment ===")
    print(f"Connecting to: {FTP_HOST} as {FTP_USER}...")

    try:
        # Initialize FTP connection
        ftp = FTP()
        ftp.connect(FTP_HOST, 21, timeout=30)
        ftp.login(FTP_USER, FTP_PASS)
        print("[FTP] Connection established successfully.")

        # Upload files recursively
        upload_directory(ftp, LOCAL_BUILD_DIR, REMOTE_TARGET_DIR)

        # Close FTP session
        ftp.quit()
        print("\n=== Deployment Completed Successfully! ===")
        print(f"Your site has been deployed to the {REMOTE_TARGET_DIR} directory.")

    except error_perm as ep:
        print(f"\n[FTP Permission Error] Failed to complete operations: {ep}")
        print("Please double check that your password is correct and your user has write permissions.")
    except Exception as e:
        print(f"\n[Error] Deployment failed: {e}")


if __name__ == "__main__":
    main()
