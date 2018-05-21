import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';

class Router extends React.Component {

	state = {
		jobId: null
	};

	constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.setJobId = this.setJobId.bind(this);
  }

	setJobId(selectedJob) {
		//take a copy of state
		var job = {...this.state.jobId};
		// add to the order
		// call set state
		job = selectedJob;
		this.setState({ jobId : job });

				//event.preventDefault();
		//event.persist;
		//2. get text from input
		//3. change page to url
		console.log(this.props.history);
		//${this.props.details.id}
		this.props.history.push("/job/1");
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route 
						exact 
						path="/" 
						render={(props) => (
							<App
								{...props}
								setJobId={this.setJobId}
							/>
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
