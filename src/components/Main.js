import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";
import Login from "./Forms/Login";

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
				</div>
			</>
		);
	}
}
