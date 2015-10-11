import __fetch from "isomorphic-fetch";
import React from "react";
import Transmit from "react-transmit";
import Navbar from "./components/Navbar";

/**
 * Main React application entry-point for both the server and client.
 */
class Main extends React.Component {
	/**
	 * Runs on server and client.
	 */


	/**
	 * Runs on server and client.
	 */
	render () {
		return (
			<Navbar></Navbar>
		);
	}
}

export default Transmit.createContainer(Main);
