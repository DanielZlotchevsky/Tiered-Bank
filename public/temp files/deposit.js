const ATMDeposit = ({ onChange, isDisable }) => {
  return (
    <label className="label huge">
      <input type="number" width="200" placeholder='Enter an amount...' onChange={onChange}></input>
      <input type="submit" width="200" disabled={isDisable} value="Submit"></input>
    </label>
  );
};

function Deposit(){

  const ctxCurrU = React.useContext(CurrentUserContext);

  const [totalState, setTotalState] = React.useState(ctxCurrU[0].balance);
  const [totalInput, setInputState] = React.useState(0);
  const [isDisable, setIsDisable] = React.useState(true);
  

  let Uinput = 0; // state of this transaction
  let newTotal = 0;

  const checkDisable = (e) => {
    if (e.target.value == '') {setIsDisable(true)};
    if (e.target.value != '') {setIsDisable(false)};
  }

  const handleChange = e => {
    console.log(`handleChange ${e.target.value}`);
    Uinput = Number(e.target.value);
    checkDisable(e);
    setInputState(Uinput);
  };

  const handleSubmit = (e) => {
    if (totalInput <= 0) {
      window.alert('Cannot deposit Zero or Negative amount.');
      return;
    } else {
    e.preventDefault();
    newTotal = totalState + totalInput;
    setTotalState(newTotal);
    ctxCurrU[0].balance = newTotal;
    addToTransaction();
    window.alert(`Success! You have deposited: ${totalInput}`)
  }};
  
  const addToTransaction = () => {
    let transaction = `Deposit: ${totalState} + ${totalInput}. New balance: ${newTotal}`;
    ctxCurrU[0].transactions.push(transaction);
    console.log(ctxCurrU[0].transactions)
  }

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <label>Welcome to deposits, {ctxCurrU[0].name}!</label>
          <br/>
          <h1>You are making a Deposit</h1>
          <h2>Your current balance is: {totalState}</h2>
          <br/>
          <a>How much would you like to deposit?</a>
          <form onSubmit={handleSubmit}>
            <ATMDeposit onChange={handleChange} isDisable={isDisable}></ATMDeposit>
          </form>
        </div>
      </div>
    </div>
  );
};