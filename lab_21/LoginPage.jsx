import { useState } from "react";

function LoginPage({ handleLogin }) {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  function HandleSubmit() {
    if (Name === "admin" && Password === "1234") {
      handleLogin(Name);
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }
  }
  return (
    <main className="page">
      <section className="login-card">
      
        <h2>Login Page</h2>
         <form
          onSubmit={(e) => {
            e.preventDefault();
            HandleSubmit();
          }}
        >
          <div className="field">
            <label>Username</label><br/>
            <input id="username" type="text" value={Name}  placeholder="Enter your username"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div><br/><br/>
          <div className="field">
            <label >Password</label><br/>
            <input id="password" type="password" value={Password} placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div><br/>
          <button type="submit">Sign in</button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
