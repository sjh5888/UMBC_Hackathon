import React from 'react';

import GroupCard from '../groupComponent/GroupCard';

class GroupFeed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.slug,
      projects: null
    }
  }

  render() {
    return (
      <div>
        <h2>Project Feed</h2>
        {
        this.state.data.map(val => {
          return(
            <GroupCard groupId={val.groups} />
          )
        })
        }
      </div>
    )
  }
}

export default GroupFeed
