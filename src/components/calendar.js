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

		this.state = {
			events: []
		}

	// this.componentDidMount = this.componentDidMount.bind(this)

	} // ends constructor

	componentDidMount() {
		console.log("Made it to CDM");
		helpers.getEvents(this.props.currentGroup)
			.then(response => {
				console.log("made it to get events response");
				console.log(response.data);
				
				let eventsArray = response.data.events;

				let newStateArray =[];

				eventsArray.forEach((event, index) => {
					console.log("index: " + index)
					console.log("the Event")
					console.log(event)
					var endDate = new Date(event.end)
					var startDate = new Date(event.start)
					var newEventObject = {
						end: endDate,
						start: startDate,
						title: event.title,
						desc: event.desc
					}

					console.log("New Object")
					console.log(newEventObject)

					newStateArray.push(newEventObject)

				// debugger
				console.log(newEventObject.end instanceof Date)
				})

				console.log("newStateArray")
				console.log(newStateArray)




				console.log(eventsArray)
				this.setState({
					events: newStateArray
				})


				// eventsArray.forEach(event => {
				// 	this.setState({
				// 		events: event
				// 	})

				// })
			})

	}// ends compnetDidMount


	render() {
		console.log("this.state.events: ")
		console.log(this.state.events)
		console.log("events: ")
		return(
			
			<BigCalendar
				{...this.props}
				popup
				events={this.state.events}
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