import { useState } from 'react'
import confetti from 'canvas-confetti'

import './App.css'
import { TURNS, WINNER_COMBOS } from './constants.ts'

import { Square } from './components/Square.tsx'
import { WinnerModal } from './components/WinnerModal.tsx'

function App() {
  // Recuperamos la partida guardada si la hay
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState<string>(() => {
    const turnFromStorage = window.localStorage.getItem('newTurn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })


  const [winner, setWinner] = useState<null | false | string>(null) // null = no hay ganador, false = empate, 'X' o 'O' = ganador

  const checkWinner = (boardToCheck) => {
    // Recorremos todas las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      // Si las tres posiciones del tablero son iguales y no están vacías, tenemos un ganador
      if (boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // Si no hay ganador, retornamos null
    return null
  }

  const checkEndGame = (boardToCheck) => {
    // Si no hay ningún espacio vacío en el tablero, el juego ha terminado
    return boardToCheck.every((square: string | null) => square !== null)
  }

  const updateBoard = (index: number) => {
    // Si ya hay algo en esa posición del tablero, no actualizamos nada
    if (board[index] || winner) return

    // Cambiar turno
    const newTurn = turn === TURNS.X? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // GUARDAR PARTIDA
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('newTurn', newTurn)
    // Revisamops si hay un ganador, si lo hay, no actualizamos nada
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner((prevWinner) => {
        console.log('Nuevo ganador:', newWinner, 'Anterior ganador:', prevWinner)
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('newTurn')
        return newWinner
      })
    }

    // Revisa si hay empate
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('newTurn')
  }

  return (
    <main className="board">
      <h1>¡Tic Tac Toe!</h1>
      <section className="game">
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))

        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
      
    </main>
  )
}

export default App
