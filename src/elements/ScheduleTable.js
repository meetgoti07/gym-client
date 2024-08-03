
import React, {Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin  from "@fullcalendar/interaction";
import Alert from "sweetalert2";
import axios from "axios";

class ScheduleTable extends Component {
    state = {
        calendarEvents: [
            // { title: "Event 1", start: "2024-04-03T10:00:00", end: "2024-04-03T10:00:00", extra: "2024-04-28T10:11:00" },
            // { title: "Event 2", start: "2024-04-19T14:00:00", end: "2024-04-19T14:00:00", extra: "2024-04-28T10:11:00" }
        ],
        draggableInitialized: false
    };

    componentDidMount() {
        this.fetchEvents();
    }
    fetchEvents = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/events`);
            this.setState({ calendarEvents: response.data });
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };


    formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    }

    saveEventToServer = async (updatedEvent) => {
        try {
            const response = await axios.post(` ${process.env.REACT_APP_BACKEND_URL}/api/saveEvent`, updatedEvent);
            console.log('Event saved successfully:', response.data);
            this.fetchEvents();

        } catch (error) {
            console.error('Error saving event:', error);
        }
    };

    eventClick = (eventClick) => {
        Alert.fire({
            title: eventClick.title,
            html: `
            <div class="table-responsive">
               <table class="table">
                  <tbody>
                     <tr>
                        <td>Title</td>
                        <td><input type="text" value="${eventClick.title}" class="form-control" id="editTitle"></td>
                     </tr>
                     <tr>
                        <td>Start Time</td>
                        <td><input type="datetime-local" value="${eventClick.startStr}" class="form-control" id="editStartTime"></td>
                     </tr>
                     <tr>
                        <td>End Time</td>
                        <td><input type="datetime-local" value="${eventClick.endStr}" class="form-control" id="editEndTime"></td> <!-- Update end time to start time -->
                     </tr>
                  </tbody>
               </table>
            </div>`,
            showCancelButton: true,
            confirmButtonClass: "btn btn-danger",
            cancelButtonClass: "btn btn-primary",
            confirmButtonText: "Save Changes",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.value) {
                const updatedEvent = {
                    title: document.getElementById("editTitle").value,
                    start: document.getElementById("editStartTime").value,
                    end: document.getElementById("editStartTime").value,
                    extra: document.getElementById("editEndTime").value
                };

                this.saveEventToServer(updatedEvent);


                // const updatedEvent = {
                //     title: document.getElementById("editTitle").value,
                //     start: document.getElementById("editStartTime").value,
                //     end: document.getElementById("editStartTime").value,
                //     extra: document.getElementById("editEndTime").value
                // };

                // // Append the updated event to the calendarEvents array
                // const updatedEvents = [...this.state.calendarEvents, updatedEvent];

                // // Update the state with the new events array
                // this.setState({ calendarEvents: updatedEvents });
                // console.log(this.state.calendarEvents);

            }
        });
    };


    render() {

        return (
            <div className="animated fadeIn demo-app">
                <Row>

                    <Col lg={12}>
                        <Card>
                            <Card.Body>
                                <div className="demo-app-calendar" id="mycalendartest">
                                    <FullCalendar
                                        eventBackgroundColor="#322C2B"
                                        eventBorderColor="#322C2B"
                                        
                                        defaultView="dayGridMonth"
                                        headerToolbar={{
                                            start: "prev,next today",
                                            center: "title",
                                            end: "dayGridMonth,timeGridWeek,timeGridDay",
                                        }}
                                        rerenderDelay={10}
                                        
                                        // eventDurationEditable={false} // Ensure each event occupies only one day
                                        // editable={true}
                                        // droppable={true}
                                        plugins={[
                                            dayGridPlugin,
                                            timeGridPlugin,
                                            interactionPlugin,
                                        ]}
                                        events={this.state.calendarEvents.map(event => ({
                                            ...event,
                                            allDay: false,
                                        }))}
                                        // eventClick={this.eventClick}
                                        // displayEventTime={true}
                                        eventDurationEditable={false}
                                        eventDisplay="block"
                                        eventContent={(arg) => {
                                            const start = new Date(arg.event.startStr);
                                            const extra = arg.event.extendedProps.extra;
                                            var st = arg.event.startStr;
                                            st = st.slice(0, -9);

                                            if (extra) {
                                                const end = new Date(extra);
                                                if (!isNaN(end.getTime())) {
                                                    const startTime = this.formatTime(start);
                                                    const endDate = end.toLocaleDateString();
                                                    const parts1 = start.toLocaleDateString().split("/");
                                                    let newStart=`${parts1[0]}/${parts1[1]}/`;
                                                    const parts2 = endDate.split("/");
                                                    let newEnd=`${parts2[0]}/${parts2[1]}/`;
                                                    if (parts1[2] && parts2[2] && parts1[2].length === 4 && parts2[2].length === 4) {
                                                        newStart+=`${parts1[2].substring(2,4)}`;
                                                        newEnd+=`${parts2[2].substring(2,4)}`;
                                                    }                                  
                                                    return (
                                                        <div className="event-content">
                                                            <div className="event-title">{arg.event.title}</div>
                                                            <div className="event-details">
                                                                {/* <div className="event-detail"> */}
                                                                <strong>Time: {startTime}<br /></strong>
                                                                {/* </div> */}
                                                            </div>
                                                           
                                                        </div>
                                                    );
                                                
                                                } else {
                                                    console.error("Invalid end date:", extra);
                                                }
                                            } else {
                                                console.error("No extra property found for the event:", arg.event.title);
                                            }

                                            return null;
                                        }}

                                    />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ScheduleTable;
