import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class NewProject extends React.Component{
    
    componentDidMount(){

        var creatorId = '6ed61d4b80bb0f81937b32418e98adca' // TODO: dynamically drawn from authenticated user
        var projectId = ""
       
        axios.get('http://localhost:8080/api/Group/' + creatorId)
        .then(function (response) {
          console.log(response);
          projectId = response.data.projectId
        })
        .catch(function (error) {
          console.log(error);
        });

        axios.get('http://localhost:8080/api/Projects/' + projectId)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });


    }
    
    render() {
        return (
            <p>hey</p>
        )
    }
}
export default NewProject