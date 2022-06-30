function CreateAccount() {
  
  const db = firebase.database();

  const ctxU = React.useContext(UserContext);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [uName, setUName] = React.useState('');



  const handleSubmit = e => {
    e.preventDefault();
    if (!uName) {
      window.alert('Name field connot be blank.')
      return;
    }
    if (!userName) {
      window.alert('Email field connot be blank.')
      return;
    }
    if (!password) {
      window.alert('Password field connot be blank.')
      return;
    } else {
      const users = db.ref('users');
      users
      .child(ctxU.length + 1)
        .set({
          email: userName,
          password: password,
          name: uName,
          balance: 0,
          transactions:[],
          id: ctxU.length + 1
        });
        console.log
      ctxU.push({
        email: userName,
        password: password,
        name: uName,
        balance: 0,
        transactions:[],
        id: ctxU.length + 1
      })
      window.alert(`Your account has been created, ${uName}! Please Log In to Continue.`)
      console.log(ctxU);
      setUName('');
      setUserName('');
      setPassword('');
  }}


  return (
    <div className="create-container">
      <div className="card" style={{width: 18 + 'rem'}}>
        <div className="card-header">
        Join Bad Bank Today!
        </div>
        <div className="card-body">
          <div>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              className="input"
              value={uName}
              placeholder="Enter Your Name"
              onChange={e => setUName(e.target.value)}/><br/>
            <input 
              type="text"
              className="input"
              value={userName}
              placeholder="Enter Email"
              onChange={e => setUserName(e.target.value)}/><br/>
            <input 
              type="password"
              className="input"
              value={password}
              placeholder="Enter Password"
              onChange={e => setPassword(e.target.value)} /><br/>
              <br/>
            <button type='Submit'>Create Account</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}