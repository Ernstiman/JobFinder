import { useContext, useEffect } from "react";
import { OrtToggleContext } from "./OrtToggler";
import useGetMunicipality from "../hooks/useGetMunicipality";
import { MainContext } from "../App";


export default function MunicipalityList(){
    const {selectedMunicipalities, setSelectedMunicipalities} = useContext(MainContext)
    const {selectedCounty, setActiveCounties,activeCounties} = useContext(OrtToggleContext);
    const { municipalities, loadingMunicipalities } = useGetMunicipality(selectedCounty);
    function handleCheck(e){
        const value = e.target.value;
        const checked = e.target.checked;

        if(checked){
            setActiveCounties(prev => {
                return  prev.includes(selectedCounty) ? 
                prev :
                [...prev, selectedCounty]
            })
        }

        setSelectedMunicipalities(prev => {
           return checked ? 
            [...prev, value] :
            prev.filter(municipality => municipality !== value)
        })

        

    }

    useEffect(() => {
        for(let municipalitie of selectedMunicipalities){
            if(municipalities.includes(municipalitie)){
                return;
            }
        }

        setActiveCounties(prev => {
                    return prev.filter(name => name != selectedCounty)
            });
    }, [selectedMunicipalities])


    return (
        <ul>
            {!loadingMunicipalities && municipalities && municipalities.map((municipality, i) => (
                <li key={i}>
                    <label htmlFor="municipality">
                        <input type="checkbox" value={municipality} checked={selectedMunicipalities.includes(municipality)} onChange={handleCheck}/>
                        <span>{municipality}</span>
                    </label>
                </li>
            ))}
        </ul>

    )

}