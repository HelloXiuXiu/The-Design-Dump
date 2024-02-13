import { useState } from 'react'
import { Link } from 'react-router-dom'

import { links } from './../data/data.js'

function Menu({ galleryIsOpen, menuIsOpen, children }) {
  return(
    <div
      className={`menu${ menuIsOpen
      ? ' open' :  galleryIsOpen
      ? ' gallery' : ''}`}>
      {children}
    </div>
  )
}

function MenuControls({galleryIsOpen, onToggleMenu, title}) {
  return(
    <div className='menu-controls'>
      <MenuButton
        side='left'
        onToggleMenu={onToggleMenu}
        galleryIsOpen={galleryIsOpen}>
        Menu
      </MenuButton>
      <div className="white-box">
        {galleryIsOpen 
          ? `Dump Gallery`
          : title
        }
      </div>
      <MenuButton
        side='right'
        onToggleMenu={onToggleMenu}
        galleryIsOpen={galleryIsOpen}>
        About
      </MenuButton>
    </div>
  )
}

function MenuButton({side, onToggleMenu, galleryIsOpen, children}) {
  return( 
    <button disabled={galleryIsOpen && true}
      data-event={children.toLowerCase()}
      className={`menu-${side}`}
      onClick={onToggleMenu}>
    {children}
    </button>
  )
}

function MenuBody({onToggleMenu, children}) {
  return(
    <div className="menu-body">
      {children}
      <div className='close' onClick={onToggleMenu}>X</div>
    </div>
  )
}

function MenuLinks({ onSetMenuIsOpen, onHandleLinkClick, onSetTitle }) {
  let totalItems = links.length

  function handleGallery() {
    onSetMenuIsOpen(false)
    onSetTitle('Dump Gallery')
  }

  return(
    <nav className="main-nav">
      <ul className="link-list">
        { links.map((link, ind) => 
          <li data-event={link.ref}
            key={link.ref}
            onClick={() => onHandleLinkClick(link.ref)}>
            {link.name}
            <span className="number">[0{ind + 1}/0{totalItems}]</span>
          </li>
          )}
        
          <li className="gallery-link" onClick={() => handleGallery()}>
            <Link to="/gallery">The Dump Gallery</Link>
            <span className="number">[0{totalItems + 1}/0{totalItems + 1}]</span>
          </li>
      </ul>
      <a
        className="submit-button" 
        href="mailto:xiuxiuweb@gmail.com?subject=The Design Dump Submission"
        rel="nooper nofollow">
        Submit your source
      </a>
    </nav>
  )
}

function About() {
  return(
    <div className="about-body">
      <h2>About</h2>
      <p>
        The [ Design ] Dump is a place where all experimental
        designers [&nbsp;don't&nbsp;] want&nbsp;to&nbsp;end&nbsp;up. 
        <br/>
        <br/>
        For those
        who are not afraid to step out from classic marketing approaches
        for art's and progress's sake. Design doesn’t have to be boring
        to be accessible and drive good conversions. All
        trends once were made for the first time.
        <br/>
        <br/>
        Explore a collection of web desing/dev resources
        selected&nbsp;by&nbsp;Xiu&nbsp;Xiu.
        <br/>
        <br/>
        <br/>
        <span className="contact">Say hello: 
        <a href="https://www.instagram.com/xiu_web/" rel="nooper nofollow" target="_blank"> Inst </a>
        or
        <a href="mailto:xiuxiuweb@gmail.com" rel="nnooper nofollow"> xiuxiuweb@gmail.com</a></span>
      </p>
    </div>
  )
}

export { Menu, MenuControls, MenuBody, MenuLinks, About }
