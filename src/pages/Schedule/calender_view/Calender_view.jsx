import React,{useState,useCallback,useMemo} from 'react'
import './Calender.css'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'

import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import localizer from "react-big-calendar/lib/localizers/globalize";
// import globalize from "globalize";
// import 'react-big-calendar/lib/addons/dragAndDrop/backgroundWrapper.js'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import Button from '../../../compounts/button/Button';
import Appointment_popup from '../../../compounts/popups/Appointment_popup';
import Edit_comp from './edit_comp/Edit_comp';

const DragAndDropCalendar = withDragAndDrop(Calendar);


export default class Dnd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isloaded:false,
      edit:false,
      data:{},
    };
    
    this.moveEvent = this.moveEvent.bind(this);
   
  }

 


  componentDidMount() {
    let arr =[]
fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint`,{
  method:"get",
  headers:{
    clinic_id:localStorage.getItem("clinic_id"),
    clinic_name: localStorage.getItem("clinic_name")
  }
}).then((res)=>res.json())
.then((data)=> {
  data.forEach(e => {
console.log("start",e["start"]);
    const obj = {
      id: e["id"],
      title: e["title"],
      start: new Date(e["start"]),
      end: new Date(e["end"]),
      desc: e["descr"]
    }

    arr.push({
      id: e["id"],
      title: e["title"],
      start: new Date(e["start"]),
      end: new Date(e["end"]),
      // start: new Date(e["start"]),
      // end: new Date(e["end"]),
      desc: e["descr"]
    })
   
  
  })


  this.setState({events:arr})

  console.log("events",this.state.events)
}
)
  }


 
  moveEvent({ event, start, end }) {
    const r = window.confirm("Would you like to save changes?")
    if(r === true){
      const { events } = this.state;
    

      const idx = events.indexOf(event);
      const updatedEvent = { ...event, start, end };
      
      const nextEvents = [...events];
      nextEvents.splice(idx, 1, updatedEvent);
  
        // console.log("start-end",updatedEvent.id);
        fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint`,{
          method:"PUT",
          headers:{"content-type":"application/json"},
          body:JSON.stringify({
            start:start,
            end:end,
            id:updatedEvent.id,
            clinic_id:localStorage.getItem("clinic_id"),
            clinic_name:localStorage.getItem("clinic_name")
          })
        }).then((res)=>res.json())
        .then((data)=>console.log(data))
  
      this.setState({
        events: nextEvents
      });
    }

  }

  resizeEvent = ({ event, start, end }) => {
    setTimeout(() => {
      const r = window.confirm("Would you like to save changes?")
      if(r === true){
      const { events } = this.state;
     
      const nextEvents = events.map(existingEvent => {
        return existingEvent.id === event.id
          ? { ...existingEvent, start, end }
          : existingEvent;
      });
  
        // console.log("nextEvents",event.id,start,end);
  
      fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({
          start:start,
          end:end,
          id:event.id,
          clinic_id:localStorage.getItem("clinic_id"),
          clinic_name:localStorage.getItem("clinic_name")
        })
      }).then((res)=>res.json())
      .then((data)=>console.log(data))
  
      this.setState({
        events: nextEvents
      });
     };
    }, 0);
   
  }
  
  onSelectEvent(pEvent) {
    // const r = window.confirm("Would you like to remove this event?")
    // if(r === true){
      
      this.setState((prevState, props) => {
        const events = [...prevState.events]
        const idx = events.indexOf(pEvent)
      
        // console.log("delete",pEvent.id,pEvent.title);
        fetch(`${import.meta.env.VITE_BACKEND_API}/dates_appoint_info`,{
          method:"get",
          headers:{
            title:pEvent.title,
            id:pEvent.id,
            clinic_id:localStorage.getItem("clinic_id"),
            clinic_name:localStorage.getItem("clinic_name")
          }
        }).then((res)=>res.json())
        .then((data)=>{
          this.setState({edit:true})
          console.log("data_ladsssssa",data)
          this.setState({data:data})
        })
        // events.splice(idx, 1);
        // return { events };
      });
    // }
  }

  render() {
    const localizer = momentLocalizer(moment)
    console.log("event2",this.state.events);
    return (
      <>
      {this.state.edit&&
          <Edit_comp data={this.state.data} onclick2={()=>{ this.setState({edit:false})}} onclick={()=>{ this.setState({edit:false});location.reload() }} />
      }
       {this.state.isloaded&&
                  <Appointment_popup onclick={()=>{ this.setState({isloaded:false}) }} />
                  }
         <div className='add_appoint'> <Button onclick={()=>{ this.setState({isloaded:true}) }} text={"Add new appointment"}/> </div>
      <div className="calendar-container">
        <DragAndDropCalendar
          style={{ height: 600 }}
          selectable
          scrollToTime={moment()
            .set({ h: 10, m: 0 })
            .toDate()}
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.moveEvent}
          resizable={true}
          onEventResize={this.resizeEvent}
          onSelectEvent   = {event => this.onSelectEvent(event)}
          // defaultView={"week"}
          // defaultDate={new Date(2023, 3, 12)}
        />
      </div>
      </>
    );
  }
}
// ReactDOM.render(<Dnd />, document.getElementById("root"));





// function Calender_view() {


//     const localizer = momentLocalizer(moment)

//     const [myEvents, setMyEvents] = useState(events)

//     const moveEvent = useCallback(
//       ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
//         const { allDay } = event
//         if (!allDay && droppedOnAllDaySlot) {
//           event.allDay = true
//         }
  
//         setMyEvents((prev) => {
//           const existing = prev.find((ev) => ev.id === event.id) ?? {}
//           const filtered = prev.filter((ev) => ev.id !== event.id)
//           return [...filtered, { ...existing, start, end, allDay }]
//         })
//       },
//       [setMyEvents]
//     )
  
//     const resizeEvent = useCallback(
//       ({ event, start, end }) => {
//         setMyEvents((prev) => {
//           const existing = prev.find((ev) => ev.id === event.id) ?? {}
//           const filtered = prev.filter((ev) => ev.id !== event.id)
//           return [...filtered, { ...existing, start, end }]
//         })
//       },
//       [setMyEvents]
//     )
//     const defaultDate = useMemo(() => new Date(2023, 3, 12), [])
//   return (
//     <div style={{width:"98%",margin:"0 auto",paddingBottom:"20px"}}>
//         {/* <FullCalendar
//             plugins={[ dayGridPlugin, interactionPlugin ]}
        
//             initialView="dayGridMonth"
//             weekends={false}
//             events={[
//                 { title: 'event 1', date: '2019-04-01' },
//                 { title: 'event 2', date: '2019-04-02' }
//             ]}
//         /> */}
//   <Calendar

//       localizer={localizer}
//       // events={events}
//       // startAccessor="start"
//       // endAccessor="end"
//       style={{ height: 500 }}
//       onShowMore={(events, date) => this.setState({ showModal: true, events })}
//       events={myEvents}
//       onEventDrop={moveEvent}
//       onEventResize={resizeEvent}
//       popup
//       resizable
//     />
//     </div>
//   )
//   DragAndDrop.propTypes = {
//     localizer: PropTypes.instanceOf(momentLocalizer),
//   }
// }

// export default Calender_view