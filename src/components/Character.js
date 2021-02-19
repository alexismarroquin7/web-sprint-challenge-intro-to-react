// Write your Character component here
import React, {useState} from 'react';
import axios from 'axios';


const Character = (props) => {

    const {characters} = props;

    const Card = () => {
        if(characters){
            return <ul>{}</ul>
        }    
        return <div>No characters loaded</div>
    }


    return (
        <div className="Character">
            <h1>Character</h1>
            <Card />
        </div>
    )
}

export default Character;