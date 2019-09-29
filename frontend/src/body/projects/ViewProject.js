import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ViewProject.css'


class NewProject extends React.Component{
    constructor(){
      super()
      this.state={
        project: null
      }
    }
    
    componentDidMount(){

        var creatorId = '90099eff20b3b5b5ac415eb410d28f32' // TODO: dynamically drawn from authenticated user
        //var project = {}

        fetch("http://localhost:8080/api/Group/" + creatorId)
          .then(resp => resp.json())
          .then(data => {
            console.log('group');
            console.log(data);
            const projectId = data.projectId

            fetch("http://localhost:8080/api/Projects/" + projectId)
              .then(resp => resp.json()) 
              .then(data => {
                console.log('project');
                

                const slug = data;

                this.setState({
                  project: slug
                })
              })
          })

    }
    
    render() {
        return (
            <div className="todo-list">
              <div className="todo-item">
                  {this.state.project==null ?
                  <h1>Loading</h1>
                  :
                  <h1>{this.state.project.title}</h1>}
              </div>
              <div className="todo-item">
              {this.state.project==null ?
                  <h1>Loading</h1>
                  :
                  <h3>{this.state.project.description}</h3>}
              </div>
              <div className="todo-item">
                <h2>Desired Skills:</h2>
                {this.state.project==null ?
                  <h1>Loading</h1>
                  :
                  <div>
                  {this.state.project.desiredSkills.map(val => {
                    return (
                      <span>
                      <span>
                        <h5>{val}</h5>
                      </span>
                      </span>
                    )
                  })}
                  </div>}
              </div>
            </div>
        )
    }
}
export default NewProject