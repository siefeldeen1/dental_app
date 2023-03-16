import React,{useState,useCallback,useMemo} from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import './Calender.css'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from'react-big-calendar/lib/addons/dragAndDrop'
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'


function Calender_view() {

  const DragAndDropCalendar = withDragAndDrop(Calendar)
    const localizer = momentLocalizer(moment)

    const [myEvents, setMyEvents] = useState(events)

    const moveEvent = useCallback(
      ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
        const { allDay } = event
        if (!allDay && droppedOnAllDaySlot) {
          event.allDay = true
        }
  
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          const filtered = prev.filter((ev) => ev.id !== event.id)
          return [...filtered, { ...existing, start, end, allDay }]
        })
      },
      [setMyEvents]
    )
  
    const resizeEvent = useCallback(
      ({ event, start, end }) => {
        setMyEvents((prev) => {
          const existing = prev.find((ev) => ev.id === event.id) ?? {}
          const filtered = prev.filter((ev) => ev.id !== event.id)
          return [...filtered, { ...existing, start, end }]
        })
      },
      [setMyEvents]
    )
    const defaultDate = useMemo(() => new Date(2023, 3, 12), [])
  return (
    <div style={{width:"98%",margin:"0 auto",paddingBottom:"20px"}}>
        {/* <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin ]}
        
            initialView="dayGridMonth"
            weekends={false}
            events={[
                { title: 'event 1', date: '2019-04-01' },
                { title: 'event 2', date: '2019-04-02' }
            ]}
        /> */}
  <Calendar

      localizer={localizer}
      // events={events}
      // startAccessor="start"
      // endAccessor="end"
      style={{ height: 500 }}
      onShowMore={(events, date) => this.setState({ showModal: true, events })}
      events={myEvents}
      onEventDrop={moveEvent}
      onEventResize={resizeEvent}
      popup
      resizable
    />
    </div>
  )
  DragAndDrop.propTypes = {
    localizer: PropTypes.instanceOf(momentLocalizer),
  }
}

export default Calender_view