import React from 'react';

function UserDisplay(props) {
  return (
    <div>
      <h1>{props.user.fName + " " + props.user.lName}</h1>
      <h2>Skills</h2>
      <div>
        {props.user.skills.map(skill => {
          return (
            <span>
              <span>{skill}</span>
              <span>&nbsp;</span>
            </span>
          )
        })}
      </div>
      <div>
        {props.user.instrests.map(instrests => {
          return (
            <span>
              <span>{instrests}</span>
              <span>&nbsp;</span>
            </span>
          )
        })}
      </div>
      {props.user.links.map(links => {
        return (
          <a href={links}>{links}</a>
        )
      })}
    </div>
  )
}

export default UserDisplay;
