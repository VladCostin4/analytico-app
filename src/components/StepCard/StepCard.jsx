import './StepCard.css'

function StepCard({ number, title, description, images }) {
  // Handle multiple images (like step 3)
  const hasMultipleImages = Array.isArray(images) && images.length > 1

  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3 className="step-title">{title}</h3>
        <p className="step-description">{description}</p>
        {hasMultipleImages ? (
          <div className="step-images">
            {images.map((img, index) => (
              <img key={index} src={img.src} alt={img.alt} />
            ))}
          </div>
        ) : (
          <img src={images.src || images} alt={images.alt || title} />
        )}
      </div>
    </div>
  )
}

export default StepCard

