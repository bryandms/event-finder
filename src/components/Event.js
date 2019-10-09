import React from 'react'

const Event = ({ event }) => (
  <div>
    <div className="uk-card uk-card-default">
      <div className="uk-cover-container uk-height-medium">
        {event.logo && (
          <img src={event.logo.url} alt={event.name} uk-cover="true" />
        )}
      </div>

      <div className="uk-card-body">
        <h3 className="uk-card-title">{event.name.text}</h3>

        <p className="text-truncate-3">{event.description.text}</p>
      </div>

      <div className="uk-card-footer">
        <a
          href={event.url}
          rel="noopener noreferrer"
          target="_blank"
          className="uk-button uk-button-secondary"
        >
          More info
        </a>
      </div>
    </div>
  </div>
)

export default Event
