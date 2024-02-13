import { useState } from 'react'
import { Link } from 'react-router-dom'

import { dumpGallery } from './../data/data.js'

function Gallery() {
  return (
    <section className="gallery">
      <nav className="gallery-navigation">
        <div className="back">
          <Link to="/">Back to the dump</Link>
        </div>
        <div>Curated by
          <a href="https://xiuxiuxiuxiuxiu.com/" target="_blank" rel="nooper nofollow"> Xiu Xiu</a>
        </div>
      </nav>
      <h1>DUMP GALLERY</h1>
      <p className="gallery-description">A collection of websites with a fresh view on design and coding.</p>
      <ul className="gallery-grid">
        {dumpGallery.map(site =>
          <li key={site.ref}>
            <a href={site.ref} target="_blank" rel="nooper nofollow">
              <img src={`/images/gallery-websites/${site.image}`} width="2290" height="1270" alt={site.ref}></img>
              <p>{site.ref.replace(/^https?:\/\//, '').split('/')[0]}</p>
            </a>
          </li>
        )}
      </ul>
    </section>
  )
}

export default Gallery
