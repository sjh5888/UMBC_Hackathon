import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class GroupCard extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      userId : "6ed61d4b80bb0f81937b32418e98adca",
      isSubscribed: false
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed
    
    }));
    console.log(" Subscribe clicked")
  }

  render(props){
    return(
      <Card>
        <Card.Header as="h5">{this.props.groupName}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.projectName}</Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
            </Card.Text>
            <Button onClick={this.handleClick}>
              Subscribe
            </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default GroupCard
