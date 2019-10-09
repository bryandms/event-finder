import React, { Component } from 'react'
import axios from 'axios'

const EventsContext = React.createContext()
export const EventsConsumer = EventsContext.Consumer

class EventsProvider extends Component {
  token = process.env.REACT_APP_API_KEY
  order = 'date'

  state = {
    events: [],
    loading: false
  }

  getEvents = async search => {
    this.setState({ loading: true })
    const URL = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.order}&token=${this.token}`

    axios
      .get(URL)
      .then(resp => this.setState({ events: resp.data.events, loading: false }))
  }

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents,
          loading: this.state.loading
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    )
  }
}

export default EventsProvider
