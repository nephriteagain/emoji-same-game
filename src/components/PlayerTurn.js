


const PlayerTurn = ({playerOneTurn, gameMode}) => {
    


  if (gameMode === 'play with human') return (
    <div className='player row text-center align-items-center h3'>
        <div 
            className={playerOneTurn? 'myTurn col' : 'hisTurn col'}>
            Player 1
        </div>
        <div 
            className={!playerOneTurn? 'myTurn col': 'hisTurn col'}>
            Player 2
        </div>
    </div>
  )

}

export default PlayerTurn