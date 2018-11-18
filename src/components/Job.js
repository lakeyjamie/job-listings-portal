import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Job.css';
import { timeAgo } from '../helpers';

class Job extends Component {
	static propTypes = {
		details: PropTypes.shape({
			company: PropTypes.object,
			creation_date: PropTypes.date,
			end_date: PropTypes.date,
			id: PropTypes.string,
			job_application_link: PropTypes.string,
			job_description: PropTypes.string,
			job_link: PropTypes.string,
			job_location: PropTypes.string,
			job_title: PropTypes.string,
		})
	};

	constructor(props) {
		super(props);
		this.goToJob = this.goToJob.bind(this);
	}

	goToJob = (event) => {
		//1. prevent page from relaoding
		event.preventDefault();
		//event.persist;
		//2. get text from input
		//3. change page to url
		console.log(this.props.history);
		//${this.props.details.id}
		this.props.history.push("/job/1");
	}

	render() {
		const {company, creation_date, end_date, id, job_application_link, job_description, job_link, job_location, job_title} = this.props.details;
	 if (!this.props.isLoaded) {
      return <div>not loaded yet</div>;
    } else {
			return (
				<div className="job-item" onClick={this.props.setJobId}>
					<a href={job_application_link} target="_blank" rel="noopener noreferrer">
						<h5>{job_title} · {company.name}</h5>
					</a>
					<p>{job_location}</p>
					<p>{timeAgo(creation_date)}</p>
				</div>
			);
		}
	}
}

Job.propTypes = {
	index: PropTypes.string.isRequired,
	details: PropTypes.object.isRequired,
	isLoaded: PropTypes.bool.isRequired,
	setJobId: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired
}

export default Job;
