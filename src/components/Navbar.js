import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">News App by React </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">Home</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${this.props.category ? "active" : ""} `} to="/business">Business</Link></li>
                    {/* {console.log({props.category})}s */}
                    {console.log("Hello")}
                    <li className="nav-item"><Link className={`nav-link ${`to==='/entertainment' ? 'active' : ''`} `} to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
    )
  }
}

export default Navbar