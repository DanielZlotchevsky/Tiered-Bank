function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const ctxU = React.useContext(UserContext);

  const [data, setData] = React.useState('');
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  let userE = ctxU[0] ? ctxU[0] : email

  React.useEffect(() => {
      
    // fetch all accounts from API
    fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            setData(data);                
        });

  }, []);

  function handle(){
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.email === userE) {
        setBalance(element.balance)
        props.setStatus(element.balance)
      }
    }
    
  };

  return (<>

  Email<br/>
      {ctxU[0] ? <label>Checking balance for {ctxU[0]}</label> :
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        value={email} 
        onChange={e => setEmail(e.currentTarget.value)}/>}<br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}