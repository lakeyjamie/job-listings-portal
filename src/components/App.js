import React, { Component } from 'react';
import '../css/App.css';
import Radium from 'radium';
import Loading from './Loading';
import Job from './Job';
import Header from './Header';
import Footer from './Footer';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import NoResults from './NoResults';
import HeroImage from './HeroImage';

const LINK = "http://womeninsportstech.org/fellowships/";

const styles = {
  belowTheFoldText: {
    width: '70%',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 50,
    marginTop: 50,
  },
  title: {
    maxWidth: '100vw',
    padding: '3vw',
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: '3vw'
  },
  h1: {
    lineHeight: 1,
  },
  titleText: {
    color: 'white',
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: {},
      next: null,
      previous: null,
      error: null,
      isLoaded: false,
      searchText: ""
    };

    this.updateJobs = this.updateJobs.bind(this);
    this.hasLoaded = this.hasLoaded.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    this.callApi("https://api.seeker.company/v1/jobs?page_size=50");
  }

  callApi(url){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page

    const authorizationValue = "Token " + process.env.REACT_APP_SECRET;

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
        this.updateJobs(jsonResult);
        this.hasLoaded();
    })
  }

  //runs everytime the API is called, and updates the state
  updateJobs(jsonResult){
    //take a copy of the current state
    var jobsApi = {...this.state.jobs};
    // add to the order
    var jobsApi = jsonResult.results;
    //sort the results by date
    var sortedJobs = this.sortJobs(jobsApi);

    var nextPage = jsonResult.next;
    var previousPage= jsonResult.previous;
    // call set state
    this.setState({
      jobs: jobsApi,
      next: nextPage,
      previous: previousPage
    });
  }

  hasLoaded() {
    //take a copy of state
    var loaded = true;
    // call set state
    this.setState({ isLoaded: loaded });
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

  handleNextButtonClick(url){
    console.log("handling button click");
    console.log(url);
    if (url != null) {
      this.callApi(url);
    }
  }

  handleSearch(e) {
    console.log(e.target.value);
		this.setState({
			searchText: e.target.value
    });
    var url = "https://api.seeker.company/v1/jobs?search=" +
      this.state.searchText;
    this.callApi(url);
	}

  render() {
    const { jobs, error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="container">
          <Header>
            <div style={styles.title}>
              <h1 style={[styles.h1, styles.titleText]}>
                Sports Technology Job and Summer Internship Opportunities
              </h1>
              <h4 style={[styles.h1, styles.titleText]}>
                You'll find opportunities, at all levels, in businesses that support diverse workforces, throughout the sports technology and sports innovation landscape.
              </h4>
              <SearchBar
                handleSearch={this.handleSearch}
                searchText={this.state.searchText}
              />
            </div>
          </Header>
          <main>
            <div style={[styles.belowTheFoldText]}>
              <p>The companies listed below have partnered with WiST to encourage women to apply for both full time positions as well as summer internship opportunities. We welcome and encourage college and grad students to apply for the <a href={LINK}>2019 Summer WiST Fellowship.</a></p>
              <SearchBar
                handleSearch={this.handleSearch}
                searchText={this.state.searchText}
              />
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
            <NoResults />
            <Pagination
              next={this.state.next}
              previous={this.state.previous}
              handleNextButtonClick={this.handleNextButtonClick}
            />
          </main>
          <Footer />
        </div>
      );
    }
  }
}

export default Radium(App);
