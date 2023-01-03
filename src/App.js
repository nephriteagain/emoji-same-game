
import './App.css';
import {emojiWithStatus} from './components/emoji'
import Game from './components/Game'
import Modal from './components/Modal';
import Header from './components/Header';
import GameModeModal from './components/GameModeModal';
import PlayerTurn from './components/PlayerTurn';
import Mode from './components/Mode'

import { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import winner from './assets/winner.mp3'


function App() {
  
  const [gameBlocks, setGameBlocks] = useState(shuffle([...emojiWithStatus]))
  const [isGameOver, setIsGameOver] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showGameModeModal, setShowGameModeModal] = useState(true)
  const [gameMode, setGameMode] = useState('play solo')
  const [playerOneTurn, setPlayerOneTurn] = useState(true)


  const winnerSound = () => {
        new Audio(winner).play()
    }

  const restartGame = () => {
    setShowModal(false)
    setIsGameOver(false)
    setGameBlocks(shuffle([...emojiWithStatus]))
  }

  const gameOverChecker = () => {
        return gameBlocks.every((el)=> {
            return el[1].isShown === true
        })
  }
  
  useEffect(()=> {
    const gameOver = gameOverChecker()
      if (gameOver) {
        setIsGameOver((prev)=> prev = true)
      }
    }, [gameBlocks])

  useEffect(()=> {
    if (isGameOver) {
      setShowModal(true)
      winnerSound()
    }
  }, [isGameOver])

  return (
    <>
    <Header />
    <PlayerTurn 
      playerOneTurn={playerOneTurn}
      gameMode={gameMode}
    />
    <Game 
      gameBlocks={gameBlocks}  
      setGameBlocks={setGameBlocks}
      gameMode={gameMode}
      playerOneTurn={playerOneTurn}
      setPlayerOneTurn={setPlayerOneTurn}
    />
    {showModal && <Modal 
      restartGame={restartGame}
      gameMode={gameMode}
      playerOneTurn={playerOneTurn}
    />}
    {showGameModeModal && <GameModeModal
      restartGame={restartGame}
      setShowGameModeModal={setShowGameModeModal}
      setGameMode={setGameMode}
    /> }
    <Mode 
      gameMode={gameMode}
      setShowGameModeModal={setShowGameModeModal}
    />
    </>
  );
}

export default App;
