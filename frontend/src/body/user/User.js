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
    // const { handle } = this.props.match.params;
    const handle = "6ed61d4b80bb0f81937b32418e98adca";

    console.log(handle);

    fetch('http://localhost:8080/api/User/' + handle)
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        this.setState({
          user: data
        });
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
