import OrtToggler from './components/OrtToggler';
import OccupationToggle from './components/OccupationToggle';
import Search from './components/Search';
import React from 'react';
import { useState } from 'react';
import SubmitButton from './components/SubmitButton';
import FoundJobsList from './components/FoundJobsList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Routes/MainPage';
import JobAdPage from './Routes/JobAdPage';
import { useEffect } from 'react';

export const MainContext = React.createContext();

export default function App() {
  const[selectedOccupations, setSelectedOccupations] = useState([]);
  const[selectedMunicipalities, setSelectedMunicipalities] = useState([]);
  const[searchValue, setSearchValue] = useState([])
  const[selectedJobAds, setSelectedJobAds] = useState([]);
  const[selectedFilters, setSelectedFilters] = useState();
  const[foundJobs, setFoundJobs] = useState(() => {
    let jobs = sessionStorage.getItem("jobs");
    
    try{
      return JSON.parse(jobs) ? JSON.parse(jobs) : []
    }
    catch(e){
      return []
    }
  });

  useEffect(() => {
    sessionStorage.setItem("jobs", JSON.stringify(foundJobs))
  }, [foundJobs])

  return (
      <MainContext.Provider value={{
      selectedMunicipalities,
      setSelectedMunicipalities,
      selectedOccupations,
      setSelectedOccupations,
      searchValue,
      setSearchValue,
      foundJobs,
      setFoundJobs,
      selectedJobAds,
      setSelectedJobAds,
      selectedFilters,
      setSelectedFilters
      }}>
      <Router>
      <Routes>
        <Route path={"/main"} element={<MainPage/>}/>
        <Route path={"/ad/:adID"} element={<JobAdPage/>}/>
        <Route path={"/"} element={<MainPage/>}/>
      </Routes>
    </Router>
    </MainContext.Provider>
  )

}