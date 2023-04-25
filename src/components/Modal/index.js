import { useState, useRef } from 'react'
import { X } from 'react-feather'
import './index.scss'

const Modal = ({ 
  setModalOpen, 
  setSelectedImage, 
  selectedImage, 
  generateVariations 
}) => {
  const [error, setError] = useState(null)
  const [imageSize, setImageSize] = useState({ width: null, height: null })
  const ref = useRef(null)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
    setImageSize({ width: null, height: null })
  }

  const checkSize = () => {
    if (imageSize.width === 256 && imageSize.height === 256) {
      generateVariations() 
    } else {
      setError('Error: choose a 256 x 256 image')
    }
  }

  const handleImageLoad = (event) => {
    const { width, height } = event.target
    setImageSize({ width, height })
  }
  return (
    <div className='modal'>
      <div className="modal__container">
        <div className="modal__close"onClick={closeModal}><X /></div>
        <div className="modal__image-container">
        {selectedImage && (
            <img
              ref={ref}
              src={URL.createObjectURL(selectedImage)}
              alt='uploaded img'
              onLoad={handleImageLoad}
            />
          )}          
          {/* {selectedImage && 
          <img ref={ref} src={URL.createObjectURL(selectedImage)} alt='uploaded img'/>} */}
        </div>
        <p>{error}</p>
        {error ?
          <button onClick={closeModal}>Close</button> :
          <button onClick={checkSize}>Generate</button> 
        }
      </div>
    </div>
  )
}

export default Modal