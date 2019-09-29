import React from 'react';

// function User() {
//   return (
//     <div>
//       User
//     </div>
//   );
// }

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

    fetch('http://localhost:6969/user')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.map(u => {
          console.log(u.id);
          console.log(handle);
          if(u.id === handle) {
            this.setState({
              user: u
            })
          }
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.user==null ?
          <h1>Loading</h1>
          :
          <h1>{this.state.user.fName + " " + this.state.user.lName}</h1>
        }
      </div>
    )
  }
}

export default User;
