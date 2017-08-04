import React from 'react';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import helpers from '../utils/helpers';

BigCalendar.momentLocalizer(moment);

	function Event ( {event} ) {
		return (
			<span>
			<strong>
			{event.title}
			</strong>
			{ event.desc && (': ' + event.desc)}
			</span>
			)
	}

	function EventAgenda({event}) {
		return <span>
		<em>{event.title}</em>
		<p>{event.desc}</p>
		</span>
	}

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class Calendar extends React.Component {
	constructor () {
		super()


		

	// this.componentDidMount = this.componentDidMount.bind(this)

	} // ends constructor

	render() {
		console.log("this.state.events: ")
		console.log(this.props.events)
		console.log("events: ")
		return(
			
			<BigCalendar
				{...this.props}
				popup
				events={this.props.events}
				views={allViews}
				components={{
					event: Event,
					agenda: {
						event: EventAgenda
					} 
				}}
				// startAccessor='startDate'
      	// endAccessor='endDate'
				// defaultDate={new Date(2017, 3, 1)}
			/>
			
		)
	}



}


// let Calendar = React.createClass({
// 	render(){
// 		return(
// 			<BigCalendar
// 				{...this.props}
// 				events={events}
// 				views={allViews}
// 				// startAccessor='startDate'
//       	// endAccessor='endDate'
// 				// defaultDate={new Date(2017, 3, 1)}
// 			/>
// 		)
// 	}
// })

export default Calendar;