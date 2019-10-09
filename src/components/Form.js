import React, { Component } from 'react'
import { CategoriesConsumer } from '../context/CategoriesContext'
import { EventsConsumer } from '../context/EventsContext'

class Form extends Component {
  state = {
    name: '',
    category: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <EventsConsumer>
        {value => (
          <form
            onSubmit={e => {
              e.preventDefault()
              value.getEvents(this.state)
            }}
          >
            <fieldset className="uk-fieldset uk-margin">
              <legend className="uk-legend uk-text-center">
                Search for an event by name or category
              </legend>
            </fieldset>

            <div className="uk-column-1-3@m uk-margin">
              <div className="uk-margin">
                <input
                  name="name"
                  className="uk-input"
                  type="text"
                  placeholder="Event or city name"
                  onChange={this.handleChange}
                />
              </div>

              <div className="uk-margin">
                <select
                  name="category"
                  className="uk-select"
                  type="text"
                  placeholder="Event or city name"
                  onChange={this.handleChange}
                >
                  <option value="">Select an option</option>
                  <CategoriesConsumer>
                    {value =>
                      value.categories.map(category => (
                        <option
                          key={category.id}
                          value={category.id}
                          data-uk-form-select
                        >
                          {category.name_localized}
                        </option>
                      ))
                    }
                  </CategoriesConsumer>
                </select>
              </div>

              <div className="uk-margin">
                <input
                  type="submit"
                  className="uk-button uk-button-primary uk-width-1-1"
                  value="Search events"
                />
              </div>
            </div>
          </form>
        )}
      </EventsConsumer>
    )
  }
}

export default Form
