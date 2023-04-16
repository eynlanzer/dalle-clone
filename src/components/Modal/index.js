import { useState, useRef } from 'react'
import './index.scss'

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
  const [error, setError] = useState(null)
  const ref = useRef(null)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  const checkSize = () => {
    if (ref.current.width == 256 && ref.current.height == 256) {

    } else {
      setError('Error: choose a 256 x 256 image')
    }
  }
  return (
    <div className='modal'>
      <div className="modal__container">
        <div onClick={closeModal}>X</div>
        <div className="modal__image-container">
          {selectedImage && <img ref={ref} src={URL.createObjectURL(selectedImage)} alt='uploaded img'/>}
        </div>
        <p>{error || "* Image must be 256 x 256"}</p>
        {error ?
          <button onClick={closeModal}>Close</button> :
          <button onClick={checkSize}>Generate</button> 
        }
      </div>
    </div>
  )
}

export default Modal