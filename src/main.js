import React from 'react';
import ReactDOM from 'react-dom';
import Mohr from './components/Mohr';
import style from './styles/main.scss';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Mohr />,
    document.getElementById('app')
  );
});