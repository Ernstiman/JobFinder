import { useContext } from "react";
import { OccupationContext } from "./OccupationToggle";
import useGetOccupationFields from "../hooks/useGetOccupationFields";

export default function OccupationFieldList() {
    const { occupationFields, loadingOccupationFields } = useGetOccupationFields();
    const {selectedOccupationField, setSelectedOccupationField} = useContext(OccupationContext)

    function changeOccupation(e){
        if(e.target.value == selectedOccupationField){
            setSelectedOccupationField(null);
        }
    }
    return(
        <ul>
            {!loadingOccupationFields && occupationFields.map((field, i) => (
                <li key={i}>
                    <label htmlFor="occupationField">
                        <input type="radio" name="occupationField" value={field} checked={selectedOccupationField === field}
                        onChange={e => setSelectedOccupationField(e.target.value)}
                        onClick={e => changeOccupation(e)}/>
                        {field}
                    </label>
                </li>
            ))}
        </ul>
    )

}