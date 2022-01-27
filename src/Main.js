import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './timer.css';

const Main = () => {
  return (
    <div>
      <div className='main_container'>
        <div className='box'>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to='/countMax'
          >
            <div className='GameBtn'>Go to Count Max Game!</div>
          </Link>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to='/timer'
          >
            <div className='GameBtn'>Go to Count Max Expect Game!</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
