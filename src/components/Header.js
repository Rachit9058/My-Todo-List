import React from 'react'
import './Header.css';

export default function Header(props) {
  return (
    <div className='header'>
      <h4>{props.heading}</h4>
    </div>
  )
}
