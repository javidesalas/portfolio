import React from 'react';
import { Link } from 'react-router-dom'
import useHomepage from '../../shared/useHomepage';

import Intro from './Intro'

const Index = () => {
	const content = useHomepage()
	console.log(content)
    return (
		<div>
			{content&&
				<Intro {...content} />
			}
			</div>
		);
};

export default Index;