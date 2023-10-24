import { useState } from 'react'

function Dump({ onHandleGarbageClick }) {
  const [dumpIsOpen, setDumpIsOpen] = useState(false)
  const [flyingGarbage, setFlyingGarbage] = useState(false)

  return (
    <section className="dump">
      <button onClick={() => setFlyingGarbage(state => !state)} className="fly_button">1</button>
      <button onClick={() => setDumpIsOpen(state => !state)} className="dump_button">2</button>
      {dumpIsOpen
        ? <div className="dump-img"></div>
        : <div className="background"></div>}
      {flyingGarbage
      && <FlyingGarbage
          onHandleGarbageClick={onHandleGarbageClick}/>
      }
    </section>
  )
}

function FlyingGarbage({ onHandleGarbageClick }) {

  return (
    <ul className="flying-garbage-list">
      <li className="trash" data-event='galeries' onClick={onHandleGarbageClick}>
        <img src="/images/flying-garbage/trash.png" width="350" height="272" alt="trash"/>
      </li>
      <li className="glass" data-event='images' onClick={onHandleGarbageClick}>
        <img src="/images/flying-garbage/glass.png" width="241" height="176" alt="glass"/>
      </li>
      <li className="jar" data-event='fonts' onClick={onHandleGarbageClick}>
        <img src="/images/flying-garbage/jar.png" width="275" height="271" alt="jar"/>
      </li>
      <li className="large-bottle" data-event='stocks' onClick={onHandleGarbageClick}>
        <img src="/images/flying-garbage/large-bottle.png" width="257" height="231" alt="large-bottle"/>
      </li>
      <li className="small-bottle" data-event='code' onClick={onHandleGarbageClick}>
        <img src="/images/flying-garbage/small-bottle.png" width="300" height="245" alt="small-bottle"/>
      </li>
    </ul>
  )
}

export default Dump
