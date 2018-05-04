import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';

class Router extends React.Component {

	state = {
		jobId: null
	};

	setJobId(selectedJob) {
		//take a copy of state
		var job = {...this.state.jobId};
		// add to the order
		job = selectedJob;
		// call set state
		this.setState({ jobId : job });
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route 
						exact 
						path="/" 
						render={(props) => (
							<App/>
						)} 
					/>
					<Route  
						path="/job/:jobId" 
						render={(props) => (
							<DetailPage />
						)} 
					/>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Router;
