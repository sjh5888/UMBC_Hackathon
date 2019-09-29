import React from 'react';
import ProjectCard from './ProjectCard';

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

    fetch('http://localhost:6969/project')
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
        {this.state.group==null ?
          <h1>Loading</h1>
          :
          <ProjectCard projectData={this.state.project} />
        }
      </div>
    )
  }
}

export default Group;
