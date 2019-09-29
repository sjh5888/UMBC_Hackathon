import React from 'react'
import {
  Card,
  Button,
  Image
} from 'react-bootstrap'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import GroupCard from '../home/groupComponent/GroupCard';

class HackathonCard extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      hackathon : this.props.hackathonData
    }
    console.log(this.state.hackathon);
  }


  handleClick() {
    console.log(" Hackathon Clicked ")

  }

  // render(){
  //   return(
  //     <Card>
  //       <Card.Header as="h5">{this.state.hackathon.name}</Card.Header>
  //       <Card.Body>
  //           <Card.Text>
  //             {this.state.hackathon.date}
  //           </Card.Text>
  //           <Button onClick={this.handleClick}>
  //             View Homepage
  //           </Button>
  //       </Card.Body>
  //     </Card>
  //   )
  // }
  render() {
    return (
      <div>
        <div className="hackathonCard">
          <Image src={this.state.hackathon.pictureURL}/>
          <div>
            <a href='https://www.hackumbc.org/'>
              <h1>{this.state.hackathon.name}</h1>
            </a>
            <h3>{this.state.hackathon.date}</h3>
          </div>
        </div>
        <div className="hackathonCard">
          <h3>Current Projects</h3>
          <Button onClick={this.handleClick}>
            Create Project
          </Button>
        </div>
        {this.state.hackathon.groups.map(group => {
          return (
            <GroupCard groupId={group} />
          )
        })}
      </div>
    )
  }
}

export default HackathonCard
