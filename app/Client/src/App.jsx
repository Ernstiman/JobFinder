
import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './Routes/MainPage.jsx';
import JobAdPage from './Routes/JobAdPage.jsx';
import { useEffect } from 'react';
import AdLetterPage from './AdLetterPage.jsx';

export const MainContext = React.createContext();

export default function App() {
  //The selected occupations in a array
  const[selectedOccupations, setSelectedOccupations] = useState([]);
  // The selected municipalities in a array
  const[selectedMunicipalities, setSelectedMunicipalities] = useState([]);
  // The value in the search bar

  const[searchValue, setSearchValue] = useState([])
  // The job-ads that have been selected
  const[selectedJobAds, setSelectedJobAds] = useState([]);
  // 
  const[selectedFilters, setSelectedFilters] = useState();
  const[openFilter, setOpenFilter] = useState(false);
  const[adLetters, setAdLetters] = useState([]);
  const[loading, setLoading] = useState(false);
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
      setSelectedFilters,
      openFilter, 
      setOpenFilter,
      adLetters,
      setAdLetters,
      loading, 
      setLoading,
      }}>
      <Router>
      <Routes>
        <Route path={"/main"} element={<MainPage/>}/>
        <Route path={"/ad/:adID"} element={<JobAdPage/>}/>
        <Route path={"/AdLetterPage"} element={<AdLetterPage/>}/>
        <Route path={"/"} element={<MainPage/>}/>
      </Routes>
    </Router>
    </MainContext.Provider>
  )

}