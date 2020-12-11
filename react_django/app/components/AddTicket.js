import React, { useEffect, useState } from "react"
import Page from "./Page"
import Axios from "axios"
import CKEditor from "ckeditor4-react"
import { Link } from "react-router-dom"

function AddTicket() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [department, setDepartment] = useState()
  const [description, setDescription] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log({ email, subject: subject, department: department, description: description })
      // const response = await Axios.post("", { email, subject: subject, department: department, description: description })
      // props.setLoggedIn(true)
      // localStorage.setItem("token", response.data.token)
    } catch (e) {
      console.log("User Not Created Success")
    }
  }

  return (
    <Page title="Home" wide={true}>
      <div className="row mb-3">
        <div className="col-9"></div>
        <div className="col-3">
          <Link to="/" className="btn btn-outline-primary">
            Ticket list
          </Link>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header text-center">Add ticket</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="name-register" className="text-muted mb-1">
                      <small>Name</small>
                    </label>
                    <input onChange={(e) => setName(e.target.value)} id="name-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="email-register" className="text-muted mb-1">
                      <small>Email</small>
                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} id="email-register" className="form-control" type="email" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="subject-register" className="text-muted mb-1">
                      <small>Subject</small>
                    </label>
                    <input onChange={(e) => setSubject(e.target.value)} id="subject-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="department-register" className="text-muted mb-1">
                      <small>Department ID</small>
                    </label>
                    <input onChange={(e) => setDepartment(e.target.value)} id="department-register" className="form-control" type="text" autoComplete="off" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="description-register" className="text-muted mb-1">
                    <small>Description</small>
                  </label>
                  <CKEditor onChange={(e) => setDescription(e.editor.getData())} />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default AddTicket
