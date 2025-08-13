import { useContext } from "react";
import { OrtToggleContext } from "./OrtToggler";
import useGetMunicipality from "../hooks/useGetMunicipality";
import { MainContext } from "../App";


export default function MunicipalityList(){
    const {selectedMunicipalities, setSelectedMunicipalities} = useContext(MainContext)
    const {selectedCounty} = useContext(OrtToggleContext);
    const { municipalities, loadingMunicipalities } = useGetMunicipality(selectedCounty);
    function handleCheck(e){
        const value = e.target.value;
        const checked = e.target.checked;

        setSelectedMunicipalities(prev => {
           return checked ? 
            [...prev, value] :
            prev.filter(municipality => municipality !== value)
        })

    }

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