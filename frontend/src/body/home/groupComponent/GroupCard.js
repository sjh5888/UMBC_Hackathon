import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

class GroupCard extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)

    const temp = props

    this.state = {
      props: props,
      group : null,
      project: null
    }
  }

  componentDidMount() {
    console.log("http://localhost:8080/api/Group/" + this.state.props.groupId)

    fetch("http://localhost:8080/api/Group/" + this.state.props.groupId)
      .then(resp => resp.json())
      .then(data => {
        console.log('--------------------')
        console.log(data);
        console.log('--------------------')
        this.setState({
          group: data
        });

        const projectId = data.projectId

        fetch("http://localhost:8080/api/Projects/" + projectId)
          .then(resp => resp.json())
          .then(data => {
            console.log('--------------------')
            console.log(data)
            console.log('--------------------')
            this.setState({
              project: data
            })
          })
      })
  }

  handleClick() {
    console.log(" Subscribe clicked");

    const uid = document.cookie.split(";")[0];
    console.log(uid);

    axios.put(
      "http://localhost:8080/api/Group/update/" + this.state.props.groupId,
      {
        userId: uid,
        sub: false
      }
    )
  }

  render(){
    return(
      <div>
      {this.state.project == null ?
        (
          <div>
            &nbsp;
          </div>
        )
        :
        (
        <Card>
          <Card.Body>
            <Card.Title>{this.state.project.title}</Card.Title>
              <Card.Text>
                {this.state.project.description}
              </Card.Text>
              <Button onClick={this.handleClick}>
                Subscribe
              </Button>
          </Card.Body>
        </Card>
        )
      }
      </div>
    )
  }
}

export default GroupCard
