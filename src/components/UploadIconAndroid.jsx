import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';
import '@fortawesome/fontawesome-free/css/all.css';

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
          const canvas = document.getElementById('previewCanvasIconAndroid');
          const ctx = canvas.getContext('2d');
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
      mdpi: { width: 48, height: 48, label: '48x48 (mdpi)' },
      hdpi: { width: 72, height: 72, label: '72x72 (hdpi)' },
      xhdpi: { width: 96, height: 96, label: '96x96 (xhdpi)' },
      xxhdpi: { width: 144, height: 144, label: '144x144 (xxhdpi)' },
      xxxhdpi: { width: 192, height: 192, label: '192x192 (xxxhdpi)' },
    };

    const processedIcons = [];

    for (const { width, height, label } of Object.values(resolutions)) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = await createImageBitmap(file);

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      const url = canvas.toDataURL('image/png');
      processedIcons.push({ url, label });
    }

    return processedIcons;
  };

  return (
    <div className="container">
      <h1>{t('titleAndroidIcons')}</h1>
      <div className="icons">
            <i className="fab fa-google-play fa-3x"></i>
          </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="image">{t('uploadImage')}:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="preview">
            <canvas
              id="previewCanvasIconAndroid"
              width={200}
              height={200}
              style={{ border: '1px solid #dddddd', borderRadius: '5px' }}
            ></canvas>
          </div>
        )}

        <button type="submit">{t('submit')}</button>
      </form>
      {icons.length > 0 && (
        <div>
          <h2>{t('processedIcons')}</h2>
          {icons.map((icon, index) => (
            <div className="icon-container" key={index}>
              <p>{icon.label}</p>
              <a href={icon.url} download={`icon-${icon.label}.png`}>
                <img src={icon.url} alt={`Icon ${icon.label}`} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadIconAndroid;
