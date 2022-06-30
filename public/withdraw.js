function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
  const ctxU = React.useContext(UserContext);

  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  let user = ctxU[0] ? ctxU[0] : email

  function handle(){
    fetch(`/account/update/${user}/-${amount}`)
    .then(() => {
      try {
          props.setShow(false);
      } catch(err) {
          props.setStatus('Withdraw failed')
          console.log('err:', text);
      }
    });
    window.alert(`Success! You have withdrawn: ${amount}`)
    let transaction = `Withdraw: ${amount}`;
    fetch(`/account/updateHist/${user}/${transaction}`)
  }



  return(<>

    Email<br/>
    {ctxU[0] ? <label>Withdrawing from {ctxU[0]}</label> :
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/>}<br/>

    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Withdraw
    </button>

  </>);
}
