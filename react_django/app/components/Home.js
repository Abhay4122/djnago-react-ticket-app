import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function Home() {
  return (
    <Page title="Home Logined">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row mb-3">
            <div className="col-9">
              <h4 className="text-center font-weight-bold">Tickets List</h4>
            </div>
            <div className="col-3">
              <Link to="/add-ticket" className="btn btn-outline-primary">
                Add Ticket
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <h4 className="m-0">
                    <Link>Ticket title</Link>
                  </h4>
                </div>
                <div className="col-6">
                  <p className="mb-0 mt-1 text-right">
                    <small>11 Dec 2020 01:41 PM</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>Name of ticket generator | 27 minutes ago</p>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <h4 className="m-0">Ticket title</h4>
                </div>
                <div className="col-6">
                  <p className="mb-0 mt-1 text-right">
                    <small>11 Dec 2020 01:41 PM</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>Name of ticket generator | 27 minutes ago</p>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="col-12 my-2">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-6">
                  <h4 className="m-0">Ticket title</h4>
                </div>
                <div className="col-6">
                  <p className="mb-0 mt-1 text-right">
                    <small>11 Dec 2020 01:41 PM</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>Name of ticket generator | 27 minutes ago</p>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Home
