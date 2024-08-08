import React, { useState, useEffect } from 'react';
import UploadImageIOS from './UploadImageIOS.jsx';
import UploadImageAndroid from './UploadImageAndroid.jsx';
import UploadIconIOS from './UploadIconIOS.jsx';
import UploadIconAndroid from './UploadIconAndroid.jsx';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../config/i18n';
import '@fortawesome/fontawesome-free/css/all.css';

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [visibleSection, setVisibleSection] = useState('main');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const applyTheme = (theme) => {
      if (theme === 'auto') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
        }
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
      // Update favicon based on theme
      const favicon = document.getElementById('favicon');
      if (favicon) {
        if (theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          favicon.href = '/path/to/dark-mode-icon.png';
        } else {
          favicon.href = '/path/to/light-mode-icon.png';
        }
      }
    };

    applyTheme(theme);
  }, [theme]);

  const handleNavigation = (section) => {
    setVisibleSection(section);
  };

  const handleThemeChange = () => {
    setTheme((prevTheme) => {
      let newTheme;
      if (prevTheme === 'auto') newTheme = 'light';
      else if (prevTheme === 'light') newTheme = 'dark';
      else newTheme = 'auto';

      toast.info(t(newTheme === 'auto' ? 'autoMode' : newTheme === 'light' ? 'lightMode' : 'darkMode'), {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

      return newTheme;
    });
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('i18nextLng', newLang);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="top-bar">
        <select onChange={handleLanguageChange} value={i18n.language} className="language-select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="de">Deutsch</option>
          <option value="it">Italiano</option>
          <option value="pt">Português</option>
        </select>
        <button onClick={handleThemeChange} className="theme-toggle-button">
          {theme === 'auto' && <i className="fas fa-adjust"></i>}
          {theme === 'light' && <i className="fas fa-sun"></i>}
          {theme === 'dark' && <i className="fas fa-moon"></i>}
        </button>
      </div>
      {visibleSection === 'main' ? (
        <div>
          <h1>{t('titleMain')}</h1>
          <div className="content-container">
            <div className="section captures">
              <img src="/images/splash.png" alt="Capturas" className="section-imagn"/>
              <h2>{t('iosCaptures')}</h2>
              <button onClick={() => handleNavigation('ios-captures')}>{t('iosCaptures')}</button>
              <h2>{t('androidCaptures')}</h2>
              <button onClick={() => handleNavigation('android-captures')}>{t('androidCaptures')}</button>
            </div>
            <img src="/images/icon.png" alt="Íconos" className="section-image"/>

            <div className="section icons">
              <button onClick={() => handleNavigation('ios-icons')}>{t('iosIcons')}</button>
     
              <button onClick={() => handleNavigation('android-icons')}>{t('androidIcons')}</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => handleNavigation('main')} className="back-button">
            <i className="fas fa-arrow-left"></i>
          </button>
          {visibleSection === 'ios-captures' && (
            <section>
              <h2>{t('iosCaptures')}</h2>
              <UploadImageIOS />
            </section>
          )}
          {visibleSection === 'android-captures' && (
            <section>
              <h2>{t('androidCaptures')}</h2>
              <UploadImageAndroid />
            </section>
          )}
          {visibleSection === 'ios-icons' && (
            <section>
              <h2>{t('iosIcons')}</h2>
              <UploadIconIOS />
            </section>
          )}
          {visibleSection === 'android-icons' && (
            <section>
              <h2>{t('androidIcons')}</h2>
              <UploadIconAndroid />
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default MainPage;
