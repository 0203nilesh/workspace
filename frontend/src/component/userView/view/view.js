import React, { useState } from 'react'
import './style.css';
import Row from './row/row';
import Filter from '../filter/filter';

export default function View({heading,setHeading ,setUpdateData}) {
  return (
    <div className='view-container'>
        <div className="heading">
            <p>{heading}</p>
        <Filter setHeading={setHeading} />
        </div>
        <Row setUpdateData={setUpdateData} setHeading={setHeading} />
    </div>
  )
}
