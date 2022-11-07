import './NewCity.css'
import React, { useState } from 'react';

function NewCity() {
    const [name, setName] = useState('');
    const [continent,  setContinent] = useState('')
    const [photo, setPhoto] = useState('');
    const [population, setPopulation] = useState('');


    const submit = () => {
        if (name === "" || continent === "" || photo === "" || population === "") {
            alert("Please fill in all fields");
        } else {
            let newCity = { name,continent,photo,population,}
            localStorage.setItem("newCity", JSON.stringify(newCity));
        }
    };
    return (
        <>
            <form className="form-hotel">
                <div className="form-body">
                    <h1 className='title'>New Place</h1>
                    <h2 className='title2'>¡Create new City!</h2>
                    <input
                        type="text"
                        placeholder="Name of city"
                        className='form__input'
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Continent"
                        className='form__input'
                        onChange={(e) => setContinent(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Photo (URL)"
                        className='form__input'
                        onChange={(e) => setPhoto(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Population"
                        className='form__input'
                        onChange={(e) => setPopulation(Number(e.target.value))}
                        required
                    />
                    <div className="submit">
                        <button className='submit2' onClick={submit}>Create</button>
                    </div>
                </div>
            </form>
        </>
    );
};


export { NewCity }