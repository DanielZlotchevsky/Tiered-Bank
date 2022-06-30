const Route               = ReactRouterDOM.Route;
const Link                = ReactRouterDOM.Link;
const HashRouter          = ReactRouterDOM.HashRouter;
const UserContext         = React.createContext(null);
const LogContext          = React.createContext(null);
const CurrentUserContext  = React.createContext(null);
const DbDataContext       = React.createContext(null);


function Card(props) {
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
    return 'card mb-3 ' + bg + txt;
  }

  return (
    <div className={classes()} style={{maxWidth: "40rem"}}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body}
        <img src={props.img}></img>
        {props.status && (<div id='createStatus'>{props.status}</div>)}
      </div>
    </div>      
  );    
}