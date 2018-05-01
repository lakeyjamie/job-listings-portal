import React, { Component } from 'react';
import '../css/App.css';
import Job from './Job';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
      error: null,
      isLoaded: false,
      items: []
    };
    
    this.updateJobs = this.updateJobs.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
  }

  componentDidMount(){
    this.callApi();
    console.log('done calling API');
    //console.log(this.state.jobs.results[0]);
  }

  callApi(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    fetch('https://api.seeker.company/v1/jobs', {
      method: 'GET',
      headers: new Headers({
        'Authorization': 'Token 9fc3c846-f1ca-4f40-9659-9905469caae9', 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Host': 'https://api.seeker.company',
        'Access-Control-Request-Method': 'GET',
        'Access-Control-Allow-Origin':true
        })
      }
    )
      .then((result) => {
        // Get the result
        // If we want text, call result.text()
        return result.json();
      })
      .then((jsonResult) => {
        // Do something with the result
        //console.log(jsonResult);
        this.updateJobs(jsonResult);
        this.hasLoaded();
    })
  }

  updateJobs(jsonResult){
    //take a copy of state
    var jobsApi = {...this.state.jobs};
    // add to the order
    jobsApi = jsonResult;
    // call set state
    this.setState({ jobs: jobsApi });
    console.log(this.state.jobs.results[0]);
  }

  hasLoaded() {
    //take a copy of state
    var loaded = true;
    // call set state
    this.setState({ isLoaded: loaded });    
  }

  render() {
    const { jobs, error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>...</div>;
    } else {
      return (
        <div className="container">
          <Header />
          <main>
            <h1>Job Postings in Sports Tech</h1>
            <h4>You'll find opportunities, at all levels, in all businesses, throughout the sports technology and sports innovation landscape.</h4>
            <p>Brought to you by <a href="http://womeninsportstech.org/" target="_blank" rel="noopener noreferrer">Women In Sports Tech</a> and <a href="https://www.sporttechie.com/" target="_blank" rel="noopener noreferrer">SportTechie</a>.</p>
            {
              Object.keys(this.state.jobs.results).map(key => <Job 
                key={key}
                index={key}
                details={this.state.jobs.results[key]}
                isLoaded={this.state.isLoaded}
              /> )
            }
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default App;
