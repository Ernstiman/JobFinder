import { getURLString } from "../utils"


export async function fetchTaxologyMunicipalities(selectedMunicipalities){
    const URLstr = getURLString(selectedMunicipalities, "preferred_label")
    const response = await fetch(`https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/municipality`, {
        headers: {
            accept: 'application/json'
        }
    });
    const data = await response.json();
    const filtered_data = data.filter(elem => selectedMunicipalities.includes(elem["taxonomy/preferred-label"]))
    const lauCodes = filtered_data.map(elem => elem["taxonomy/lau-2-code-2015"])
    return lauCodes;
}

export async function fetchTaxologySSYK(selectedOccupations){
    const response = await fetch(`https://taxonomy.api.jobtechdev.se/v1/taxonomy/specific/concepts/ssyk`,{
        headers: {
            accept: 'application/json'
        }
    }
    );
    const data = await response.json();
    const filtered_data = data.filter(elem => selectedOccupations.includes(elem["taxonomy/preferred-label"]));
    const ssykCodes = filtered_data.map(elem => elem["taxonomy/ssyk-code-2012"])
    return ssykCodes;
}