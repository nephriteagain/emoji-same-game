import React from 'react'


const Modal = ({ restartGame, gameMode, playerOneTurn}) => {

  const message = () => {
    if (gameMode === 'play solo') {
      return 'Finished'
    }
    if (gameMode === 'play with human') {
      if (playerOneTurn) {
        return 'Player 1 wins'
      }
      if (!playerOneTurn) {
        return 'Player 2 wins'
      }
    }
  }

  const theMessage = message()

  return (

    <aside className='modal-overlay'>
        <div className='modal-container'>
            <h2 className='winner'>{theMessage}</h2>
            <button className='btn btn-success btn-lg'
                onClick={restartGame}
            >Restart</button>
    </div>
    </aside>

  )
}

export default Modal