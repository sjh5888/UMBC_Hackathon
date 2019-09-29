import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class ProjectCard extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      project : this.props.projectData
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed
    
    }));
    console.log(" Subscribe clicked")
  }

  render(){
    return(
      <Card>
        <Card.Header as="h5">{this.state.group.groupName}</Card.Header>
        <Card.Body>
          <Card.Title>{this.state.group.projectName}</Card.Title>
            <Card.Text>
              {this.state.group.description}
            </Card.Text>
            <Button onClick={this.handleClick}>
              Subscribe
            </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default ProjectCard
