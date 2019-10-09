import React from 'react'
import Event from '../components/Event'
import { EventsConsumer } from '../context/EventsContext'

const EventList = () => (
  <div className="uk-child-width-1-3@m uk-flex uk-flex-center" uk-grid="true">
    <EventsConsumer>
      {value =>
        value.loading ? (
          <div className="uk-flex uk-flex-center">
            <div uk-spinner="ratio: 3"></div>
          </div>
        ) : (
          value.events.map(event => <Event key={event.id} event={event} />)
        )
      }
    </EventsConsumer>
  </div>
)

export default EventList
