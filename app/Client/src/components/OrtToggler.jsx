import React, { useState, useContext } from "react";
import CountyList from './CountyList';
import MunicipalityList from './MunicipalityList';

export const OrtToggleContext = React.createContext()

export default function OrtToggler(){

    const [selectedCounty, setSelectedCounty] = useState()
    const [showCounty, setShowCounty] = useState(false);


    return (
    <OrtToggleContext.Provider value={{selectedCounty, setSelectedCounty, showCounty, setShowCounty}}>
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
    </OrtToggleContext.Provider>
    )
}