import { useEffect, useState } from 'react'
import './App.css'


const names_of_game = [
  {
    id : 1,
    image: 'GIANT LIZARD',
  },
  {
    id : 2,
    image: 'MONITOR LIZARD',
  },
  {
    id : 3,
    image: 'MUTANT MONKEY',
  },
  {
    id : 4,
    image: 'GIANT FISH',
  },
  {
    id : 5,
    image: 'EMERALD MONKEY',
  },
  {
    id : 6,
    image: 'AGAMA LIZARD',
  },
  {
    id : 7,
    image: 'THREOBROMA CACAO',
  },
  {
    id : 8,
    image: 'KARIKA PAPAYA',
  },
  {
    id : 9,
    image: 'LITHOBATHES SPHENOCEPHALA',
  },
]

const shuffle = (array) => {
  let i = array.length, j;

  while (i > 0) {
    j = Math.floor(Math.random() * i);
    i--;

    [array[i], array[j]] = [array[j], array[i]]
  }

  return (array)
}

export default function App () {
  const [highScore, setHighScore] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedItems, setClickedItems] = useState([]);

  const handleClick = (array, id) => {
    if (!clickedItems.includes(id)) {
      setClickedItems([...clickedItems, id]);
      setScore(score + 1);

      if (score + 1 > highScore) {
        setHighScore(score + 1);
      }
    }
    else {
      setScore(0);
      setClickedItems([]);
    }

    shuffle(array);
  };
  return (
    <div className='container'>
      <h1>GOODNESS MEMORY GAME</h1>
      <header>Score: {score} <br /> HighestScore: {highScore}</header>
      <div className='game'>
        {names_of_game.map((game) =>{
          return(
            <div key={game.id} onClick={() => handleClick(names_of_game, game.id)} className='game'>
              <h2>{game.image}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}