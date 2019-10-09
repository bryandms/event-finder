import React, { Component } from 'react'
import axios from 'axios'

const CategoriesContext = React.createContext()

export const CategoriesConsumer = CategoriesContext.Consumer

class CategoriesProvider extends Component {
  token = process.env.REACT_APP_API_KEY

  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories = async () => {
    const URL = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`

    axios
      .get(URL)
      .then(resp => this.setState({ categories: resp.data.categories }))
  }

  render() {
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    )
  }
}

export default CategoriesProvider
