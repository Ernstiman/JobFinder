import { useContext, useState} from "react";
import { MainContext } from "../App";
import { useEffect } from "react";
import postAd from "../api/postAdd";

export default function useGetAddLetters(){
    const [loadingAdLetters, setLoadingAdLetters] = useState(true);
    const [adLetters, setAdLetters] = useState([])
    const {selectedJobAds} = useContext(MainContext);

    useEffect(() => {
        if(selectedJobAds){
            const data = postAd(selectedJobAds)
            .then(setAdLetters(data))
            .catch(e => {
                console.log("something went wrong when posting Ads to server");
            })
            .finally(() => setLoadingAdLetters(false))
        }
    }, [selectedJobAds]);

    return {adLetters, loadingAdLetters};

}