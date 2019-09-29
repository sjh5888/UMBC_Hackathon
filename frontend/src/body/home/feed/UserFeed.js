import React from 'react';

class UserFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/")
  }
}
