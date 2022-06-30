function Balance(){
  const ctxCurrU = React.useContext(CurrentUserContext);

  const db = firebase.database();

  function getBalance(i){
    console.log('initial log ', i);
    var bal = 0;
    var userdb = db.ref('users');
    userdb.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log('second log ', data[i]);
      console.log('third log ', data[i].balance);
      bal = data[i].balance;
    });
    
    return setTimeout(() => {
      console.log('fourth log ', bal)
      bal
    }, 2000);
  }

  

  return (
    <div>
      <h1>Balance</h1>
      <label>Hello, {ctxCurrU[0].name}</label><br/>
      <label>Your Balance is: ${getBalance(ctxCurrU[0].id)}</label>
    </div>
  )
}
