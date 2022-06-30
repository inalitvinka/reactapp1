import { useEffect, useState } from "react";

function Effect () {
    const [breed, setBreed] = useState('hound');
    const [imgSrc, setImgSrc] = useState();

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(data => data.json())
        .then(dogs => setImgSrc(dogs.message[777]))
        
        // console.log('request');
    }, [breed]);

    const onBreedHandler = (event) => {
        console.log(event.target.value);
        const {value} = event.target;
        setBreed(value);
    }

    return (
        <div className="border">
            <h2>React useEffect</h2>
            <input type='text' value={breed} onChange={onBreedHandler} className='btnStyle'/>
            &nbsp;
            <img src={imgSrc} alt={breed} />
        </div>
    )
}

export default Effect;
