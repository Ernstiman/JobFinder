import { useContext } from "react"
import { MainContext } from "../App"
import { Link } from "react-router-dom";

export default function FoundJobsList(){

    const {foundJobs} = useContext(MainContext);



    return (
        <ul className="job-ad-list"> 
            {foundJobs.length > 0 && foundJobs.map((job, i) => (
                <div className="job-item">
                <li key={i}>
                    <Link to={`/ad/${job.id}`}>
                    <h1>{job.headline}</h1>
                    </Link>
                    <h2>{job.occupation.label}</h2>
                    <p>{job.workplace_address.municipality}</p>
                </li>
                </div>
            ))}
        </ul>
    )
}