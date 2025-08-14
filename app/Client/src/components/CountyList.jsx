import useGetCounty from "../hooks/useGetCounty"
import { useContext } from "react";
import { OrtToggleContext } from "./OrtToggler"; // Ensure MainContext is imported from App.jsx

export default function DropDownCounty(){

    const {counties, loadingCounties} = useGetCounty();
    const {setSelectedCounty, selectedCounty} = useContext(OrtToggleContext);
    return (
        <ul>
            {!loadingCounties && counties.map((county, i) => (
                <li key={i}>
                    <label htmlFor="county">
                        <input type="radio" name="county" value={county}
                        checked={selectedCounty === county}
                        onChange={e => setSelectedCounty(e.target.value)} />
                        {county}
                    </label>
                </li>
            ))}
        </ul>
    )
}