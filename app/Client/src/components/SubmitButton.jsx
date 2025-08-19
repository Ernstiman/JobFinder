import { useContext } from "react"
import {fetchTaxologyMunicipalities, fetchTaxologySSYK, fetchTaxonomyDuration} from "../api/fetchTaxology"
import { MainContext } from "../App"
import fetchJobSearch from "../api/fetchJobSearch"

export default function SubmitButton(){
    const {selectedMunicipalities, selectedOccupations, setFoundJobs, searchValue, selectedFilters} = useContext(MainContext)

    async function click(){
        console.log(selectedFilters, "selected")
        let durationId = "";
        const lauCodes = await fetchTaxologyMunicipalities(selectedMunicipalities);
        const ssykCodes = await fetchTaxologySSYK(selectedOccupations);
        if(selectedFilters) durationId = await fetchTaxonomyDuration(selectedFilters)
        const foundJobs = await fetchJobSearch({lauCodes, ssykCodes, searchValue, durationId});
        setFoundJobs(foundJobs);
    }

    return (
        <button onClick={click}>Search Jobs</button>
    )
}