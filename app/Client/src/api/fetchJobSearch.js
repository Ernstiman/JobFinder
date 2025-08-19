import { getURLString } from "../utils";

export default async function fetchJobSearch(params){
    const arr = [];

    Object.keys(params).forEach(key => {
        let query = []
        switch(key){
            case 'lauCodes':
                query = 'municipality';
                break
            case 'ssykCodes':
                query = 'occupation-group';
                break
            case 'searchValue':
                query = 'q';
                break
            case 'durationId':
                query = 'employment-type'
                break
            default :
                query = "";
                break
        }
        if(params[key] && params[key].length > 0) arr.push(getURLString(params[key], query));
    })
    const urlStr = arr.join("&");

    const result = await fetch(`https://jobsearch.api.jobtechdev.se/search?${urlStr}`, {
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        }
    })
    const data = await result.json();
    return data.hits;
    
}