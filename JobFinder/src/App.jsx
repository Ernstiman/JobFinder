import { useState, useEffect } from 'react'
import useGetCounty from './hooks/useGetCounty'
import DropDownCounty from './compnents/dropDownCounty';
import { useContext } from 'react';
import React from 'react';
import useGetMunicipality from './hooks/useGetMunicipality';

const MainContext = React.createContext()


function App() {

  const [selectedCounty, setSelectedCounty] = useState()
  const { municipality, loadingMunicipality } = useGetMunicipality(selectedCounty);
  
  return (
    <MainContext.Provider value={{selectedCounty, setSelectedCounty}}>
      <DropDownCounty/>
      <div className='municipalities-container'>
      {selectedCounty && !loadingMunicipality && municipality.map((municipality, i) => (
        <button key={i}>{municipality}</button>
      ))}
      </div>
    </MainContext.Provider>
  )
}

export { MainContext };
export default App;
