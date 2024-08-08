# Screenshot and Icon Generator for iOS and Android

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
   git clone https://github.com/your-username/your-repository.git
   cd your-repository


Uploading Images:
Navigate to the screenshot or icon section.
Upload an image from your device.
Select the desired resolutions.
Click "Submit" to generate the images.
Changing Language:
Use the language selector in the top left to change the interface language.
Changing Theme:
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
