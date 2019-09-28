import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class GroupCard extends React.Component{
  render(props){
    return(
      <Card>
        <Card.Header as="h5">{this.props.groupName}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.projectName}</Card.Title>
            <Card.Text>
              <p>{this.props.description}</p>
            </Card.Text>
            <span>
            <Link to="/login" >Click to login</Link>
            </span>
        </Card.Body>
      </Card>
    )
  }
}

export default GroupCard
