import React from 'react';
import logo from './logo.svg';
//import WETtables from './WETtables';
import './App.css';
import './App.css';
import './theme.css';

import ReactDOM from 'react-dom';
//import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router-dom';

function App() {
	ReactDOM.render (
	<DataTable />,
	document.getElementById( 'root' )
);
  return (
    <div className="App">
      <header className="App-header">
	    <div align="centre">
        <img align="centre" src={logo} className="App-logo" alt="logo" />
		</div>
	
      </header>
    </div>
  );
}
function DataTables() {
  return (

  <table className="wb-tables table">
			<thead>
				<tr>
					<th>Rendering engine</th>
					<th>Browser</th>
					<th>Platform(s)</th>
					<th>Engine version</th>
					<th>CSS grade</th>
				</tr>
			</thead>
	</table>		
  );
}  
function DataTable() {
  return (

  			<div>
			      <header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
	



						</header>	
				
					<section>
		<h2>React WET Integration Demo</h2>
		<table className="wb-tables table">
			<thead>
				<tr>
					<th>Rendering engine</th>
					<th>Browser</th>
					<th>Platform(s)</th>
					<th>Engine version</th>
					<th>CSS grade</th>
				</tr>
			</thead>
			<tbody>
				<tr class="gradeX">
					<td>Trident</td>
					<td>Internet
						 Explorer 4.0</td>
					<td>Win 95+</td>
					<td class="center">4</td>
					<td class="center">X</td>
				</tr>
				<tr class="gradeC">
					<td>Trident</td>
					<td>Internet
						 Explorer 5.0</td>
					<td>Win 95+</td>
					<td class="center">5</td>
					<td class="center">C</td>
				</tr>
				<tr class="gradeA">
					<td>Trident</td>
					<td>Internet
						 Explorer 5.5</td>
					<td>Win 95+</td>
					<td class="center">5.5</td>
					<td class="center">A</td>
				</tr>
				<tr class="gradeA">
					<td>Trident</td>
					<td>Internet
						 Explorer 6</td>
					<td>Win 98+</td>
					<td class="center">6</td>
					<td class="center">A</td>
				</tr>
				<tr class="gradeA">
					<td>Trident</td>
					<td>Internet Explorer 7</td>
					<td>Win XP SP2+</td>
					<td class="center">7</td>
					<td class="center">A</td>
				</tr>
			</tbody>
		</table>
	</section>
						<p align="center">

							<input class="btn btn-default" type="submit" value="   Submit   "/>&nbsp;
							<a class="btn btn-default" href="/map.html" role="button">Get Map</a>
						</p>				
				
			</div>

  );
}
export default App;
