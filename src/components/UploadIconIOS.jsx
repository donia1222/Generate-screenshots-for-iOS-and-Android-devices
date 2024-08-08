import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';
import '@fortawesome/fontawesome-free/css/all.css';

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
          const canvas = document.getElementById('previewCanvasIconIOS');
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
      icon20: { width: 20, height: 20, label: '20x20' },
      icon29: { width: 29, height: 29, label: '29x29' },
      icon40: { width: 40, height: 40, label: '40x40' },
      icon60: { width: 60, height: 60, label: '60x60' },
      icon76: { width: 76, height: 76, label: '76x76' },
      icon83_5: { width: 83.5, height: 83.5, label: '83.5x83.5' },
      icon1024: { width: 1024, height: 1024, label: '1024x1024' },
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
      <h1>{t('titleIOSIcons')}</h1>
      <div className="icons">
            <i className="fab fa-apple fa-3x"></i>
          </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="image">{t('uploadImage')}:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="preview">
            <canvas
              id="previewCanvasIconIOS"
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

export default UploadIconIOS;
