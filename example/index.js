import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/Carousel';
import slides from './slides.js';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Carousel slides={slides} />, container);
