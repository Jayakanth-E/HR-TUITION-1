# HR Tuition Centre Management System - Deployment & Production Guide

This guide provides step-by-step instructions for deploying the **HR Tuition Centre Management System** for genuine production use, configuring backend databases, managing security secrets, and publishing as an installable mobile app.

---

## 🛠️ Architecture Summary

* **Frontend**: React 18, Vite 5, Tailwind CSS, Recharts (Responsive PWA)
* **Backend**: Node.js, Express, JWT Authentication, bcrypt Password Hashing, Rate Limiting
* **Database**: SQLite (built-in file database with WAL mode) or PostgreSQL
* **Mobile Installation**: Progressive Web App (PWA) + TWA Android APK support

---

## 📋 Step 1: First-Time Setup & Admin Credentials

1. Launch the application.
2. On first launch, the **First-Time Admin Setup Page** appears automatically.
3. Create your custom administrator account:
   * **Admin Username**: Choose a secure username (e.g. `hradmingrish`).
   * **Password**: Minimum 8 characters combining letters and numbers.
   * **Security Recovery Question & Answer**: Set a secret answer for resetting your password if forgotten.
4. Once created, no demo or default credentials exist. Your custom account is saved securely in the backend database.

---

## 📱 Step 2: Mobile App Installation (PWA & APK)

### Method A: Direct Home Screen PWA Installation (Recommended)
1. Open your published website URL in **Chrome** on Android or **Safari** on iOS.
2. Click the floating banner **"Install HR Tuition App on Mobile"** or tap Chrome menu (`⋮`) -> **"Add to Home Screen"**.
3. The app installs on your smartphone home screen and launches in full-screen mode without browser address bars.

### Method B: Generating a Standalone Android APK File
PWAs provide home-screen installation. If you require a standalone `.apk` file for sideloading or Google Play Store publishing:
1. Install **Bubblewrap CLI** (Trusted Web Activity wrapper by Google):
   ```bash
   npm install -g @bubblewrap/cli
   ```
2. Initialize and generate Android Studio project:
   ```bash
   bubblewrap init --manifest=https://your-domain.com/manifest.json
   bubblewrap build
   ```
3. This compiles a signed `app-release-signed.apk` file ready for distribution.

---

## 🌐 Step 3: Production Server Deployment

### 1. Host on Render / Railway / Heroku (Full-Stack Deployment)

#### Step 3.1: Build Production Frontend
Run the build script to compile static web assets into `dist/`:
```bash
npm run build
```

#### Step 3.2: Configure Environment Variables
Set the following environment variables on your hosting control panel:
* `PORT`: `5000` (or assigned port)
* `NODE_ENV`: `production`
* `JWT_SECRET`: Generate a random 64-character secret key.
* `DATABASE_PATH`: `./tuition.db` (or PostgreSQL connection string `DATABASE_URL`).

#### Step 3.3: Start Production Server
Set your hosting start command:
```bash
npm start
```
The Express backend automatically serves both the API endpoints (`/api/...`) and the production React frontend from `dist/`.

---

## 🔐 Security Checklist for Production

* [x] **No Plaintext Passwords**: Passwords stored as salted bcrypt hashes.
* [x] **JWT Sessions**: Express routes protected via HttpOnly JWT session tokens.
* [x] **Rate Limiting**: Auth endpoints protected against brute-force attacks.
* [x] **HTTPS Encryption**: Ensure your domain has an SSL/TLS certificate enabled (provided free on Vercel/Render/Cloudflare).
* [x] **Database Backups**: Download JSON backups periodically from **Settings -> JSON Data Backup & Restore**.

---

## 👤 Actions Required by Tuition Owner

1. **Host Server & Domain**: Deploy project to a cloud host (Render, Vercel, Railway, or VPS).
2. **Configure Custom JWT Secret**: Replace `JWT_SECRET` in `.env` with a strong private key.
3. **Complete First-Time Setup**: Set up your private admin username & password on first launch.
