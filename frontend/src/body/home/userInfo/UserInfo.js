import React from 'react';
import {
  Image
} from 'react-bootstrap';

import './style.css';

// function UserInfo() {
//   return (
//     <div>
//       UserInfo
//     </div>
//   )
// }

class UserInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    const uid = document.cookie.split(";")[1].trim();

    console.log(uid);

    fetch("http://localhost:8080/api/User/" + uid)
      .then(resp => resp.json())
      .then(data => {
        console.log("fasfdsafdsasda");
        console.log(data)
        this.setState({
          user: data
        })
      })
  }

  render() {
    return(
      <div className="user-info">
        <Image
          className="profile-pic"
          src="https://avatars0.githubusercontent.com/u/5713287?s=460&v=4"
          roundedCircle
        />
        {this.state.user!==null &&
          <div>
            <div>
              {this.state.user.fName + " " + this.state.user.lName}
            </div>
            <div>
              {"@" + this.state.user.username}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default UserInfo;
