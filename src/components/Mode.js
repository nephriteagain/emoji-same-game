import React from 'react'

const gameMode = ({gameMode, setShowGameModeModal}) => {

  const showGameMode = () => {
    if (gameMode === 'play solo') {
      return 'Playing Solo'
    }
    if (gameMode === 'play with human') {
      return 'Playing with Player'
    }
  }

  const currentGameMode = showGameMode()

  return (
    <div className='mode-container'>
       <div className='mode-text'>{currentGameMode}</div>
       <div className='btn-container'>
          <button className='btn btn-primary'
            onClick={()=> {
             setShowGameModeModal(true)
            }}
          >
            Change Mode
          </button>
       </div>
    </div>
  )
}

export default gameMode