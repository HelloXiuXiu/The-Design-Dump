import { useState } from 'react'

function Modal({ currentContent, title, onSetTitle, onSetModalIsOpen }) {
  function closeModal() {
    onSetTitle('')
    onSetModalIsOpen(false)
  }

  return(
    <section className='modal'>
      <h2>{title}</h2>
      <ul className="modal-content">
      {currentContent.map((link, ind) => 
        <li key={link.name}>
          <a href={link.ref} target="_blank" rel="nooper nofollow">{link.name}</a>
          <span>{ind < 9 ? `0${ind + 1}` : ind + 1}</span>
        </li>
      )}
      </ul>
      <div
        className='close'
        onClick={closeModal}>
        X
      </div>
      <div className="modal-overlay"></div>
    </section>
  )
}

export default Modal
