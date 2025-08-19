import { useState } from "react";
import useGetOccupationFields from "../hooks/useGetOccupationFields";
import React from "react";
import OccupationFieldList from "./OccupationFieldList";
import OccupationGroupList from "./OccupationGroupList";
import useGetMenuRef from "../hooks/useGetManuRef";
import { useEffect } from "react";
import Overlay from "./Overlay";

export const OccupationContext = React.createContext();


export default function OccupationToggle(){
    const [selectedOccupationField, setSelectedOccupationField] = useState()
    const [showOccupations, setShowOccupations] = useState()
    

    return(
        <OccupationContext.Provider value={{selectedOccupationField, setSelectedOccupationField}}>
            <Overlay showState={showOccupations} setState={setShowOccupations}>
            <div className='occupation-container'>
            <button onClick={() => setShowOccupations(!showOccupations)}>Yrken {showOccupations ? "▲" : "▼"} </button>
           {showOccupations && 
           <div className="occupation-selector-container">
                <fieldset>
                    <legend></legend>
                    <div className="occupation-field-list-container">
                        <OccupationFieldList/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend></legend>
                    <div className="occupation-group-list-container">
                        <OccupationGroupList/>
                    </div>
                </fieldset>
            </div>}
            </div>
            </Overlay>
        </OccupationContext.Provider>

    );
}