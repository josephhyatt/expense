import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";
import Login from "./Forms/Login";
import Register from "./Forms/Register";

export default class Main extends Component {
	state = {
		user: 1,
		loading: true,
	};

	render() {
		return (
			<>
				<div className="mainBlock">
					<Login />
					<span className="underline">
						Not Registered?{" "}
						<button className="linkBtn">Create a user account</button>
					</span>
				</div>
			</>
		);
	}
}
