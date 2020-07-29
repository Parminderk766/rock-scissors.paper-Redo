import React from 'react';



const obj = {
    scissors: 'https://i.imgur.com/pgjyhIZ.png',
    rock: 'https://i.imgur.com/LghSkIw.png',
    paper: 'https://i.imgur.com/2gsdqvR.png',
}

const PlayerCard = (props) => {
    return(
    <div className='playerCard'>
        <img src={obj[props.sign]}/>
    </div>
    )
}

export default PlayerCard;