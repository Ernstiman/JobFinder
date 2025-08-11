import useGetMunicipality from "../hooks/useGetMunicipality"
import { useState, useContext} from "react";
import { MainContext } from '../App'; // Ensure MainContext is imported from App.jsx

export default function County({county}){

    const {setSelectedCounty} = useContext(MainContext);
    return (
        <div className="municipality-selector-container">
            <button onClick={() => setSelectedCounty(county)}>{county}</button>
        </div>
    )


}