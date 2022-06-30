function NavBar() {
  const ctx = React.useContext(LogContext);
  const loggedIn = ctx[0];
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Bad Bank</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {!loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/login/">Log In</a>
            </li> }
            {!loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>}
            {loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>}
            {loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>}
            {loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>}
            {loggedIn && <li className="nav-item">
              <a className="nav-link" href="#/transactions/">History</a>
            </li>}
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

