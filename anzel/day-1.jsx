/*
Date: 7/4/2026
Topic learned: React(Conditional rendering)

Summary:
    It's a react component or concept that allows you to control what gets rendered in your application based on certain conditions(show, hide or change components).

Resources Used:
         React Docs
         YT-BroCode
         */

//Script:
//-------------------------------------------------------------
  //App.jsx:
import UserGreeting from './UserGreeting.jsx';
import './index.css'; // or './App.css'

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="John Doe" />
    </>
  );
}

export default App;
//---------------------------------------------------------------

//UserGreeting.jsx:
function UserGreeting(props) {
  return (
    props.isLoggedIn
      ? <h1 className="welcome-message">Welcome back! {props.username}</h1>
      : <h1 className="login-prompt">Please sign up.</h1>
  );
}

export default UserGreeting;
//----------------------------------------------------------------

//index.css:
.welcome-message {
  font-size: 2.5em;
  background-color: rgb(97, 46, 180);
  color: #f5f1f1;
  padding: 10px;
  border-radius: 5px;
  margin: 0;
}

.login-prompt {
  font-size: 2.5em;
  background-color: rgb(180, 46, 46);
  color: #f5f1f1;
  padding: 10px;
  border-radius: 5px;
  margin: 0;
}
//----------------------------------------------------------------