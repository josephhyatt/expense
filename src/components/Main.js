import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";
import Login from "./Forms/Login";
import Register from "./Forms/Register";

export default class Main extends Component {
	state = {
		user: 1,
		loading: true,
		formSwitcher: false,
	};

	// switch between login and register forms
	formSwitcher = (action) => {
		console.log(action);
		// if formSwitcher action (parameter) is equal to register make it true
		this.setState({
			formSwitcher: action === "register" ? true : false,
		});
	};

	render() {
		return (
			<>
				<div className="mainBlock">
					<Login />
					{/* If formSwitcher is false show "Not Registered Login Form */}
					{!this.state.formSwitcher ? (
						<span className="underline">
							Not Registered?{" "}
							<button
								// if formSwitcher is false send parameter false otherwise login
								onClick={() =>
									this.formSwitcher(
										!this.state.formSwitcher ? "register" : "login"
									)
								}
								className="linkBtn"
							>
								Create a user account
							</button>
						</span>
					) : (
						<span className="underline">
							Have an Account?{" "}
							<button
								// if formSwitcher is false send parameter false otherwise login
								onClick={() =>
									this.formSwitcher(
										!this.state.formSwitcher ? "register" : "login"
									)
								}
								className="linkBtn"
							>
								Sign in here
							</button>
						</span>
					)}
				</div>
			</>
		);
	}
}
