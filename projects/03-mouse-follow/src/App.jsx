import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false)
  const handleClick = () => {
    setEnabled(!enabled)
  }

  const getOpacity = (enabled) => {
    return enabled ? 0.8 : 0
  }

  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(()=> {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled){
      window.addEventListener('pointermove', handleMove)
    }

    return () => { // Se ejecuta siempre que deje de aparecer el componente o cambie la dependencia
      window.removeEventListener('pointermove', handleMove)
    } 
  }, [enabled]) 

  return ( 
    <main>
      <div style= {{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: `${getOpacity(enabled)}`,
        pointerEvents: 'none',
        left: -20, // -20 y-20 para queesté centrado en el ratón
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px`
      }}>

      </div>
    <h3>Mouse Follow Demo</h3>
    <button onClick={handleClick}>{!enabled ? 'Activar' : 'Desactivar'} seguimiento</button>
    </main>
  )
}

export default App
