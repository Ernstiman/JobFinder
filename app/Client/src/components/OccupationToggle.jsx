import { useState } from "react";
import useGetOccupationFields from "../hooks/useGetOccupationFields";
import React from "react";
import OccupationFieldList from "./OccupationFieldList";
import OccupationGroupList from "./OccupationGroupList";
import useGetMenuRef from "../hooks/useGetManuRef";
import { useEffect, useContext } from "react";
import Overlay from "./Overlay";
import { MainContext } from "../App";

export const OccupationContext = React.createContext();


export default function OccupationToggle(){
    const [selectedOccupationField, setSelectedOccupationField] = useState()
    const [showOccupations, setShowOccupations] = useState()
    const {openFilter, setOpenFilter} = useContext(MainContext);
    
    function clickFilter(){
      setOpenFilter("occupation");
      setShowOccupations(!showOccupations);
      
    }

    useEffect(() => {
        if(openFilter != "occupation"){
            setShowOccupations(false);
        }
    }, [openFilter]);

    return(
        <OccupationContext.Provider value={{selectedOccupationField, setSelectedOccupationField}}>
            <Overlay showState={showOccupations} setState={setShowOccupations}>
            <button onClick={clickFilter}>Yrken {showOccupations ? "▲" : "▼"} </button>
           <div className={`dropdown-menu ${showOccupations ? 'open' : ''}`}> 
                <div className="dropdown-menu-columns">              
                    <div className="occupation-field-list-container">
                        <OccupationFieldList/>
                    </div>
                
                    <div className="occupation-group-list-container">
                        <OccupationGroupList/>
                    </div>   
                </div>           
            </div>
            </Overlay>
        </OccupationContext.Provider>

    );
}