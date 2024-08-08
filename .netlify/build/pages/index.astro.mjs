import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderComponent } from '../chunks/astro/server_BZo9tnJG.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
/* empty css                                 */
import { ToastContainer, toast } from 'react-toastify';
export { renderers } from '../renderers.mjs';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "uploadImage": "Upload an Image",
          "submit": "Submit",
          "selectResolutions": "Select Resolutions",
          "titleIOS": "Generate Screenshots for Apple Required Resolutions",
          "descriptionIOS": "Use this tool to create the necessary screenshots for submitting your app to Apple, ensuring they meet the required resolutions for various devices.",
          "iphone65": "iPhone 6.5 inches",
          "iphone67": "iPhone 6.7 inches",
          "iphone55": "iPhone 5.5 inches",
          "ipad13": "iPad Pro 12.9 inches",
          "ipad11": "iPad Pro 11 inches",
          "allResolutions": "All resolutions",
          "processedImages": "Processed Images",
          "titleAndroid": "Generate Screenshots for Android Required Resolutions",
          "descriptionAndroid": "Use this tool to create the necessary screenshots for submitting your app to the Google Play Store, ensuring they meet the required resolutions for various devices.",
          "hdpi": "HDPI (480x800)",
          "xhdpi": "XHDPI (720x1280)",
          "xxhdpi": "XXHDPI (1080x1920)",
          "xxxhdpi": "XXXHDPI (1440x2560)",
          "tablet": "Tablet (1280x800)",
          "titleMain": "Generate Screenshots and Icons",
          "iosCaptures": "iOS Captures",
          "androidCaptures": "Android Captures",
          "iosIcons": "iOS Icons",
          "androidIcons": "Android Icons",
          "backToTop": "Back to Top",
          "titleIOSIcons": "Generate Icons for iOS",
          "titleAndroidIcons": "Generate Icons for Android",
          "processedIcons": "Processed Icons",
          "autoMode": "Auto Mode",
          "lightMode": "Light Mode",
          "darkMode": "Dark Mode"
        }
      },
      es: {
        translation: {
          "uploadImage": "Sube una imagen",
          "submit": "Enviar",
          "selectResolutions": "Selecciona Resoluciones",
          "titleIOS": "Generar Capturas de Pantalla para las Resoluciones Requeridas por Apple",
          "descriptionIOS": "Utiliza esta herramienta para crear las capturas de pantalla necesarias para enviar tu aplicación a Apple, asegurando que cumplan con las resoluciones requeridas para diversos dispositivos.",
          "iphone65": "iPhone 6.5 pulgadas",
          "iphone67": "iPhone 6.7 pulgadas",
          "iphone55": "iPhone 5.5 pulgadas",
          "ipad13": "iPad Pro 12.9 pulgadas",
          "ipad11": "iPad Pro 11 pulgadas",
          "allResolutions": "Todas las resoluciones",
          "processedImages": "Imágenes Procesadas",
          "titleAndroid": "Generar Capturas de Pantalla para las Resoluciones Requeridas por Android",
          "descriptionAndroid": "Utiliza esta herramienta para crear las capturas de pantalla necesarias para enviar tu aplicación a Google Play Store, asegurando que cumplan con las resoluciones requeridas para diversos dispositivos.",
          "hdpi": "HDPI (480x800)",
          "xhdpi": "XHDPI (720x1280)",
          "xxhdpi": "XXHDPI (1080x1920)",
          "xxxhdpi": "XXXHDPI (1440x2560)",
          "tablet": "Tablet (1280x800)",
          "titleMain": "Generar Capturas e Íconos",
          "iosCaptures": "iOS Capturas",
          "androidCaptures": "Android Capturas",
          "iosIcons": "iOS Íconos",
          "androidIcons": "Android Íconos",
          "backToTop": "Volver arriba",
          "titleIOSIcons": "Generar Íconos para iOS",
          "titleAndroidIcons": "Generar Íconos para Android",
          "processedIcons": "Íconos Procesados",
          "autoMode": "Modo Automático",
          "lightMode": "Modo Claro",
          "darkMode": "Modo Oscuro"
        }
      },
      de: {
        translation: {
          "uploadImage": "Ein Bild hochladen",
          "submit": "Einreichen",
          "selectResolutions": "Auflösungen auswählen",
          "titleIOS": "Screenshots für von Apple erforderliche Auflösungen erstellen",
          "descriptionIOS": "Verwenden Sie dieses Tool, um die erforderlichen Screenshots für die Einreichung Ihrer App bei Apple zu erstellen, und sicherzustellen, dass sie den erforderlichen Auflösungen für verschiedene Geräte entsprechen.",
          "iphone65": "iPhone 6.5 Zoll",
          "iphone67": "iPhone 6.7 Zoll",
          "iphone55": "iPhone 5.5 Zoll",
          "ipad13": "iPad Pro 12.9 Zoll",
          "ipad11": "iPad Pro 11 Zoll",
          "allResolutions": "Alle Auflösungen",
          "processedImages": "Verarbeitete Bilder",
          "titleAndroid": "Screenshots für von Android erforderliche Auflösungen erstellen",
          "descriptionAndroid": "Verwenden Sie dieses Tool, um die erforderlichen Screenshots für die Einreichung Ihrer App im Google Play Store zu erstellen, und sicherzustellen, dass sie den erforderlichen Auflösungen für verschiedene Geräte entsprechen.",
          "hdpi": "HDPI (480x800)",
          "xhdpi": "XHDPI (720x1280)",
          "xxhdpi": "XXHDPI (1080x1920)",
          "xxxhdpi": "XXXHDPI (1440x2560)",
          "tablet": "Tablet (1280x800)",
          "titleMain": "Screenshots und Symbole erstellen",
          "iosCaptures": "iOS-Screenshots",
          "androidCaptures": "Android-Screenshots",
          "iosIcons": "iOS-Symbole",
          "androidIcons": "Android-Symbole",
          "backToTop": "Zurück nach oben",
          "titleIOSIcons": "Symbole für iOS erstellen",
          "titleAndroidIcons": "Symbole für Android erstellen",
          "processedIcons": "Verarbeitete Symbole",
          "autoMode": "Automatischer Modus",
          "lightMode": "Heller Modus",
          "darkMode": "Dunkler Modus"
        }
      },
      it: {
        translation: {
          "uploadImage": "Carica un'immagine",
          "submit": "Invia",
          "selectResolutions": "Seleziona risoluzioni",
          "titleIOS": "Genera screenshot per le risoluzioni richieste da Apple",
          "descriptionIOS": "Usa questo strumento per creare gli screenshot necessari per inviare la tua app ad Apple, assicurandoti che soddisfino le risoluzioni richieste per vari dispositivi.",
          "iphone65": "iPhone 6.5 pollici",
          "iphone67": "iPhone 6.7 pollici",
          "iphone55": "iPhone 5.5 pollici",
          "ipad13": "iPad Pro 12.9 pollici",
          "ipad11": "iPad Pro 11 pollici",
          "allResolutions": "Tutte le risoluzioni",
          "processedImages": "Immagini elaborate",
          "titleAndroid": "Genera screenshot per le risoluzioni richieste da Android",
          "descriptionAndroid": "Usa questo strumento per creare gli screenshot necessari per inviare la tua app al Google Play Store, assicurandoti che soddisfino le risoluzioni richieste per vari dispositivi.",
          "hdpi": "HDPI (480x800)",
          "xhdpi": "XHDPI (720x1280)",
          "xxhdpi": "XXHDPI (1080x1920)",
          "xxxhdpi": "XXXHDPI (1440x2560)",
          "tablet": "Tablet (1280x800)",
          "titleMain": "Genera screenshot e icone",
          "iosCaptures": "Screenshot iOS",
          "androidCaptures": "Screenshot Android",
          "iosIcons": "Icone iOS",
          "androidIcons": "Icone Android",
          "backToTop": "Torna all'inizio",
          "titleIOSIcons": "Genera icone per iOS",
          "titleAndroidIcons": "Genera icone per Android",
          "processedIcons": "Icone elaborate",
          "autoMode": "Modalità automatica",
          "lightMode": "Modalità chiara",
          "darkMode": "Modalità scura"
        }
      },
      pt: {
        translation: {
          "uploadImage": "Carregar uma imagem",
          "submit": "Enviar",
          "selectResolutions": "Selecionar resoluções",
          "titleIOS": "Gerar capturas de tela para as resoluções exigidas pela Apple",
          "descriptionIOS": "Use esta ferramenta para criar as capturas de tela necessárias para enviar seu aplicativo para a Apple, garantindo que atendam às resoluções exigidas para vários dispositivos.",
          "iphone65": "iPhone 6.5 polegadas",
          "iphone67": "iPhone 6.7 polegadas",
          "iphone55": "iPhone 5.5 polegadas",
          "ipad13": "iPad Pro 12.9 polegadas",
          "ipad11": "iPad Pro 11 polegadas",
          "allResolutions": "Todas as resoluções",
          "processedImages": "Imagens processadas",
          "titleAndroid": "Gerar capturas de tela para as resoluções exigidas pelo Android",
          "descriptionAndroid": "Use esta ferramenta para criar as capturas de tela necessárias para enviar seu aplicativo para a Google Play Store, garantindo que atendam às resoluções exigidas para vários dispositivos.",
          "hdpi": "HDPI (480x800)",
          "xhdpi": "XHDPI (720x1280)",
          "xxhdpi": "XXHDPI (1080x1920)",
          "xxxhdpi": "XXXHDPI (1440x2560)",
          "tablet": "Tablet (1280x800)",
          "titleMain": "Gerar capturas de tela e ícones",
          "iosCaptures": "Capturas de tela do iOS",
          "androidCaptures": "Capturas de tela do Android",
          "iosIcons": "Ícones do iOS",
          "androidIcons": "Ícones do Android",
          "backToTop": "Voltar ao topo",
          "titleIOSIcons": "Gerar ícones para iOS",
          "titleAndroidIcons": "Gerar ícones para Android",
          "processedIcons": "Ícones processados",
          "autoMode": "Modo automático",
          "lightMode": "Modo claro",
          "darkMode": "Modo escuro"
        }
      }
    },
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const UploadImageIOS = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [selectedResolutions, setSelectedResolutions] = useState([]);
  const [preview, setPreview] = useState(null);
  const handleResolutionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedResolutions(
      (prev) => checked ? [...prev, value] : prev.filter((res) => res !== value)
    );
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById("previewCanvas");
          const ctx = canvas.getContext("2d");
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const processedImages = await processImage(file);
    setImages(processedImages);
  };
  const processImage = async (file) => {
    const resolutions2 = {
      iphone65: { width: 1242, height: 2688, label: t("iphone65") },
      iphone67: { width: 1284, height: 2778, label: t("iphone67") },
      iphone55: { width: 1242, height: 2208, label: t("iphone55") },
      ipad13: { width: 2048, height: 2732, label: t("ipad13") },
      ipad11: { width: 1668, height: 2388, label: t("ipad11") }
    };
    const processedImages = [];
    for (const [device, { width, height, label }] of Object.entries(resolutions2)) {
      if (selectedResolutions.includes(device)) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = await createImageBitmap(file);
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const url = canvas.toDataURL("image/jpeg");
        processedImages.push({ url, label });
      }
    }
    return processedImages;
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: t("titleIOS") }),
    /* @__PURE__ */ jsx("div", { className: "icons", children: /* @__PURE__ */ jsx("i", { className: "fab fa-apple fa-3x" }) }),
    /* @__PURE__ */ jsx("p", { children: t("descriptionIOS") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "image", children: [
        t("uploadImage"),
        ":"
      ] }),
      /* @__PURE__ */ jsx("input", { type: "file", id: "image", name: "image", accept: "image/*", onChange: handleImageChange, required: true }),
      preview && /* @__PURE__ */ jsx("div", { className: "preview", children: /* @__PURE__ */ jsx(
        "canvas",
        {
          id: "previewCanvas",
          width: 200,
          height: 200,
          style: { border: "1px solid #dddddd", borderRadius: "5px" }
        }
      ) }),
      /* @__PURE__ */ jsxs("fieldset", { children: [
        /* @__PURE__ */ jsxs("legend", { children: [
          t("selectResolutions"),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "iphone65",
              onChange: handleResolutionChange
            }
          ),
          t("iphone65")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "iphone67",
              onChange: handleResolutionChange
            }
          ),
          t("iphone67")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "iphone55",
              onChange: handleResolutionChange
            }
          ),
          t("iphone55")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "ipad13",
              onChange: handleResolutionChange
            }
          ),
          t("ipad13")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "ipad11",
              onChange: handleResolutionChange
            }
          ),
          t("ipad11")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "all",
              onChange: (event) => {
                const { checked } = event.target;
                if (checked) {
                  setSelectedResolutions(Object.keys(resolutions));
                } else {
                  setSelectedResolutions([]);
                }
              }
            }
          ),
          t("allResolutions")
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: t("submit") })
    ] }),
    images.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: t("processedImages") }),
      images.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "image-container", children: [
        /* @__PURE__ */ jsx("p", { children: image.label }),
        /* @__PURE__ */ jsx("a", { href: image.url, download: `processed-${index}.jpg`, children: /* @__PURE__ */ jsx("img", { src: image.url, alt: `Processed ${index}` }) })
      ] }, index))
    ] })
  ] });
};

const UploadImageAndroid = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [selectedResolutions, setSelectedResolutions] = useState([]);
  const [preview, setPreview] = useState(null);
  const handleResolutionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedResolutions(
      (prev) => checked ? [...prev, value] : prev.filter((res) => res !== value)
    );
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById("previewCanvasAndroid");
          const ctx = canvas.getContext("2d");
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const processedImages = await processImage(file);
    setImages(processedImages);
  };
  const processImage = async (file) => {
    const resolutions2 = {
      hdpi: { width: 480, height: 800, label: t("hdpi") },
      xhdpi: { width: 720, height: 1280, label: t("xhdpi") },
      xxhdpi: { width: 1080, height: 1920, label: t("xxhdpi") },
      xxxhdpi: { width: 1440, height: 2560, label: t("xxxhdpi") },
      tablet: { width: 1280, height: 800, label: t("tablet") }
    };
    const processedImages = [];
    for (const [device, { width, height, label }] of Object.entries(resolutions2)) {
      if (selectedResolutions.includes(device)) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = await createImageBitmap(file);
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const url = canvas.toDataURL("image/jpeg");
        processedImages.push({ url, label });
      }
    }
    return processedImages;
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: t("titleAndroid") }),
    /* @__PURE__ */ jsx("div", { className: "icons", children: /* @__PURE__ */ jsx("i", { className: "fab fa-google-play fa-3x" }) }),
    /* @__PURE__ */ jsx("p", { children: t("descriptionAndroid") }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "image", children: [
        t("uploadImage"),
        ":"
      ] }),
      /* @__PURE__ */ jsx("input", { type: "file", id: "image", name: "image", accept: "image/*", onChange: handleImageChange, required: true }),
      preview && /* @__PURE__ */ jsx("div", { className: "preview", children: /* @__PURE__ */ jsx(
        "canvas",
        {
          id: "previewCanvasAndroid",
          width: 200,
          height: 200,
          style: { border: "1px solid #dddddd", borderRadius: "5px" }
        }
      ) }),
      /* @__PURE__ */ jsxs("fieldset", { children: [
        /* @__PURE__ */ jsxs("legend", { children: [
          t("selectResolutions"),
          ":"
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "hdpi",
              onChange: handleResolutionChange
            }
          ),
          t("hdpi")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "xhdpi",
              onChange: handleResolutionChange
            }
          ),
          t("xhdpi")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "xxhdpi",
              onChange: handleResolutionChange
            }
          ),
          t("xxhdpi")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "xxxhdpi",
              onChange: handleResolutionChange
            }
          ),
          t("xxxhdpi")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "tablet",
              onChange: handleResolutionChange
            }
          ),
          t("tablet")
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              value: "all",
              onChange: (event) => {
                const { checked } = event.target;
                if (checked) {
                  setSelectedResolutions(Object.keys(resolutions));
                } else {
                  setSelectedResolutions([]);
                }
              }
            }
          ),
          t("allResolutions")
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: t("submit") })
    ] }),
    images.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: t("processedImages") }),
      images.map((image, index) => /* @__PURE__ */ jsxs("div", { className: "image-container", children: [
        /* @__PURE__ */ jsx("p", { children: image.label }),
        /* @__PURE__ */ jsx("a", { href: image.url, download: `processed-${index}.jpg`, children: /* @__PURE__ */ jsx("img", { src: image.url, alt: `Processed ${index}` }) })
      ] }, index))
    ] })
  ] });
};

const UploadIconIOS = () => {
  const { t } = useTranslation();
  const [icons, setIcons] = useState([]);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById("previewCanvasIconIOS");
          const ctx = canvas.getContext("2d");
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const processedIcons = await processImage(file);
    setIcons(processedIcons);
  };
  const processImage = async (file) => {
    const resolutions = {
      icon20: { width: 20, height: 20, label: "20x20" },
      icon29: { width: 29, height: 29, label: "29x29" },
      icon40: { width: 40, height: 40, label: "40x40" },
      icon60: { width: 60, height: 60, label: "60x60" },
      icon76: { width: 76, height: 76, label: "76x76" },
      icon83_5: { width: 83.5, height: 83.5, label: "83.5x83.5" },
      icon1024: { width: 1024, height: 1024, label: "1024x1024" }
    };
    const processedIcons = [];
    for (const { width, height, label } of Object.values(resolutions)) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = await createImageBitmap(file);
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const url = canvas.toDataURL("image/png");
      processedIcons.push({ url, label });
    }
    return processedIcons;
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: t("titleIOSIcons") }),
    /* @__PURE__ */ jsx("div", { className: "icons", children: /* @__PURE__ */ jsx("i", { className: "fab fa-apple fa-3x" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "image", children: [
        t("uploadImage"),
        ":"
      ] }),
      /* @__PURE__ */ jsx("input", { type: "file", id: "image", name: "image", accept: "image/*", onChange: handleImageChange, required: true }),
      preview && /* @__PURE__ */ jsx("div", { className: "preview", children: /* @__PURE__ */ jsx(
        "canvas",
        {
          id: "previewCanvasIconIOS",
          width: 200,
          height: 200,
          style: { border: "1px solid #dddddd", borderRadius: "5px" }
        }
      ) }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: t("submit") })
    ] }),
    icons.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: t("processedIcons") }),
      icons.map((icon, index) => /* @__PURE__ */ jsxs("div", { className: "icon-container", children: [
        /* @__PURE__ */ jsx("p", { children: icon.label }),
        /* @__PURE__ */ jsx("a", { href: icon.url, download: `icon-${icon.label}.png`, children: /* @__PURE__ */ jsx("img", { src: icon.url, alt: `Icon ${icon.label}` }) })
      ] }, index))
    ] })
  ] });
};

const UploadIconAndroid = () => {
  const { t } = useTranslation();
  const [icons, setIcons] = useState([]);
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        const img = new Image();
        img.onload = () => {
          const canvas = document.getElementById("previewCanvasIconAndroid");
          const ctx = canvas.getContext("2d");
          canvas.width = 200;
          canvas.height = 200;
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const file = event.target.image.files[0];
    const processedIcons = await processImage(file);
    setIcons(processedIcons);
  };
  const processImage = async (file) => {
    const resolutions = {
      mdpi: { width: 48, height: 48, label: "48x48 (mdpi)" },
      hdpi: { width: 72, height: 72, label: "72x72 (hdpi)" },
      xhdpi: { width: 96, height: 96, label: "96x96 (xhdpi)" },
      xxhdpi: { width: 144, height: 144, label: "144x144 (xxhdpi)" },
      xxxhdpi: { width: 192, height: 192, label: "192x192 (xxxhdpi)" }
    };
    const processedIcons = [];
    for (const { width, height, label } of Object.values(resolutions)) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = await createImageBitmap(file);
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      const url = canvas.toDataURL("image/png");
      processedIcons.push({ url, label });
    }
    return processedIcons;
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h1", { children: t("titleAndroidIcons") }),
    /* @__PURE__ */ jsx("div", { className: "icons", children: /* @__PURE__ */ jsx("i", { className: "fab fa-google-play fa-3x" }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "form", children: [
      /* @__PURE__ */ jsxs("label", { htmlFor: "image", children: [
        t("uploadImage"),
        ":"
      ] }),
      /* @__PURE__ */ jsx("input", { type: "file", id: "image", name: "image", accept: "image/*", onChange: handleImageChange, required: true }),
      preview && /* @__PURE__ */ jsx("div", { className: "preview", children: /* @__PURE__ */ jsx(
        "canvas",
        {
          id: "previewCanvasIconAndroid",
          width: 200,
          height: 200,
          style: { border: "1px solid #dddddd", borderRadius: "5px" }
        }
      ) }),
      /* @__PURE__ */ jsx("button", { type: "submit", children: t("submit") })
    ] }),
    icons.length > 0 && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { children: t("processedIcons") }),
      icons.map((icon, index) => /* @__PURE__ */ jsxs("div", { className: "icon-container", children: [
        /* @__PURE__ */ jsx("p", { children: icon.label }),
        /* @__PURE__ */ jsx("a", { href: icon.url, download: `icon-${icon.label}.png`, children: /* @__PURE__ */ jsx("img", { src: icon.url, alt: `Icon ${icon.label}` }) })
      ] }, index))
    ] })
  ] });
};

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const [visibleSection, setVisibleSection] = useState("main");
  const [theme, setTheme] = useState("auto");
  useEffect(() => {
    const applyTheme = (theme2) => {
      if (theme2 === "auto") {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
        }
      } else {
        document.documentElement.setAttribute("data-theme", theme2);
      }
      const favicon = document.getElementById("favicon");
      if (favicon) {
        if (theme2 === "dark" || theme2 === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          favicon.href = "/path/to/dark-mode-icon.png";
        } else {
          favicon.href = "/path/to/light-mode-icon.png";
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
      if (prevTheme === "auto") newTheme = "light";
      else if (prevTheme === "light") newTheme = "dark";
      else newTheme = "auto";
      toast.info(t(newTheme === "auto" ? "autoMode" : newTheme === "light" ? "lightMode" : "darkMode"), {
        position: "top-right",
        autoClose: 2e3,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: void 0
      });
      return newTheme;
    });
  };
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", newLang);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx(ToastContainer, {}),
    /* @__PURE__ */ jsxs("div", { className: "top-bar", children: [
      /* @__PURE__ */ jsxs("select", { onChange: handleLanguageChange, value: i18n.language, className: "language-select", children: [
        /* @__PURE__ */ jsx("option", { value: "en", children: "English" }),
        /* @__PURE__ */ jsx("option", { value: "es", children: "Español" }),
        /* @__PURE__ */ jsx("option", { value: "de", children: "Deutsch" }),
        /* @__PURE__ */ jsx("option", { value: "it", children: "Italiano" }),
        /* @__PURE__ */ jsx("option", { value: "pt", children: "Português" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: handleThemeChange, className: "theme-toggle-button", children: [
        theme === "auto" && /* @__PURE__ */ jsx("i", { className: "fas fa-adjust" }),
        theme === "light" && /* @__PURE__ */ jsx("i", { className: "fas fa-sun" }),
        theme === "dark" && /* @__PURE__ */ jsx("i", { className: "fas fa-moon" })
      ] })
    ] }),
    visibleSection === "main" ? /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { children: t("titleMain") }),
      /* @__PURE__ */ jsxs("div", { className: "content-container", children: [
        /* @__PURE__ */ jsxs("div", { className: "section captures", children: [
          /* @__PURE__ */ jsx("img", { src: "/images/splash.png", alt: "Capturas", className: "section-imagn" }),
          /* @__PURE__ */ jsx("h2", { children: t("iosCaptures") }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavigation("ios-captures"), children: t("iosCaptures") }),
          /* @__PURE__ */ jsx("h2", { children: t("androidCaptures") }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavigation("android-captures"), children: t("androidCaptures") })
        ] }),
        /* @__PURE__ */ jsx("img", { src: "/images/icon.png", alt: "Íconos", className: "section-image" }),
        /* @__PURE__ */ jsxs("div", { className: "section icons", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavigation("ios-icons"), children: t("iosIcons") }),
          /* @__PURE__ */ jsx("button", { onClick: () => handleNavigation("android-icons"), children: t("androidIcons") })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("button", { onClick: () => handleNavigation("main"), className: "back-button", children: /* @__PURE__ */ jsx("i", { className: "fas fa-arrow-left" }) }),
      visibleSection === "ios-captures" && /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: t("iosCaptures") }),
        /* @__PURE__ */ jsx(UploadImageIOS, {})
      ] }),
      visibleSection === "android-captures" && /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: t("androidCaptures") }),
        /* @__PURE__ */ jsx(UploadImageAndroid, {})
      ] }),
      visibleSection === "ios-icons" && /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: t("iosIcons") }),
        /* @__PURE__ */ jsx(UploadIconIOS, {})
      ] }),
      visibleSection === "android-icons" && /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: t("androidIcons") }),
        /* @__PURE__ */ jsx(UploadIconAndroid, {})
      ] })
    ] })
  ] });
};

// config/seo.js
const seoTranslations = {
    en: {
      description: "Generate Screenshots for Apple Required Resolutions. Use this tool to create the necessary screenshots for submitting your app to Apple, ensuring they meet the required resolutions for various devices."
    },
    es: {
      description: "Generar Capturas de Pantalla para las Resoluciones Requeridas por Apple. Utiliza esta herramienta para crear las capturas de pantalla necesarias para enviar tu aplicación a Apple, asegurando que cumplan con las resoluciones requeridas para diversos dispositivos."
    },
    de: {
      description: "Screenshots für von Apple erforderliche Auflösungen erstellen. Verwenden Sie dieses Tool, um die erforderlichen Screenshots für die Einreichung Ihrer App bei Apple zu erstellen, und sicherzustellen, dass sie den erforderlichen Auflösungen für verschiedene Geräte entsprechen."
    },
    it: {
      description: "Genera screenshot per le risoluzioni richieste da Apple. Usa questo strumento per creare gli screenshot necessari per inviare la tua app ad Apple, assicurandoti che soddisfino le risoluzioni richieste per vari dispositivi."
    },
    pt: {
      description: "Gerar capturas de tela para as resoluções exigidas pela Apple. Use esta ferramenta para criar as capturas de tela necessárias para enviar seu aplicativo para a Apple, garantindo que atendam às resoluções exigidas para vários dispositivos."
    }
  };

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = i18n.language || "es";
  const seoDescription = seoTranslations[lang]?.description || seoTranslations.en.description;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${i18n.t("titleMain")}</title><meta name="description"${addAttribute(seoDescription, "content")}>${renderHead()}</head> <body> <main> ${renderComponent($$result, "MainPage", MainPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/roberto/lunar-luminosity/src/components/MainPage.jsx", "client:component-export": "default" })} </main> </body></html>`;
}, "/Users/roberto/lunar-luminosity/src/pages/index.astro", void 0);

const $$file = "/Users/roberto/lunar-luminosity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
