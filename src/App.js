import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  //let email = 'fracz@agh.edu.pl';
  const [email, setEmail] = useState('fracz@agh.edu.pl');
  //const [message, setMessage] = useState('');


  function handleChange(event) {
    setEmail(event.target.value);
  }

  let message = <div>Masz krotki adres</div>

  if(email.length > 15){
    message = <h2>Masz za dlugi adres"</h2>;

  }
  else if(email.length > 5){
    message = <h3>"jest ok"</h3>;

  }

    return (
    <div>
      <h1>System do zapisów na zajęcia</h1>
      {message}
      <h2>Twój e-mail to {email.toUpperCase()}.</h2>
      <input type="text" onChange={handleChange}/>
    </div>
  );
}

export default App;
