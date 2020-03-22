import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
const $ = window.$;
//const Link = require("react-router-dom").Link;
//const BrowserRouter = require("react-router-dom").BrowserRouter;
//const Route = require("react-router-dom").Route;
class WETtables extends React.Component {
	componentDidMount() {
		//this.$el = $(this.el);
		this.$el = document.getElementById('root');

		// Initialize the Tables plugin
		this.$el.trigger( "wb-init.wb-tables" );
	}

	componentWillUnmount() {

		// Cleanup code....
	}

	render() {
		return (
			<div>
				<table className="wb-tables table" ref={el => this.el = el}>
					{this.props.children}
				</table>
			</div>
		);
	}
}

function DataTables() {
  return (
	<section>
		<h2>React examples</h2>
		<WETtables>
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
		</WETtables>
	</section>
  );
}


ReactDOM.render (
	<DataTables />,
	document.getElementById( 'root' )
);
export default WETtables;