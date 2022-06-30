function Login(){
  const ctxL = React.useContext(LogContext);
  const ctxU = React.useContext(UserContext);
  const ctxCurrU = React.useContext(CurrentUserContext);

  const db = firebase.database();
  
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userConfirm, setUserConfirm] = React.useState(false);
  const [verified, setVerified] = React.useState(false);

  //const data = {};


  const handleSubmit = e => {
    e.preventDefault();

    var userdb = db.ref('users');
    userdb.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data[1])

    for (let i = 1; i < data.length; i++) {
      let Uelement = data[i].email;
      let Pelement = data[i].password;
      if (Uelement === userName && Pelement === password) {
        //console.log(Pelement, password);
        //console.log(Uelement, userName);
        setVerified(true);
        ctxCurrU[1](ctxU[i]);
      }
    }
    
    });
    //console.log(data[2])
  };
  

  const login = () => {
    ctxL[1](true);
  };

  return (
    <div className='login-container'>
      <div className="card" style={{width: 18 + 'rem'}}>
        {!verified && 
          <div>
            <div className="card-header">
            Enter your credentials
            </div>
            <div className="card-body">
              <div>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text"
                    className="input"
                    value={userName}
                    placeholder="Enter Email"
                    onChange={e => setUserName(e.target.value)}/>
                  <input 
                    type="password"
                    className="input"
                    value={password}
                    placeholder="Enter Password"
                    onChange={e => setPassword(e.target.value)} />
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
        </div>}
        {verified && 
        <div>
          <div className="card-header">
            Welcome to Bad Bank, {ctxCurrU[0].name}!
          </div>
          <div className="card-body"></div>
            {verified && 
            <Link to="/" className='nav-link' onClick={login}>Enter</Link>}
            <Route path="/" exact component={Home} />
          </div>}
      </div>
    </div>
  )  
}
