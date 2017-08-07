import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './calendar.css';

BigCalendar.momentLocalizer(moment);

	// function to setup the layout of the events on the calendar
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

	// function to setup the layout of the agenda tab on the calendar
	function EventAgenda({event}) {
		return <span>
		<em>{event.title}</em>
		<p>{event.desc}</p>
		</span>
	}

// map function of calendar 
let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);

// calendar component
class Calendar extends React.Component {
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
			/>	
		)
	}
}


export default Calendar;