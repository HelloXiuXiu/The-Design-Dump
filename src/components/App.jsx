import { useState } from 'react'

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

  function toggleMenu(e) {
    if (!e.target) return

    let currentMenuContent = e.target.dataset.event
    e.preventDefault()
    e.stopPropagation()

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

  let currentContent
  let title

  switch (modalContent) {
    case 'galeries':
      currentContent = galleryList
      title = 'Website Galleries'
      break
    case 'images':
      currentContent = graphicList
      title = 'Tools for graphics'
      break
    case 'fonts':
      currentContent = fontList
      title = 'Fonts'
      break
    case 'stocks':
      currentContent = stockList
      title = 'Stocks'
      break
    case 'code': 
      currentContent = codeList
      title = 'Code'
      break
  }

  return (
    <div className="app">
      <Menu
        menuIsOpen={menuIsOpen}
        galleryIsOpen={galleryIsOpen}>
        <MenuControls
          galleryIsOpen={galleryIsOpen}
          onToggleMenu={toggleMenu}/>
        { !galleryIsOpen &&
          <MenuBody onToggleMenu={toggleMenu}>
            { menuContent === 'menu'
              ? <MenuLinks
                onSetGalleryIsOpen={setGalleryIsOpen}
                onSetMenuIsOpen={setMenuIsOpen}
                onSetModalContent={setModalContent}
                onSetModalIsOpen={setModalIsOpen}/>
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
          onSetModalIsOpen={setModalIsOpen}/>
      }
      { galleryIsOpen
        ? <Gallery onSetGalleryIsOpen={setGalleryIsOpen}/>
        : <Dump 
            onSetModalContent={setModalContent}
            onSetModalIsOpen={setModalIsOpen}
            onSetMenuIsOpen={setMenuIsOpen}/>
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
