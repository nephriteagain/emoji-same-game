import React from 'react'

const GameModeModal = ({restartGame, setShowGameModeModal, setGameMode}) => {
  return (
    <aside className='modal-overlay'>
        <div className='modal-container'>
            <h2 className='game-mode'>Choose a Game Mode</h2>
            <div className='btn-group' role='group'>
            <button
                className='btn btn-success border'
                onClick={()=> {
                    restartGame()
                    setShowGameModeModal(false)
                    setGameMode('play solo')
                }}
            >Play Solo</button>
            {/* <button 
                className='btn btn-success border'
                onClick={()=> {
                    restartGame()
                    setShowGameModeModal(false)
                    setGameMode('play with bot')
                }}
            >Play With Bot</button> */}
            <button 
                className='btn btn-success border'
                onClick={()=> {
                    restartGame()
                    setShowGameModeModal(false)
                    setGameMode('play with human')
                    
                }}
            >Play With Human</button>
            </div>

    </div>
    </aside>
  )
}

export default GameModeModal