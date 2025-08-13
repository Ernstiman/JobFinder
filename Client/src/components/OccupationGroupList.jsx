import { useContext } from "react";
import useGetOccupationGroup from "../hooks/useGetOccupationGroup";
import { OccupationContext } from "./OccupationToggle";
import { MainContext } from "../App";

export default function OccupationGroupList(){

    const {selectedOccupationField, setSelectedOccupationField} = useContext(OccupationContext)
    const {occupationGroups, loadingOccupationGroups} = useGetOccupationGroup(selectedOccupationField)
    const {selectedOccupations, setSelectedOccupations} = useContext(MainContext)

    function handleCheck(e){
        
        const value = e.target.value;
        const checked = e.target.checked;

        setSelectedOccupations(prev => {
            return checked ?
            [...prev, value] : 
            selectedOccupations.filter(item => item !== value);
        })
        
    }

    return (
        <ul>
            {!loadingOccupationGroups && occupationGroups && occupationGroups.map((occupationGroup, i) => (
                <li key={i}>
                    <label htmlFor="occupation-group">
                        <input type="checkbox" value={occupationGroup} checked={selectedOccupations.includes(occupationGroup)} onChange={handleCheck}/>
                        {occupationGroup}
                    </label>
                </li>
            ))}
        </ul>
    )
}