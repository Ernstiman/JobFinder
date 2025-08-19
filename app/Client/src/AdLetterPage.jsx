import React, { useContext, useState, useEffect } from 'react';
import { MainContext } from './App';
import { getAdFromId } from './utils';
import downloadLetter from './api/downloadLetter';

export default function AdLetterPage(){

    const [adLetters, setAdLetters] = useState([]);
    const [selectedJobAds, setSelectedJobAds] = useState([]);

    async function handleDownloadClick(letter){
        console.log(letter, "letter from click");
        const ad = getAdFromId(letter.id, selectedJobAds);
        console.log(ad, "ad from letter");
        const text = letter.text;
        await downloadLetter(text, ad);
    }

    useEffect(() => {
        let storedAdLetters = sessionStorage.getItem("adLetters");
        console.log(storedAdLetters, "stored ad letters");  
        if (storedAdLetters) {
            storedAdLetters = JSON.parse(storedAdLetters);
            setAdLetters(storedAdLetters.data);
            setSelectedJobAds(storedAdLetters.selectedJobAds);
        }
    }, [])

    return (
        <div>
            <h1>Ad Letter Page</h1>
            <ul>
                {adLetters.map((letter, index) => (
                    <div key={index}>
                        <button onClick={() => handleDownloadClick(letter)}>Download letter</button>
                        <li>{letter.text}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}