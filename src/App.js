import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";

function App() {
  //let email = 'fracz@agh.edu.pl';
  const [email, setEmail] = useState('fracz@agh.edu.pl');
  const [isAuthenticated, setAuthenticated] = useState(false);
  //const [message, setMessage] = useState('');
  const [authenticatedUsername, setAuthenticatedUsername] = useState('');
  function logout(){
      //alert(email);
  }

  let content;
  if(authenticatedUsername){
    content = <div>
      <h2>Twoj e-mail to {authenticatedUsername}</h2>
      <button onClick={() => setAuthenticatedUsername('')}>Wyloguj sie</button>
    </div>
  }else{
      content = <LoginForm onLogin={(email) => setAuthenticatedUsername(email)}
                           buttonLabel="Zaloguj sie :)"/>

  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  // let message = <div>Masz krotki adres</div>
  //
  // if(email.length > 15){
  //   message = <h2>Masz za dlugi adres"</h2>;
  //
  // }
  // else if(email.length > 5){
  //   message = <h3>"jest ok"</h3>;
  //
  // }

    return (
    <div>
      <h1>System do zapisów na zajęcia</h1>
      {content}
    </div>
  );
}

// function LogIn(){
//   <h2>Wyloguj</h2>
// }

export default App;
