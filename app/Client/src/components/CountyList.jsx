import useGetCounty from "../hooks/useGetCounty"
import { useContext, useEffect, useRef, useState } from "react";
import { OrtToggleContext } from "./OrtToggler"; // Ensure MainContext is imported from App.jsx
import useGetMunicipality from "../hooks/useGetMunicipality";
import { MainContext } from "../App";

export default function DropDownCounty(){

    const {counties, loadingCounties} = useGetCounty();
    const {setSelectedCounty, selectedCounty, activeCounties} = useContext(OrtToggleContext);
    const countyButtons = useRef({});

    function changeCounty(county){
        if(county === selectedCounty){
            setSelectedCounty(null);
        }
        else{
            setSelectedCounty(county);
        }
    }

    useEffect(() => {
        Object.values(countyButtons.current).forEach(county => county.classList.remove('active'));
        for(let county of activeCounties){
            if(countyButtons.current[county]){
                countyButtons.current[county].classList.add('active');
            }
        }
    }, [activeCounties])

    return (
        <ul>
            {!loadingCounties && counties.map((county, i) => (
                <li key={i}>
                    <label htmlFor="county">
                        <button className={`menu-button`}
                        ref={buttonRef => countyButtons.current[county] = buttonRef} 
                        onClick={e => changeCounty(county)}>{county}</button>
                    </label>
                </li>
            ))}
        </ul>
    )
}