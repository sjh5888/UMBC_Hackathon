import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

class NewProject extends React.Component{
    render() {
        return (
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    desiredSkills: ""
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('Title is required'),
                    description: Yup.string()
                        .required('Description is required'),
                    desiredSkills: Yup.string()
                        .required('One or more desired skills are required'),
                })}
                onSubmit={fields => {
                    //axios logic here
                    var nameArr = fields.desiredSkills.split(',')
                    axios.post('http://localhost:8080/api/Projects', {
                        title: fields.title,
                        desiredSkills: nameArr,
                        description: fields.description
                      })
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                    console.log(fields)
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" className={'form-control' + (errors.title && touched.title ? ' is-invalid' : '')} />
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="desiredSkills">Desired Skills</label>
                            <Field name="desiredSkills" type="text" className={'form-control' + (errors.desiredSkills && touched.desiredSkills ? ' is-invalid' : '')} />
                            <ErrorMessage name="desiredSkills" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <Field component="textarea" name="description" type="text" className={'form-control' + (errors.description && touched.description ? ' is-invalid' : '')} />
                            <ErrorMessage name="description" component="div" className="invalid-feedback" />
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary mr-2">Register</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default NewProject