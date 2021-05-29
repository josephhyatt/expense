import React, { Component } from "react";
import fire from "../../config/Fire";

class Tracker extends Component {
	// logout button
	logout = () => {
		fire.auth().signOut();
	};

	render() {
		return (
			<>
				<button onClick={this.logout}>Exit</button>
			</>
		);
	}
}

export default Tracker;
