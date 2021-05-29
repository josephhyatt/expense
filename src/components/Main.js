import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./Main.css";
import fire from "../config/Fire";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import Tracker from "./Tracker/Tracker";

export default class Main extends Component {
	state = {
		user: 1,
		loading: true,
		formSwitcher: false,
	};

	// calls authListener to check if user is logged in or not
	componentDidMount() {
		this.authListener();
	}

	// checks to see if user has data in firebase db
	authListener() {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			} else {
				this.setState({ user: null });
			}
		});
	}

	// switch between login and register forms
	formSwitcher = (action) => {
		console.log(action);
		// if formSwitcher action (parameter) is equal to register make it true
		this.setState({
			formSwitcher: action === "register" ? true : false,
		});
	};

	render() {
		// if formSwitcher is false, assign Login, else assign Register component
		const form = !this.state.formSwitcher ? <Login /> : <Register />;

		return (
			<>
				{/* if user state is empty than show everything below */}
				{!this.state.user ? (
					<div className="mainBlock">
						{form}
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
				) : (
					//  else call Tracker component
					<Tracker />
				)}
			</>
		);
	}
}
