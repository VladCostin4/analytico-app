import './StepCard.css'

function StepCard({ number, title, description, images }) {
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
              <div key={index} className="image-with-label">
                <img src={img.src} alt={img.alt} />
                {/* Add label text under each image */}
                {index === 0 && <span className="image-label up">↑ 20%</span>}
                {index === 1 && <span className="image-label down">↓ 9%</span>}
              </div>
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
