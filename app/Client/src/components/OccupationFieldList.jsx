import { useContext } from "react";
import { OccupationContext } from "./OccupationToggle";
import useGetOccupationFields from "../hooks/useGetOccupationFields";

export default function OccupationFieldList() {
    const { occupationFields, loadingOccupationFields } = useGetOccupationFields();
    const {selectedOccupationField, setSelectedOccupationField} = useContext(OccupationContext)
    return(
        <ul>
            {!loadingOccupationFields && occupationFields.map((field, i) => (
                <li key={i}>
                    <label htmlFor="occupationField">
                        <input type="radio" name="occupationField" value={field} checked={selectedOccupationField === field}
                        onChange={e => setSelectedOccupationField(e.target.value)}/>
                        {field}
                    </label>
                </li>
            ))}
        </ul>
    )

}