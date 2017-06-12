import React from 'react';

const MohrDescription = props => {
	return (
		<div className="info-box" tabIndex="2">
	    	<b>Plane strain</b> occurs in materials in a thick slab (plane) and the shear strain is determined by the load in the <b>x-y</b> plane. Samples with only normal strain (principal strain) do not have any shear strain.
	    	<br /><br />
	    	In this activity, you will observe the following when a strain element rotates:
	    	<ol role="list">
	    		<li role="listitem">The change in normal and shear strain components.</li>
	    		<li role="listitem">The movement of the strain state point along the Mohr circle.</li>
	    	</ol>
	    </div>
	);
}

export default MohrDescription;