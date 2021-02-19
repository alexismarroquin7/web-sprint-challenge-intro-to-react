// Write your Character component here
import React, {useEffect} from 'react';

const Character = (props) => {

    const {characters, setCharacters} = props;

    useEffect(() => {
        const getCharacters = () => {
          axios.get(`${BASE_URL}${API_KEY}`)
          .then(res => {
            setCharacters(res.data);
          })
          .catch(err => {
            console.log(err)
          })
        }
        getCharacters();
      }, [])

    return (
        <div>
            Characters
        </div>
    )
    // characters.map(character => {
    //     return (
    //         <div className="character">
    //             <h1>
    //                 {character.name}
    //             </h1>
    //         </div>
    //     )
    // });
}

export default Character;