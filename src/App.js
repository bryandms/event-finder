import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import EventList from './components/EventList'

import CategoriesProvider from './context/CategoriesContext'
import EventsProvider from './context/EventsContext'

function App () {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header />

        <div className="uk-container">
          <Form />

          <EventList />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  )
}

export default App
