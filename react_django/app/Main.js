import React, { useState } from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import HomeGuest from "./components/HomeGuest"
import Home from "./components/Home"
import AddTicket from "./components/AddTicket"

function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("token")))

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/add-ticket">{loggedIn ? <AddTicket /> : <HomeGuest loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}</Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDom.render(<Main />, document.querySelector("#app"))

// added for asyn load
if (module.hot) {
  module.hot.accept()
}
