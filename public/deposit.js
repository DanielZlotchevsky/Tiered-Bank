function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const ctxU = React.useContext(UserContext);

  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  let user = ctxU[0] ? ctxU[0] : email

  function handle(){
    fetch(`/account/update/${user}/${amount}`)
    .then(() => {
      try {
          props.setShow(false);
      } catch(err) {
          props.setStatus('Deposit failed')
          console.log('err:', text);
      }
    });
    window.alert(`Success! You have deposited: ${amount}`)
    let transaction = `Deposit: ${amount}`;
    fetch(`/account/updateHist/${user}/${transaction}`)
  }

  return(<>

    Email<br/>
    {ctxU[0] ? <label>Depositing to {ctxU[0]}</label> :
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/>}<br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Deposit</button>

  </>);
}