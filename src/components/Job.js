import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Job.css';
import { formatDaysAgo } from '../helpers';

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
	}

	render() {
		const {company, creation_date, end_date, id, job_application_link, job_description, job_link, job_location, job_title} = this.props.details;
	 if (!this.props.isLoaded) {
      return <div>not loaded yet</div>;
    } else {
    	//console.log('going to render a job');
    	//console.log(this.props.details);
			return (
				<div className="job-item">
					<a href={job_application_link} target="_blank">
						<h5>{job_title} · {company.name}</h5>
					</a>
					<p>{job_location}</p>
					<p>{formatDaysAgo(creation_date)} days ago</p>
				</div>
			);
		}
	}
}

export default Job;