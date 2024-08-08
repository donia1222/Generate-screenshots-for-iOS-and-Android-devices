import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';
import '@fortawesome/fontawesome-free/css/all.css';

const UploadImageIOS = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [selectedResolutions, setSelectedResolutions] = useState([]);
  const [preview, setPreview] = useState(null);

  const handleResolutionChange = (event) => {
    const { value, checked } = event.target;
    setSelectedResolutions((prev) =>
      checked ? [...prev, value] : prev.filter((res) => res !== value)
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
          const canvas = document.getElementById('previewCanvas');
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
    const processedImages = await processImage(file);
    setImages(processedImages);
  };

  const processImage = async (file) => {
    const resolutions = {
      iphone65: { width: 1242, height: 2688, label: t('iphone65') },
      iphone67: { width: 1284, height: 2778, label: t('iphone67') },
      iphone55: { width: 1242, height: 2208, label: t('iphone55') },
      ipad13: { width: 2048, height: 2732, label: t('ipad13') },
      ipad11: { width: 1668, height: 2388, label: t('ipad11') }
    };

    const processedImages = [];

    for (const [device, { width, height, label }] of Object.entries(resolutions)) {
      if (selectedResolutions.includes(device)) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = await createImageBitmap(file);

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const url = canvas.toDataURL('image/jpeg');
        processedImages.push({ url, label });
      }
    }

    return processedImages;
  };

  return (
    <div className="container">
      <h1>{t('titleIOS')}</h1>
      <div className="icons">
            <i className="fab fa-apple fa-3x"></i>
          </div>
      <p>{t('descriptionIOS')}</p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="image">{t('uploadImage')}:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="preview">
            <canvas
              id="previewCanvas"
              width={200}
              height={200}
              style={{ border: '1px solid #dddddd', borderRadius: '5px' }}
            ></canvas>
          </div>
        )}

        <fieldset>
          <legend>{t('selectResolutions')}:</legend>
          <label>
            <input
              type="checkbox"
              value="iphone65"
              onChange={handleResolutionChange}
            />
            {t('iphone65')}
          </label>
          <label>
            <input
              type="checkbox"
              value="iphone67"
              onChange={handleResolutionChange}
            />
            {t('iphone67')}
          </label>
          <label>
            <input
              type="checkbox"
              value="iphone55"
              onChange={handleResolutionChange}
            />
            {t('iphone55')}
          </label>
          <label>
            <input
              type="checkbox"
              value="ipad13"
              onChange={handleResolutionChange}
            />
            {t('ipad13')}
          </label>
          <label>
            <input
              type="checkbox"
              value="ipad11"
              onChange={handleResolutionChange}
            />
            {t('ipad11')}
          </label>
      
        </fieldset>

        <button type="submit">{t('submit')}</button>
      </form>
      {images.length > 0 && (
        <div>
          <h2>{t('processedImages')}</h2>
          {images.map((image, index) => (
            <div className="image-container" key={index}>
              <p>{image.label}</p>
              <a href={image.url} download={`processed-${index}.jpg`}>
                <img src={image.url} alt={`Processed ${index}`} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadImageIOS;
