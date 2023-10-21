import { useState } from 'react'

function Modal({ currentContent, title, onSetModalIsOpen }) {

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
        onClick={() => onSetModalIsOpen(false)}>
        X
      </div>
      <div className="modal-overlay"></div>
    </section>
  )
}

export default Modal
