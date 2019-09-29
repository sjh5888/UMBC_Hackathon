import React from 'react'
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class HackathonCard extends React.Component{

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      
        "id" : "90099eff20b3b5b5ac415eb410d28f32",
        "groupName" : "2AM@Dennys",
        "hackathonId" : "98769d94f3bc210559c96e684fe815ff",
        "projectId" : "cc5b8e3f1a9cd932c262a8e57c1afbe1",
        "creator" : "6ed61d4b80bb0f81937b32418e98adca",
        "team" : 
        ["6ed61d4b80bb0f81937b32418e98adca",
          "93bdb73b49e88b5ce23da0509da1b8ac",
          "da41bceff97b1cf96078ffb249b3d66e",
          "35af5e85ffaa87ee99ccba513bfd3ed7"],
        "subscriptions" :
        ["6ed61d4b80bb0f81937b32418e98adca",
          "93bdb73b49e88b5ce23da0509da1b8ac",
          "da41bceff97b1cf96078ffb249b3d66e",
          "35af5e85ffaa87ee99ccba513bfd3ed7"]
      }
    }
  

  handleClick() {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed
    
    }));
    console.log(" Hackathon Clicked ")
  }

  render(props){
    return(
      <Card>
        <Card.Header as="h5">{this.props.hackathonName}</Card.Header>
        <Card.Body>
            <Card.Text>
              <p>{this.props.date}</p>
            </Card.Text>
            <Button onClick={this.handleClick}>
              Subscribe
            </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default HackathonCard