
import OrtToggler from '../components/OrtToggler';
import OccupationToggle from '../components/OccupationToggle';
import Search from '../components/Search';
import React, { createContext } from 'react';
import { useState, useContext, useEffect } from 'react';
import SubmitButton from '../components/SubmitButton';
import FoundJobsList from '../components/FoundJobsList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import JobLetterGenerator from '../components/JobLetterGeneretor';
import FilterList from '../components/FilterList';
import { MainContext } from '../App';

export default function MainPage() {
  const {setFoundJobs} = useContext(MainContext);


  return (
    <>
     <button className = "empty-button" onClick={() => {
        setFoundJobs([]);
      }}>Empty</button>
    <div className='app-container'>
     
     <div className='upper'>
      <div className='search-container'>
        <Search/>
        <SubmitButton/>
      </div>
     </div>
      
      <div className='filter-container'>
      <div className='filter-column'>
        <OrtToggler/>
      </div>
      <div className='filter-column'>
        <OccupationToggle/>
      </div>
      <div className='filter-column'>
        <FilterList/>
      </div>
      </div>
      <div className="found-ads-container">
      <FoundJobsList/>
      </div>
      <JobLetterGenerator/>
    </div>
    
   </> 
  )
}
