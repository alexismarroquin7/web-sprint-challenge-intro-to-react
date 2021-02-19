// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:25%;
    border:1px solid white;
    color:white;
    margin:2%;

`

const Character = (props) => {
    
    const {character} = props;

    return (
        <StyledDiv className="Character">
            <h1 className="Name">{character.name}</h1>
            <h1 className="Name">{character.birth_year}</h1>
            <h1 className="Name">{character.gender}</h1>
            <h1 className="Name">{character.hair_color}</h1>
            <h1 className="Name">{character.height}</h1>
        </StyledDiv>
    )
}

export default Character;