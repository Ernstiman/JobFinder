import { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { MainContext } from "../App";
import { Link } from "react-router-dom";

export default function JobAdPage(){
    
    const {adID} = useParams();
    const {foundJobs} = useContext(MainContext);
    const [job, setJob] = useState()
    const [loadingJob, setLoadingJob] = useState(true);

    useEffect(() => {
        setLoadingJob(true);
        foundJobs.map(job => console.log(job.id, adID))
        setJob(foundJobs.find(job => job.id === adID));
        setLoadingJob(false)
    }, [])

    if(loadingJob){
        return <p>loading...</p>
    }

    return (
        <>
        <Link to={"/"}>
            <p>{"<-Back"}</p>
        </Link>
        
         <p>{job.description.text}</p>   
         </>
    )
}