import React, { useState, useContext, use, useEffect } from "react";
import CountyList from './CountyList';
import MunicipalityList from './MunicipalityList';
import Overlay from "./Overlay";
import { MainContext } from "../App";

export const OrtToggleContext = React.createContext()

export default function OrtToggler(){

    const [selectedCounty, setSelectedCounty] = useState();
    const [showCounty, setShowCounty] = useState(false);
    const {openFilter, setOpenFilter} = useContext(MainContext);

    function clickFilter(){
      setOpenFilter("ort");
      setShowCounty(!showCounty); //If the menu is open then it will close
      const elements = document.getElementsByClassName("dropdown-menu ort");
      console.log(elements);
      for(let elem of elements){ // Ads open to the elements class list
        elem.classList.add("open");
      }
    }

    useEffect(() => {
      if(openFilter != "ort"){
        setShowCounty(false);
      }
    }, [openFilter]);
  
    return (
    
    <OrtToggleContext.Provider value={{selectedCounty, setSelectedCounty, showCounty, setShowCounty}}>
    <Overlay showState={showCounty} setState={setShowCounty}>    
    <button onClick={clickFilter}>Ort {showCounty ? "▲" : "▼"}</button>
     {showCounty && 
     ( <div className={`dropdown-menu${showCounty ? " open" : ""}`}>
        <div className="dropdown-menu-columns">
          <div className='county-list-container' >
            <CountyList/>
          </div>
          <div className='municipality-list-container'>
              <MunicipalityList/>
          </div>
        </div>
      </div>
     )}
     
     </Overlay>  
    
    </OrtToggleContext.Provider>
    )
}