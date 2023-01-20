import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-md">
    <a className="navbar-brand" href="#">
        <img src="https://i.imgur.com/j7UU67b.png" width="234" height="66"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Staff</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gift Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Manufactured T-Virus Cure -ACCESS DENIED-</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        )
    }
}