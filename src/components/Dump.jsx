import { useState } from 'react'

function Dump({ dumpIsOpen, flyingGarbage, onHandleDumpButtons, onHandleGarbageClick, onHandleGarbageHover, onHandleGarbageMouseOut }) {
  return (
    <section className="dump">
      <button
        onClick={onHandleDumpButtons}
        className="fly_button"
        data-event="flying-garbage"
        onMouseEnter={onHandleGarbageHover}
        onMouseLeave={onHandleGarbageMouseOut}>1</button>
      <button
        onClick={onHandleDumpButtons}
        className="dump_button"
        data-event="show-the-dump"
        onMouseEnter={onHandleGarbageHover}
        onMouseLeave={onHandleGarbageMouseOut}>2</button>
      { dumpIsOpen
        ? <div className="dump-img"></div>
        : <div className="background"></div>}
      { flyingGarbage
      && <FlyingGarbage
          onHandleGarbageClick={onHandleGarbageClick}
          onHandleGarbageHover={onHandleGarbageHover}
          onHandleGarbageMouseOut={onHandleGarbageMouseOut}/>
      }
    </section>
  )
}

function FlyingGarbage({ onHandleGarbageClick, onHandleGarbageHover, onHandleGarbageMouseOut }) {
  return (
    <ul className="flying-garbage-list">
      <li className="trash"
          data-event='galeries'
          onClick={onHandleGarbageClick}
          onMouseEnter={onHandleGarbageHover}
          onMouseLeave={onHandleGarbageMouseOut}>
        <img src="/images/flying-garbage/trash.png" width="350" height="272" alt="trash"/>
      </li>
      <li className="glass"
          data-event='images'
          onClick={onHandleGarbageClick}
          onMouseEnter={onHandleGarbageHover}
          onMouseLeave={onHandleGarbageMouseOut}>
        <img src="/images/flying-garbage/glass.png" width="241" height="176" alt="glass"/>
      </li>
      <li className="jar"
          data-event='fonts'
          onClick={onHandleGarbageClick}
          onMouseEnter={onHandleGarbageHover}
          onMouseLeave={onHandleGarbageMouseOut}>
        <img src="/images/flying-garbage/jar.png" width="275" height="271" alt="jar"/>
      </li>
      <li className="large-bottle"
          data-event='stocks'
          onClick={onHandleGarbageClick}
          onMouseEnter={onHandleGarbageHover}
          onMouseLeave={onHandleGarbageMouseOut}>
        <img src="/images/flying-garbage/large-bottle.png" width="257" height="231" alt="large-bottle"/>
      </li>
      <li className="small-bottle"
          data-event='code'
          onClick={onHandleGarbageClick}
          onMouseEnter={onHandleGarbageHover}
          onMouseLeave={onHandleGarbageMouseOut}>
        <img src="/images/flying-garbage/small-bottle.png" width="300" height="245" alt="small-bottle"/>
      </li>
    </ul>
  )
}

export default Dump
