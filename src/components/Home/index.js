import {Link} from 'react-router-dom'

import {Component} from 'react'
import Header from '../Header'
import RegisterContext from '../../Context/RegisterContext'

import './index.css'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {RegisterNowBtn, nameInput, activeTopic} = value
          return (
            <>
              <Header />
              {RegisterNowBtn ? (
                <div className="Home-container">
                  <h1 className="Name-heading">Hello {nameInput}</h1>
                  <h1 className="category-description">
                    Welcome to {activeTopic}
                  </h1>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="meetup-logo"
                  />
                </div>
              ) : (
                <div className="Home-container">
                  <h1 className="Home-heading">Welcome to Meetup</h1>
                  <p className="Home-description">
                    Please register for the topic
                  </p>
                  <Link to="/register">
                    <button
                      type="button"
                      className="Register-button"
                      onClick={this.onClickRegisterBtn}
                    >
                      Register
                    </button>
                  </Link>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                    className="meetup-logo"
                  />
                </div>
              )}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Home
