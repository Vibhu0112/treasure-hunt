import Image from 'next/image';
import React, { useContext, useState } from 'react';
import Images from './images';
import {shuffle} from 'lodash';
import { QuizContext } from './Contexts';

function Game2() {

const [cards,setCards] = useState(shuffle([...Images, ...Images]))
const [activeCards,setActiveCards] = useState([]);
const [clicks,setClicks] = useState(0);
const {setGameState} = useContext(QuizContext);  
  const [won,setWon] = useState(false);
const [foundPairs,setFoundPairs] = useState([])


function flipCard(index){
  if (won) {
    setCards(shuffle([...Images, ...Images]));
    setFoundPairs([]);
    setWon(false);
    setClicks(0);
  }
  if (activeCards.length === 0) {
    setActiveCards([index]);
  }
  if (activeCards.length === 1) {
    const firstIndex = activeCards[0];
    const secondsIndex = index;
    if (cards[firstIndex] === cards[secondsIndex]) {
      if (foundPairs.length + 2 === cards.length) {
        setWon(true);
      }
      setFoundPairs( [...foundPairs, firstIndex, secondsIndex] );
    }
    setActiveCards([...activeCards, index]);
  }
  if (activeCards.length === 2) {
    setActiveCards([index]);
  }
  setClicks(clicks + 1);
}



function f2(){
  if(foundPairs.length/2>=4){
  // router.push('../levels/hard')
  setGameState("game3")
   }
   else{
     alert("you are not eligible to switch to next level")
   }
 }



  return (
    
      <div>
              {/* <Image src={Images[0]}/> */}
      <div className="board">
        {cards.map((card,index) => {
          const flippedToFront =  (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
          return (
            <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
                 onClick={() => flipCard(index)}>
              <div className="card">
                <div className="front">
                  <Image src={card} alt=""/>
                </div>
                <div className="back" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats">
        {won && (
          <>You won the game! Congratulations!<br />
            Click any card to play again.<br /><br />
          </>
        )}
        Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length/2}
      </div>
      <div  className='justify-center ml-10 rounded-lg border-2 w-52 bg-blue-600 flex mt-16'>
          <button onClick={f2}>switch to next level</button></div>
    </div>
  )
}

export default Game2