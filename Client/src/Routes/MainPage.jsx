
import OrtToggler from '../components/OrtToggler';
import OccupationToggle from '../components/OccupationToggle';
import Search from '../components/Search';
import React from 'react';
import { useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import FoundJobsList from '../components/FoundJobsList';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function MainPage() {



  return (
    

    <div className='app-container'>
      <div className='search-container'>
        <Search/>
      </div>
      <div className='toggler-container'>
      <div className='ort-container'>
      <OrtToggler/>
      </div>
      <div className='occupation-container'>
      <OccupationToggle/>
      </div>
      </div>
      <SubmitButton/>
      <FoundJobsList/>
    </div>
    
    
  )
}
