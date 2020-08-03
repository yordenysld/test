import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles'; 
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HeaderPage from '../HeaderPage';
import BodyPage from '../BodyPage';
import './style.css'
//this is it  main component
const AppView = ()=>{
  return (
      <div className={'root'}>
            <HeaderPage />
            <BodyPage />
      </div>
  );
}



export default AppView;