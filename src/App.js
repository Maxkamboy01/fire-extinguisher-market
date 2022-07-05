import "./App.css";
import Mainpage from "./pages/mainpage";
import { useState } from "react";

function App() {
  const userInfo = {
    name: "mahkamboy",
    password: "parol",
  };

  const [login, setLogin] = useState(true);

  const logging = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    console.log(e);
    if (
      name === userInfo.name &&
      password === userInfo.password &&
      name !== "" &&
      password !== ""
    ) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <>
      {login ? (
        <Mainpage />
      ) : (
        <form onSubmit={logging}>
          <h2>hello mister lazy boss</h2>
          <input type="text" name="name" placeholder="Enter your name" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <button>come</button>
        </form>
      )}
    </>
  );
}

export default App;
