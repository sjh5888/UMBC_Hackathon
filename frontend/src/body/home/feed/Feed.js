import React from 'react';

import GroupFeed from './GroupFeed';
import UserFeed from './UserFeed';

import './style.css';

class Feed extends React.Component {
  constructor() {
    super();

    this.state = {
      feedSwitch: 0,
      listOfUsers: null,
      slug: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/User")
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({
          listOfUsers: data
        })
      })


    fetch("http://localhost:8080/api/Group")
      .then(resp => resp.json())
      .then(data => {
        console.log(data)

        const slugData = {
          group: data
        }

        data.map(val => {
          fetch("http:///localhost:8080/api/Projects/" + val.projectId)
            .then(resp => resp.json())
            .then(pumpkin => {

              slugData.project = pumpkin

              this.setState(state => {
                slug: state.slug.push(slugData)
              })
            })
        })
      })
  }

  render() {
    return (
      <div>

        <div>
        {(this.state.feedSwitch === 0) ?
          <GroupFeed slug={this.state.slug} />
        :
          <div>
            fdsafdsa
          </div>
        }
        </div>
      </div>
    )
  }
}

export default Feed;
