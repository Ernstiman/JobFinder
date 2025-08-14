import { useContext } from "react"
import { MainContext } from "../App"
import { Link } from "react-router-dom";

export default function FoundJobsList(){

    const {foundJobs, selectedJobAds, setSelectedJobAds} = useContext(MainContext);

    function handleCheck(e){
        const value = e.target.value;
        const checked = e.target.checked;
        const job = foundJobs.find(job => job.id === value)
        setSelectedJobAds(prev => {
            return checked ? 
                [...prev, job] :
                selectedJobAds.filter(ad => ad !== job);
        })
        console.log(selectedJobAds)
    }

    return (
        <ul className="job-ad-list"> 
            {foundJobs.length > 0 && foundJobs.map((job, i) => (
                <div key={i} className="job-item">
                
                <li>
                    <Link to={`/ad/${job.id}`}>
                    <h1>{job.headline}</h1>
                    </Link>
                    <h2>{job.occupation.label}</h2>
                    <p>{job.workplace_address.municipality}</p>
                </li>
                <div className="selected-ad-container">
                <input type="checkbox" name="selected-ad" value={job.id} checked={selectedJobAds.includes(job)} onChange={handleCheck}/>
                </div>
                </div>
            ))}
        </ul>
    )
}