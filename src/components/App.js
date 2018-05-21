import React, { Component } from 'react';
import '../css/App.css';
import Job from './Job';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
      next: null,
      error: null,
      isLoaded: false,
      items: []
    };
    
    this.updateJobs = this.updateJobs.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
  }

  componentDidMount(){
    this.callApi("https://api.seeker.company/v1/jobs");
  }

  callApi(url){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page

    const authorizationValue = "Token " + process.env.REACT_APP_SECRET;
    
    console.log(authorizationValue);
    fetch(url, {
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
    console.log(jsonResult);
    console.log(jsonResult.results[0].creation_date);
    //take a copy of the current state
    var jobsApi = {...this.state.jobs};
    // add to the order
    var jobsApi = jsonResult.results;
    //sort the results by date
    var sortedJobs = this.sortJobs(jobsApi);

    var nextPage = jsonResult.next;
    // call set state
    this.setState({ 
      jobs: jobsApi, 
      next: nextPage
    });
  }

  hasLoaded() {
    //take a copy of state
    var loaded = true;
    // call set state
    this.setState({ isLoaded: loaded });    
  }

  handleSearch(e) {
    //
    e.preventDefault();
    var pathname = window.location.pathname;
    console.log(pathname);
    //var url = "https://api.seeker.company/v1/?" + pathname;
    //console.log(url);
    //this.callApi(url);
  }

  //sort the array of Jobs by date
  sortJobs(jobsArray) {
    jobsArray.sort(function(a,b){
    var dateA = new Date(a.creation_date);
    var dateB = new Date(b.creation_date);
    return dateB > dateA ? 1 //if B is more recent, push A to the end
      : dateB < dateA ? -1 //if B is less recent than A, push A to beginning
      :0; // A and B are equal
    });
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
              Object.keys(this.state.jobs).map(key => <Job 
                key={key}
                index={key}
                details={this.state.jobs[key]}
                isLoaded={this.state.isLoaded}
                setJobId={this.props.setJobId}
                history={this.props.history}
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
