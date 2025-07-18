import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
import SecondsCounter from './components/Home';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
const container = document.getElementById('root');
const root = createRoot(container);


let counter = 0

setInterval(() => {
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  counter++;

  root.render(
    <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />

  );
}, 1000);

