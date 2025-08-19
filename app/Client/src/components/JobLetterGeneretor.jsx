import { useContext, useState } from "react";
import { MainContext } from "../App";
import postAd from "../api/postAdd";
import downloadLetter from "../api/downloadLetter";
import { getAdFromId } from "../utils";
import { useNavigate } from "react-router-dom";

export default function JobLetterGenerator(){
    const navigate = useNavigate();
    const {selectedJobAds, adLetters, setAdLetters} = useContext(MainContext);
    const [loadingAdLetters, setLoadingAdLetters] = useState(false);
    const [showText, setShowText] = useState(false)

    async function HandleButton(){
        setLoadingAdLetters(true)
        if(selectedJobAds){
            setShowText(true);
            try{
                const data = await postAd(selectedJobAds);
                sessionStorage.setItem("adLetters", JSON.stringify({data, selectedJobAds}));
                await navigate("/AdLetterPage");

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
        await downloadLetter(text, ad);
    }

    if(selectedJobAds.length === 0){
        return null
    }
    return (
        <>
        <button onClick={HandleButton}>Generate letter for Jobs ({selectedJobAds.length})</button>
        {showText && 
            loadingAdLetters && 
            <div className="letterLoader"><p>loading letters...</p></div>
        }
        </>
    )
}