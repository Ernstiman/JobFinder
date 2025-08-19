import React, { useState, useContext } from "react";
import CountyList from './CountyList';
import MunicipalityList from './MunicipalityList';
import { useEffect } from "react";
import { useRef } from "react";
import useGetMenuRef from "../hooks/useGetManuRef";
import Overlay from "./Overlay";

export const OrtToggleContext = React.createContext()

export default function OrtToggler(){

    const [selectedCounty, setSelectedCounty] = useState()
    const [showCounty, setShowCounty] = useState(false);
    const {show, menuRef} = useGetMenuRef();

    // useEffect(() => {
    //   setShowCounty(show);
    // }, [show]);
  
    return (
      
    <OrtToggleContext.Provider value={{selectedCounty, setSelectedCounty, showCounty, setShowCounty}}>
    <Overlay showState={showCounty} setState={setShowCounty}>
    <div className="ort-container" ref={menuRef}>
    
    <button onClick={() => setShowCounty(!showCounty)}>Ort {showCounty ? "▲" : "▼"}</button>
     {showCounty && ( <div className='location-selector-container' >
      
      <fieldset >
        <legend></legend>
        <div className='county-list-container' >
          <CountyList/>
        </div>
      </fieldset>

      <fieldset>
        <legend></legend>
        <div className='municipality-list-container'>
            <MunicipalityList/>
        </div>
      </fieldset> 
        
      </div>
     )}
     
     </div>
     </Overlay>  
    
    </OrtToggleContext.Provider>
    )
}