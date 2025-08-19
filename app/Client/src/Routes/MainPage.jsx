
import OrtToggler from '../components/OrtToggler';
import OccupationToggle from '../components/OccupationToggle';
import Search from '../components/Search';
import React from 'react';
import { useState, useContext, useEffect } from 'react';
import SubmitButton from '../components/SubmitButton';
import FoundJobsList from '../components/FoundJobsList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import JobLetterGenerator from '../components/JobLetterGeneretor';
import FilterList from '../components/FilterList';
import { MainContext } from '../App';

export default function MainPage() {

  return (
    
    
    <div className='app-container'>
      <div className='search-container'>
        <Search/>
      </div>
      <div className='filter-container'>
      <OrtToggler/>
      <OccupationToggle/>
      <FilterList/>
      </div>
      <SubmitButton/>
      <div className="found-ads-container">
      <FoundJobsList/>
      </div>
      <JobLetterGenerator/>
    </div>
    
    
  )
}
