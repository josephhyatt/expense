import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
	state = {
		user: 1,
		loading: true,
	};

	render() {
		return <>Main</>;
	}
}
