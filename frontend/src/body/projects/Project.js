import React from 'react';

// function Project() {
//   return (
//     <div>
//       Projects
//     </div>
//   );
// }

class Project extends React.Component {
  constructor(props) {
    super();

    this.state = {
      projectId: null
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params;

    this 
  }
}

export default Project;
