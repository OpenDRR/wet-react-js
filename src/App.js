
import './theme.css';


import React from 'react';
import logo from './logo.svg';

import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect} from 'react-router-dom';


function App() {
	ReactDOM.render (
	<DataTables />,
	document.getElementById( 'root' )
);
  return (
    <div className="App">

    </div>
  );
}

function DataTables() {
  return (
      <div className="infoViz">
		<div>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
		</header>
		</div>
		<div>
			&nbsp;
		</div>
        <div className="narrative">
		  <iframe src='http://dev.info-viz.cctech.io.s3-website-us-west-2.amazonaws.com/?scenario=earthquake_affectedpeople&mapType=bubble&chart=barchart&property=sc_DP30&center=49.3,-123.07&title=Earthquake' width="100%" height="540" frameBorder="0">
		  </iframe> 
        </div>
        <div className="chart" align="center">
		  		<input class="btn btn-default" type="submit" value="   Submit   "/>&nbsp;			
        </div>
      </div>
  );
} 

export default App;
