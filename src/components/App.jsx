import { useState, useEffect } from 'react'

import '../styles/App.css'
import '../styles//Modal.css'
import '../styles/Menu.css'
import '../styles/Gallery.css'
import '../styles/Dump.css'

import Modal from './Modal.jsx'
import { Menu, MenuControls, MenuBody, MenuLinks, About } from './Menu.jsx'
import Gallery from './Gallery.jsx'
import Dump from './Dump.jsx'

import { codeList, stockList, fontList, graphicList, galleryList } from './../data/data.js'

function App() {
  const [galleryIsOpen, setGalleryIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [menuContent, setMenuContent] = useState('')
  const [currentContent, setCurrentContent] = useState({})
  const [title, setTitle] = useState('')
  const [dumpIsOpen, setDumpIsOpen] = useState(false)
  const [flyingGarbage, setFlyingGarbage] = useState(false)

  function toggleMenu(e) {
    if (!e.target) return

    let currentMenuContent = e.target.dataset.event
    e.preventDefault()
    e.stopPropagation()

    setTitle('')

    if (menuIsOpen == false) {
      setMenuIsOpen(true)
      setModalIsOpen(false)
      if (currentMenuContent === 'menu') setMenuContent('menu')
      if (currentMenuContent === 'about') setMenuContent('about')
    }

    if (menuIsOpen === true && currentMenuContent !== menuContent) {
      setMenuContent(currentMenuContent)
    }

    if (menuIsOpen === true && (!currentMenuContent || currentMenuContent == menuContent)) {
      setMenuContent('')
      setMenuIsOpen(false)
    }
  }

  function handleLinkClick(ref) {
    setModalContent(ref)

    switch (ref) {
      case 'galeries':
        setCurrentContent(galleryList)
        setTitle('Website Galleries')
        break
      case 'images':
        setCurrentContent(graphicList)
        setTitle('Tools for graphics')
        break
      case 'fonts':
        setCurrentContent(fontList)
        setTitle('Fonts')
        break
      case 'stocks':
        setCurrentContent(stockList)
        setTitle('Stocks')
        break
      case 'code': 
        setCurrentContent(codeList)
        setTitle('Code')
        break
      default:
        setTitle('')
    }

    setModalIsOpen(true)
    setMenuIsOpen(false)
  }

  function handleGarbageClick(e) {
    if (!e.target) return
    let elem = e.target.closest(`[data-event]`)
    if (!elem) return

    handleLinkClick(elem.dataset.event)
  }

  function handleGarbageHover(e) {
    if (!e.target) return
    let elem = e.target.closest(`[data-event]`)
    if (!elem) return
    if (modalIsOpen) return

    switch (elem.dataset.event) {
      case 'galeries':
        setTitle('Website Galleries')
        break
      case 'images':
        setTitle('Tools for graphics')
        break
      case 'fonts':
        setTitle('Fonts')
        break
      case 'stocks':
        setTitle('Stocks')
        break
      case 'code': 
        setTitle('Code')
        break
      case 'flying-garbage': 
        setTitle('Flying Garbage')
        break
      case 'show-the-dump': 
        setTitle('The Dump')
        break
      default:
        setTitle('')
    }
  }

  function handleGarbageMouseOut() {
    !modalIsOpen && setTitle('')
  }

  function handleDumpButtons(e) {
    if (!e.target) return
    let elem = e.target.closest(`[data-event]`)
    if (!elem) return

    switch (elem.dataset.event) {
      case 'show-the-dump':
        setDumpIsOpen(state => !state)
        break
      case 'flying-garbage':
        setFlyingGarbage(state => !state)
        break
    }

    !modalIsOpen && window.addEventListener("touchend", (event) => {
      setTitle('')
      alert('kek')
    }, true )
  }

  return (
    <div className="app">
      <Menu
        menuIsOpen={menuIsOpen}
        galleryIsOpen={galleryIsOpen}>
        <MenuControls
          galleryIsOpen={galleryIsOpen}
          onToggleMenu={toggleMenu}
          title={title}
          />
        { !galleryIsOpen &&
          <MenuBody onToggleMenu={toggleMenu}>
            { menuContent === 'menu'
              ? <MenuLinks
                  onSetGalleryIsOpen={setGalleryIsOpen}
                  onSetMenuIsOpen={setMenuIsOpen}
                  onHandleLinkClick={handleLinkClick}/>
              : menuContent === 'about' ? <About />
              : null
            }
          </MenuBody>
        }
      </Menu>
      { modalIsOpen &&
        <Modal 
          currentContent={currentContent}
          title={title}
          onSetTitle={setTitle}
          onSetModalIsOpen={setModalIsOpen}/>
      }
      { galleryIsOpen
        ? <Gallery onSetGalleryIsOpen={setGalleryIsOpen}/>
        : <Dump 
            dumpIsOpen={dumpIsOpen}
            flyingGarbage={flyingGarbage}
            onHandleDumpButtons={handleDumpButtons}
            onHandleGarbageClick={handleGarbageClick}
            onHandleGarbageHover={handleGarbageHover}
            onHandleGarbageMouseOut={handleGarbageMouseOut}/>
      }
    </div>
  )
}

function preloadImage(url) {
  let img = new Image()
  img.src = url
}

preloadImage('images/dump.jpeg')
preloadImage('images/flying-garbage/glass.png')
preloadImage('images/flying-garbage/jar.png')
preloadImage('images/flying-garbage/large-bottle.png')
preloadImage('images/flying-garbage/small-bottle.png')
preloadImage('images/flying-garbage/trash.png')

export default App
