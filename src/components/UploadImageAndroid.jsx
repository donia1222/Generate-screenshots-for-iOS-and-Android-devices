import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';
import '@fortawesome/fontawesome-free/css/all.css';
const UploadImageAndroid = () => {
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
          const canvas = document.getElementById('previewCanvasAndroid');
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
      hdpi: { width: 480, height: 800, label: t('hdpi') },
      xhdpi: { width: 720, height: 1280, label: t('xhdpi') },
      xxhdpi: { width: 1080, height: 1920, label: t('xxhdpi') },
      xxxhdpi: { width: 1440, height: 2560, label: t('xxxhdpi') },
      tablet: { width: 1280, height: 800, label: t('tablet') },
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
      <h1>{t('titleAndroid')}</h1>
      <div className="icons">
            <i className="fab fa-google-play fa-3x"></i>
          </div>
      <p>{t('descriptionAndroid')}</p>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="image">{t('uploadImage')}:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

        {preview && (
          <div className="preview">
            <canvas
              id="previewCanvasAndroid"
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
              value="hdpi"
              onChange={handleResolutionChange}
            />
            {t('hdpi')}
          </label>
          <label>
            <input
              type="checkbox"
              value="xhdpi"
              onChange={handleResolutionChange}
            />
            {t('xhdpi')}
          </label>
          <label>
            <input
              type="checkbox"
              value="xxhdpi"
              onChange={handleResolutionChange}
            />
            {t('xxhdpi')}
          </label>
          <label>
            <input
              type="checkbox"
              value="xxxhdpi"
              onChange={handleResolutionChange}
            />
            {t('xxxhdpi')}
          </label>
          <label>
            <input
              type="checkbox"
              value="tablet"
              onChange={handleResolutionChange}
            />
            {t('tablet')}
          </label>
          <label>
            <input
              type="checkbox"
              value="all"
              onChange={(event) => {
                const { checked } = event.target;
                if (checked) {
                  setSelectedResolutions(Object.keys(resolutions));
                } else {
                  setSelectedResolutions([]);
                }
              }}
            />
            {t('allResolutions')}
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

export default UploadImageAndroid;
