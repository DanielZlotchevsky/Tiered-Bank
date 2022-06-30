function Spa() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [users, setUsers] = React.useState(null)





  return (
    <HashRouter>
      <UserContext.Provider value={[users, setUsers]}>
        <LogContext.Provider value={[loggedIn, setLoggedIn]}>
          <NavBar/>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount}/>
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/transactions/" component={Transactions} />
          <Route path="/alldata/" component={AllData} />
        </LogContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  )
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)
