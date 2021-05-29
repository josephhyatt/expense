import React, { Component } from "react";
import "./Login.css";
import fire from "../../config/Fire";

class Login extends Component {
	state = {
		email: "",
		password: "",
		fireErrors: "",
	};

	// waits for event to happen
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	// creating login state, and catch errors
	login = (event) => {
		event.preventDefault();
		fire
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.catch((error) => {
				this.setState({ fireErrors: error.message });
			});
	};

	render() {
		// looks out for errors and displays them to user
		let errorNotification = this.state.fireErrors ? (
			<div className="Error"> {this.state.fireErrors} </div>
		) : null;
		return (
			<>
				{errorNotification}
				<form>
					<input
						type="text"
						className="regField"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
						name="email"
					/>

					<input
						type="password"
						className="regField"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						name="password"
					/>

					<input
						onClick={this.login}
						type="submit"
						className="submitBtn"
						value="ENTER"
						name="submit"
					/>
				</form>
			</>
		);
	}
}

export default Login;
