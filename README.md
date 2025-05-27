# Dars Initiative Website

A modern, responsive website for the Dars Initiative built with React, featuring both web and mobile applications.

## 🚀 Features

- Responsive design that works on desktop and mobile devices
- Modern UI with smooth animations
- Interactive timeline components
- Mobile-first approach
- Progressive Web App (PWA) support
- Native mobile app support (iOS and Android)

## 🛠️ Tech Stack

### Web Application
- React 19
- React Router DOM 7
- Stripe Integration
- CSS3 with modern features
- Progressive Web App (PWA) support

### Mobile Application
- React Native
- Expo
- TypeScript
- React Navigation
- Expo Router

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Getting Started

### Web Application

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd darsinitiative-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Mobile Application

1. Navigate to the mobile project directory:
   ```bash
   cd darsinitiative-mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Run on your preferred platform:
   - Press `i` to open in iOS simulator
   - Press `a` to open in Android emulator
   - Scan the QR code with Expo Go app on your physical device

## 📱 Mobile Device Testing

### Viewing on Physical Mobile Devices

1. Ensure your computer and mobile device are on the same WiFi network

2. Start the development server:
   ```bash
   npm start
   ```

3. Look for the "On Your Network" URL in the terminal output:
   ```
   Local:            http://localhost:3000
   On Your Network:  http://192.168.x.x:3000
   ```

4. On your mobile device:
   - Open your mobile browser
   - Enter the "On Your Network" URL shown in your terminal
   - The website will load on your mobile device

### Testing with Browser Developer Tools

1. **Chrome DevTools (Recommended)**:
   - Open the website in Chrome
   - Press F12 or right-click and select "Inspect"
   - Click the "Toggle device toolbar" button (mobile icon) or press Ctrl+Shift+M
   - Select different mobile devices from the dropdown
   - Test different screen sizes and orientations

2. **Other Browsers**:
   - Firefox: Press F12 and click the "Responsive Design Mode" button
   - Safari: Enable Developer Tools in Preferences > Advanced, then use Develop > Enter Responsive Design Mode

### Mobile Testing Features

The website includes:
- Responsive design for all screen sizes
- Mobile-optimized navigation
- Touch-friendly interface
- Optimized images and assets
- Mobile-specific CSS breakpoints

## 🏗️ Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The build process will:
   - Create a production-ready build in the `build` folder
   - Optimize and minify all files
   - Generate static files ready for deployment
   - Create source maps for debugging
   - Optimize assets and images

3. Test the production build locally:
   ```bash
   # Install serve if you haven't already
   npm install -g serve

   # Serve the build directory
   serve -s build
   ```

4. The build directory contains:
   - `index.html` - The main HTML file
   - `static/` - Directory containing all JavaScript, CSS, and other assets
   - `asset-manifest.json` - Manifest of all built files
   - `manifest.json` - PWA manifest file
   - `robots.txt` - Search engine crawler instructions
   - `favicon.ico` and other icons

## 📦 Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🎨 Project Structure


## 📱 Mobile App

This project includes a separate mobile application in the `darsinitiative-mobile` directory. See its README for specific instructions.

## 🎨 Project Structure
