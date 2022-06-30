function Transactions(){
  const [data, setData] = React.useState('');
  const ctxU = React.useContext(UserContext);

  React.useEffect(() => {
      
      // fetch all accounts from API
      fetch('/account/all')
          .then(response => response.json())
          .then(data => {
              setData(data);                
          });

  }, []);

  function hList(data, user){
    const totalList = []
    let n = 1
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.email === user) {
        for (let j = 0; j < element.transactions.length; j++) {
          const ele = element.transactions[j];
          n += 1
          totalList.push(<li id={n}>{ele}</li>)
        };
      };
    }
    return (
      <ul>{totalList}</ul> 
      );
  }

  return (
    <Card
          bgcolor="secondary"
          header={`All transaction History for ${ctxU[0]}`}
          body={hList(data, ctxU[0])}
    />
  )
}
