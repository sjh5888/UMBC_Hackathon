import React from 'react';
import ViewProject from './ViewProject';

class Group extends React.Component {
  constructor() {
    super();

    this.state = {
      project: null
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params;

    console.log(handle);

    fetch('http://localhost:8080/project/')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.map(p => {
          console.log(p.id);
          console.log(handle);
          if(p.id === handle) {
            this.setState({
              group: p
            })
          }
        });
      });
  }

  render() {
    return (
      <div>
        <ViewProject />
        }
      </div>
    )
  }
}

export default Group;
