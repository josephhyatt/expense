import React, { Component } from "react";
import fire from "../../config/Fire";
import "./Login.css";

class Register extends Component {
	state = {
		email: "",
		password: "",
		displayName: "",
		fireErrors: "",
	};

	// handles user state to handle user login/register change with firebase
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	// handles event when submit gets clicked on login/register form
	register = (event) => {
		event.preventDefault();
		fire
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then((user) => {
				var currentUser = fire.auth().currentUser;
				currentUser.updateProfile({
					displayName: this.state.displayName,
				});
			})
			.catch((error) => {
				this.setState({ fireErrors: error.message });
			});
	};

	render() {
		return (
			<>
				<form>
					<input
						type="text"
						className="regField"
						placeholder="Your Name"
						onChange={this.handleChange}
						value={this.state.displayName}
						name="displayName"
					/>

					<input
						type="text"
						className="regField"
						placeholder="Email"
						onChange={this.handleChange}
						value={this.state.email}
						name="email"
					/>

					<input
						type="password"
						className="regField"
						placeholder="Password"
						onChange={this.handleChange}
						value={this.state.password}
						name="password"
					/>

					<input
						onClick={this.register}
						type="submit"
						className="submitBtn"
						value="REGISTER"
						name="submit"
					/>
				</form>
			</>
		);
	}
}

export default Register;
