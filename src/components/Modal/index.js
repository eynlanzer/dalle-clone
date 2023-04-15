import { useState } from 'react'
import './index.scss'

const Modal = ({ setModalOpen, setSelectedImage, selectedImage }) => {
  const [error, setError] = useState(null)

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }
  return (
    <div className='modal'>
      <div className="modal__container">
        <div onClick={closeModal}>X</div>
        <div className="modal__image-container">
          {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt='uploaded img'/>}
        </div>
        <button>Generate</button>
      </div>
    </div>
  )
}

export default Modal