// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width:20%;
    border:4px solid white;
    color:white;

    border-radius:10px;

    display:flex;
    flex-flow:column wrap;
    justify-content:flex-start;

    margin:2%;

    h1 {
        color:black;
    }

    p, span {
        padding-left:3%;
        padding-right:3%;
    }

    p {
        width:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        /* border:1px solid blue; */
        font-size:3rem;
    }
    span {
        /* border:1px solid red; */
        font-size:1.5rem;
    }
    div {
        display:flex;
        flex-flow:row wrap;
        justify-content:flex-start;
        background:black;
        transition: all 0.3s ease;

        &:hover {
            color:black;
            background:lightgrey;
        }
    }

    div.Height {
        border-bottom-right-radius:10px;
        border-bottom-left-radius:10px;
    }
`

const Character = (props) => {
    
    const {character} = props;

    return (
        <StyledDiv className="Character">
            <h1 className="Name">{character.name}</h1>
            <div>
                <p className="Year"><span>Birth Year:</span>{character.birth_year}</p>
            </div>
            <div>
                <p className="Gender"><span>Gender:</span>{character.gender}</p>
            </div>
            <div>
                <p className="Hair"><span>Hair Color:</span>{character.hair_color}</p>
            </div>
            <div className="Height">
                <p className="Name"><span>Height:</span>{character.height}</p>
            </div>
        </StyledDiv>
    )
}

export default Character;