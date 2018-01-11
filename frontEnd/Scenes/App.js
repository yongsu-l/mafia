import React, {Component} from 'react'
import InputPreview from '../Components/InputPreview'
import {connect} from 'react-redux'
import {setMessage} from '../Actions/message'
import {Link} from 'react-router-dom'

 class App extends Component {
    render () {
      return (
        <div>
            You are in app
        </div>
      )
    }
}

export default connect(state => state)(App);
