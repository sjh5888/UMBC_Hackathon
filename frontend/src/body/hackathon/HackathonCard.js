import React from 'react'
import {Card, Button} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class HackathonCard extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      hackathon : this.props.hackathonData
    }
  }
  

  handleClick() {
    window.location.replace('https://www.hackumbc.org/')
    console.log(" Hackathon Clicked ")
  }

  render(){
    return(
      <Card>
        <Card.Header as="h5">{this.state.hackathon.name}</Card.Header>
        <Card.Body>
            <Card.Text>
              {this.state.hackathon.date}
            </Card.Text>
            <Button onClick={this.handleClick}>
              View Homepage
            </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HackathonCard