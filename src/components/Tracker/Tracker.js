import React, { Component } from "react";
import fire from "../../config/Fire";
import "./Tracker.css";

class Tracker extends Component {
	// logout button
	logout = () => {
		fire.auth().signOut();
	};

	render() {
		return (
			// main block of the dashboard
			<div className="trackerBlock">
				<div className="welcome">
					<span>Hi, Username!</span>
					<button className="exit" onClick={this.logout}>
						Exit
					</button>
				</div>
			</div>
		);
	}
}

export default Tracker;
