import React ,{useState} from 'react';
import { Switch, Route } from 'react-router-dom'
import './scss/app-dark.scss'

import Layout from './components/layout/Layout'
import Index from './components/pages/index/index'
import About from './components/pages/about/About'


const App = () => {

  return (
		<Layout>
			<Switch>
			  <Route path="/" exact render={() => <Index />} />
				<Route path="/about" render={() => <About />} />
			</Switch>
		</Layout>
	);
};

export default App;