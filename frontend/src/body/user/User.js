import React from 'react';

import UserDisplay from './UserDisplay';

class User extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params;

    console.log(handle);

    fetch('http://localhost:8080/api/User')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        // data.map(u => {
        //   console.log(u.id);
        //   console.log(handle);
        //   if(u.id === handle) {
        //     this.setState({
        //       user: u
        //     })
        //   }
        // });
      });
  }

  render() {
    return (
      <div>
        {this.state.user==null ?
          <h1>Loading</h1>
          :
          <UserDisplay user={this.state.user} />
        }
      </div>
    )
  }
}

export default User;
