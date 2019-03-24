import React from 'react';

import './Scroller.css';

const Scroller = (props) => {
	return(

		<div className='scroll'>
			{props.children}
		</div>

		);
}

export default Scroller;