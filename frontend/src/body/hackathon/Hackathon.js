import React from 'react';
import HackathonCard from './HackathonCard'

class Hackathon extends React.Component {
  constructor() {
    super();

    this.state = {
      hackathon: null
    }
  }

  componentDidMount() {
    const { handle } = this.props.match.params;

    console.log(handle);

    fetch('http://localhost:6969/hackathon')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        data.map(h => {
          console.log(h.id);
          console.log(handle);
          if(h.id === handle) {
           // console.log("hey")
            this.setState({
              hackathon: h
            })
          }
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.hackathon==null ?
          <h1>Loading</h1>
          :
          <HackathonCard hackathonData={this.state.hackathon} />
        }
      </div>
    )
  }
}

export default Hackathon;
