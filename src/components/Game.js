import {useState, useEffect} from 'react'
import {CgCardClubs} from 'react-icons/cg'
import sound from '../assets/zapsplat_multimedia_button_click_bright_003_92100.mp3'
import matchSound from '../assets/emoji-match.mp3'


const Game = ({ gameBlocks, setGameBlocks, gameMode, playerOneTurn, setPlayerOneTurn}) => {
    const [emojiMatcher, setEmojiMatcher] = useState([])
    const [enableClick, setEnableClick] = useState(true)
        
    const playSoundDefault = () => {
        new Audio(sound).play()       
    }
    const playSoundMatch = () => {
        new Audio(matchSound).play()
    }
    



    const showCard = (itemNum) => {
        setGameBlocks(
            gameBlocks.map((item, index)=> {
                const [emojiFace] = item
                if (itemNum === index) {
                    return [emojiFace,{isShown:true}]
                }
                return item
            })
        )
    }

    const matchEmoji = (emojiFace,index) => {
        if (emojiMatcher.length === 0) {
            setEmojiMatcher([{emoji: emojiFace, 'index': index}])
        }
        if (emojiMatcher.length === 1) {
            setEmojiMatcher([...emojiMatcher, {emoji: emojiFace, 'index': index}])
        }

    }

    const checkIfMatched = () => {
        if (emojiMatcher.length === 2) {
            const firstEmoji = emojiMatcher[0].emoji
            const secondEmoji = emojiMatcher[1].emoji
            const firstIndex = emojiMatcher[0].index
            const secondIndex = emojiMatcher[1].index
        
            if (firstEmoji !== secondEmoji) {
                playSoundDefault()
                gameMode === 'play with human' && setPlayerOneTurn(!playerOneTurn)
                setTimeout( () => setGameBlocks(
                    gameBlocks.map((item,index)=> {
                        setEmojiMatcher([])
       
                        const [emojiFace] = item
                        if (firstIndex === index) {
                            return [emojiFace, {isShown: false}]
                        }
                        if (secondIndex === index) {
                            return [emojiFace, {isShown: false}]
                        }
                        return item
                    })
                )
                , 1000)

            } else {
                playSoundMatch()
                setEmojiMatcher([])
            }
        }
    }



    useEffect(()=> {
        checkIfMatched()
    }, [emojiMatcher])

    useEffect(()=> {
        if (emojiMatcher.length === 2) {
            setEnableClick(false)
        }
        if (emojiMatcher.length === 0) {
            setEnableClick(true)
        }
    }, [emojiMatcher])





    const emojiTable = gameBlocks.map((emoji, index) => {
        const [emojiFace, showEmoji] = emoji
        if (!showEmoji.isShown) {
            return (
                <div 
                    className='card'
                    key={index}
                    onClick={()=> 
                        {
                            if (enableClick) {
                                showCard(index)
                                matchEmoji(emojiFace, index)
                            }
                        }
                    }
                >
                    <h1 className='card-h1'>
                        
                        <CgCardClubs />
                    </h1>
                </div>
            )
        } else {
        return (
            <div 
                className='emoji' 
                key={index} 
            >
                <h1 className='emoji-h1'>{emojiFace}</h1>
            </div>
        )
        }
})

  return (

    <div className='game'>
        {emojiTable}
    </div>
  )
}

export default Game