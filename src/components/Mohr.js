import React from 'react';
import { MohrTitle, MohrDescription, MohrAltText, MohrApp, MohrTable, MohrSlider } from "./components";

class Mohr extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}

	// methods

	render(){
		return (
			<div>
				<MohrTitle />
				<MohrDescription />
				<MohrAltText />
				<MohrApp />
				<MohrTable />
				<MohrSlider />
			</div>
		);
	}
}

export default Mohr;