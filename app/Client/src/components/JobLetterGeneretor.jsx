import { useContext, useState } from "react";
import { MainContext } from "../App";
import postAd from "../api/postAdd";
import downloadLetter from "../api/downloadLetter";
import { getAdFromId } from "../utils";

export default function JobLetterGenerator(){
    const {selectedJobAds} = useContext(MainContext);
    const [loadingAdLetters, setLoadingAdLetters] = useState(true);
    const [adLetters, setAdLetters] = useState([])
    const [showText, setShowText] = useState(false)

    async function HandleButton(){
        setLoadingAdLetters(true)
        if(selectedJobAds){
            setShowText(true);
            try{
                const data = await postAd(selectedJobAds);
                setAdLetters(data);
            }
            catch(e){
                console.log("Something went wrong when posting ads", e)
            }
            finally{
                setLoadingAdLetters(false)
            }
        }           
    }

   async function handleDownloadClick(letter){
        const ad = getAdFromId(letter.id, selectedJobAds);
        const text = letter.text;
        await downloadLetter([{letter: text, ad}])
    }

    if(selectedJobAds.length === 0){
        return null
    }
    return (
        <>
        <button onClick={HandleButton}>Genereta letter for Jobs ({selectedJobAds.length})</button>
        {showText && 
            loadingAdLetters ? <p>loading letters...</p>:
                <ul>
                    {adLetters && adLetters.map(letter => (
                        <li key={letter.id}>
                            <button onClick={() => handleDownloadClick(letter)}>Download</button>
                            <p>{letter.text}</p>
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}