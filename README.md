<<<<<<< HEAD
# Generate-screenshots-for-iOS-and-Android-devices

This project allows generating screenshots and icons for iOS and Android devices.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
=======


# Screenshot and Icon Generator for iOS and Android

https://generate-screenshots.lweb.ch

![Logo](https://lweb.ch/images/logo1.png)

![Logo](https://lweb.ch/images/logo2.png)

This web application allows you to generate screenshots and icons for the resolutions required by Apple and Google. It is built using Astro, React, and i18next for internationalization, and it is fully compatible with different themes (light mode, dark mode, and auto mode based on the operating system).

## Features

- **Screenshot Generation**:
  - Generate screenshots for iOS and Android devices.
  - Simple process for uploading and selecting resolutions.
- **Icon Generation**:
  - Generate icons in various sizes required for iOS and Android applications.
- **Internationalization**:
  - Multilingual support (English, Spanish, German, Italian, Portuguese).
  - Dynamic language switching from the user interface.
- **Theme Support**:
  - Light mode, dark mode, and automatic mode based on system settings.
  - Dynamic theme switching from the user interface.
- **Notifications**:
  - Theme change notifications using `react-toastify`.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/donia1222/Generate-screenshots-for-iOS-and-Android-devices
   cd Generate-screenshots-for-iOS-and-Android-devices
Install dependencies:
sh
Copiar código
npm install
Start the development server:
sh

npm run dev
Usage

Uploading Images
Navigate to the screenshot or icon section.
Upload an image from your device.
Select the desired resolutions.
Click "Submit" to generate the images.
Changing Language
Use the language selector in the top left to change the interface language.
Changing Theme
Use the theme button in the top right to switch between light mode, dark mode, and automatic mode.
Project Structure

src/ - Application source code.
components/ - React components used in the application.
UploadImageIOS.jsx - Component for uploading and processing images for iOS.
UploadImageAndroid.jsx - Component for uploading and processing images for Android.
UploadIconIOS.jsx - Component for uploading and processing icons for iOS.
UploadIconAndroid.jsx - Component for uploading and processing icons for Android.
MainPage.jsx - Main component that handles navigation and theme switching.
config/ - i18n configuration for internationalization.
i18n.js - i18n configuration and resources.
styles/ - CSS style files.
styles.css - Global application styles.
public/ - Publicly accessible files from the server root.
images/ - Directory for images (sample icons and screenshots).
Technologies Used

Astro: Static framework for building the application.
React: JavaScript library for building the user interface.
i18next: Library for internationalization.
react-toastify: Library for toast notifications.
FontAwesome: Icon library to enhance the user interface.
Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the project.
Clone your fork:
sh

git clone https://github.com/your-username/your-fork.git
Create a branch for your feature or fix:
sh

git checkout -b my-new-feature
Make your changes and commit:
sh

git commit -m "Add new feature"
Push to your branch:
sh

git push origin my-new-feature
Open a Pull Request in the original repository.
License

This project is licensed under the MIT License. See the LICENSE file for details.

>>>>>>> f1252455ac65688572af1ade801e77198cf70136
