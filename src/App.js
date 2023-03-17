import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './Context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    nameInput: '',
    activeTopic: '',
    RegisterNowBtn: false,
    showErrorMsg: false,
  }

  onChangeName = name => {
    this.setState({nameInput: name})
  }

  onSelectTopic = Topic => {
    this.setState({activeTopic: Topic})
  }

  onRegisterNow = () => this.setState({RegisterNowBtn: true})

  onShowErrorMsg = () => this.setState({showErrorMsg: true})

  render() {
    const {nameInput, activeTopic, RegisterNowBtn, showErrorMsg} = this.state
    console.log(nameInput)
    console.log('activeTopic is', activeTopic)
    console.log(RegisterNowBtn)
    console.log(showErrorMsg)
    return (
      <RegisterContext.Provider
        value={{
          nameInput,
          activeTopic,
          RegisterNowBtn,
          showErrorMsg,
          onRegisterNow: this.onRegisterNow,
          onChangeName: this.onChangeName,
          onSelectTopic: this.onSelectTopic,
          onShowErrorMsg: this.onShowErrorMsg,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
