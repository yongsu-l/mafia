import React, {Component} from 'react'
import Logo from '../Components/logo'
import {connect} from 'react-redux'
import {setMessage} from '../Actions/message'
import {Link} from 'react-router-dom'
import {HomeContainer,Buttons} from '../Styles/Home/HomeContainer'
import {Links} from '../Styles/globalStyle'
import Grid from 'material-ui/Grid';

 class Home extends Component {
    _onChange = (value) => {
      this.props.dispatch(setMessage(value))
    }

    render () {
      const {message} = this.props.messageReducer;
      return (

        <HomeContainer>
          <Logo/>

          <Grid container spacing={2} direction='row' justify='center' alignItems='center'>
            <Grid item xs>
            </Grid>

            <Grid item xs>
            </Grid>
            <Grid item xs>
              <Links to="/about">
                <Buttons color="primary" raised>Yerr</Buttons>
              </Links>
            </Grid>

            <Grid item xs>
              <Links to="/about">
                <Buttons color="primary" raised>Yerr2</Buttons>
              </Links>
            </Grid>
            <Grid item xs>
            </Grid>

            <Grid item xs>
            </Grid>

          </Grid>

        </HomeContainer>

      )
    }
}

export default connect(state => state)(Home);
