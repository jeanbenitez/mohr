import React from 'react';

const MohrAltText = props => {
	return (
		<div className="alt-text">
			<div tabIndex="3">The interaction shows a slider that controls the amount of strain in a plane. As the slider moves to the right, the normal strain block is deformed from a square to rectangle and tilted to the left. As theta increases, Mohr’s circle for strain changes the location of A and the radius stays the same and moves into the positive x-y quadrant. As theta changes, the location of the radius changes along the circumference of the circle.</div>
			<div tabIndex="4">Epsilon 2,0. Epsilon Average. Epsilon 1,0. Epsilon axis is 10 superscript negative 6. R. A.</div>
			<div id="readable" role="alert" aria-live="assertive" aria-atomic="true" tabIndex="5">theta is 0.00. The line R is at coordinates 250,
			-60.</div>
			<div tabIndex="6">Epsilon average equals 250 plus negative 150 divided by 2, times 10 to the negative 6th this equals 50 times 10 to the negative 6th. R equals the quantity of the square root of (250 minus 50) squared plus 60 squared, is multiplied by 10 to the negative 6th, this equals 208.8 times 10 to the negative 6th. epsilon 1 equals (50 plus 208.8), times 10 to the negative 6th this equals 259 times 10 to the negative 6th. epsilon 2 equals (50 minus 208.8), times 10 to the negative 6th this equals negative 159 times 10 to the negative 6th. tangent 2 theta sub p 1 equals 60 divided by the quantity (250 minus 50). theta sub p 1 equals 8.35 degrees</div>
		</div>
	);
}

export default MohrAltText;