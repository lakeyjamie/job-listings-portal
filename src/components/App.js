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
  }

  callApi(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page

    const authorizationValue = "Token " + process.env.REACT_APP_SECRET;
    
    console.log(authorizationValue);
    fetch('https://api.seeker.company/v1/jobs', {
      method: 'GET',
      headers: new Headers({
        'Authorization': authorizationValue, 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
            <div className="title">
              <h1>Sports Technology Job Opportunities</h1>
              <h4>You'll find opportunities, at all levels, in all businesses, throughout the sports technology and sports innovation landscape.</h4>
            </div>
            {
              Object.keys(this.state.jobs.results).map(key => <Job 
                key={key}
                index={key}
                details={this.state.jobs.results[key]}
                isLoaded={this.state.isLoaded}
                setJobId={this.props.setJobId}
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
