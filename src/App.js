import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  //let email = 'fracz@agh.edu.pl';
  const [email, setEmail] = useState('fracz@agh.edu.pl');
  const [isAuthenticated, setAuthenticated] = useState(false);
  //const [message, setMessage] = useState('');

  function handleClick(event){
      //alert(email);
  }

  let content;
  if(isAuthenticated){
    content = <div>
      <h2>Twoj e-mail to {email}</h2>
      <button onClick={() => setAuthenticated(false)}>Wyloguj sie</button>
    </div>
  }else{
      content = <div>
         <input type="text" onChange={handleChange}/>
        <button onClick={() => setAuthenticated(true)}>Zaloguj sie</button>
      </div>
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
