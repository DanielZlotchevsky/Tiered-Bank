function Home(){
  const ctxL = React.useContext(LogContext);
  const ctxU = React.useContext(UserContext);
  const ctxCurrU = React.useContext(CurrentUserContext);

  
  let message = ctxL[0] ? `Welcome to Bad Bank` : 'Welcome to Bad Bank';
  
  
  return(
    <Card
      bgcolor='primary'
      header='Bad Bank'
      status=''
      title={message}
      img='bank.jpg'
    />
    )
}

