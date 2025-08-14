import { useContext } from "react"
import {fetchTaxologyMunicipalities, fetchTaxologySSYK} from "../api/fetchTaxology"
import { MainContext } from "../App"
import fetchJobSearch from "../api/fetchJobSearch"

export default function SubmitButton(){
    const {selectedMunicipalities, selectedOccupations, setFoundJobs} = useContext(MainContext)

    async function click(){
        const lauCodes = await fetchTaxologyMunicipalities(selectedMunicipalities);
        const ssykCodes = await fetchTaxologySSYK(selectedOccupations);
        const foundJobs = await fetchJobSearch({lauCodes, ssykCodes});
        setFoundJobs(foundJobs);
        console.log(foundJobs[0]);
    }

    return (
        <button onClick={click}>Search Jobs</button>
    )
}