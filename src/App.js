import Main from "./components/Main";
import React from "react";
import "./App.css";
import Particles from "react-particles-js";

function App() {
	return (
		<div>
			<Main />
			<Particles
				id="particless"
				params={{
					particles: {
						number: {
							value: 200,
							density: {
								enable: true,
								value_area: 1500,
							},
						},
					},
				}}
			/>
		</div>
	);
}

export default App;
