const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      <input type="number" width="200" placeholder='Enter an amount...' onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

function Withdraw(){

  const ctxCurrU = React.useContext(CurrentUserContext);

  const [totalState, setTotalState] = React.useState(ctxCurrU[0].balance);
  const [totalInput, setInputState] = React.useState(0);
  

  let Uinput = 0; // state of this transaction
  let newTotal = 0;

  const handleChange = e => {
    console.log(`handleChange ${e.target.value}`);
    Uinput = Number(e.target.value);
    setInputState(Uinput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newTotal = totalState - totalInput;
    setTotalState(newTotal);
    ctxCurrU[0].balance = newTotal;
    addToTransaction();
  };
  
  const addToTransaction = () => {
    let transaction = `Withdraw: ${totalState} - ${totalInput}. New balance: ${newTotal}`;
    ctxCurrU[0].transactions.push(transaction);
    console.log(ctxCurrU[0].transactions)
  }

  return (
    <div className="card">
      <div className="card-body">
        <div>
          <label>Welcome to withdrawals, {ctxCurrU[0].name}!</label>
          <br/>
          <h1>You are making a Withdrawal</h1>
          <h2>Your current balance is: {totalState}</h2>
          <br/>
          <a>How much would you like to withdraw?</a>
          <form onSubmit={handleSubmit}>
            <ATMDeposit onChange={handleChange}></ATMDeposit>
          </form>
        </div>
      </div>
    </div>
  );
};
