import FormControl from "../../UI/FormControl";
import { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
const Login = (props) => {
  const userIdRef = useRef();
  const pwdRef = useRef();
  const [isUserIdValid, setUserValidity] = useState(true);
  const [isPwdValid, setPwdalidity] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const userIdValue = userIdRef.current.value;
    const pwdvalue = pwdRef.current.value;
    if (userIdValue.trim().length === 0 || pwdvalue.trim().length === 0) {
      if (userIdValue.trim().length === 0) {
        setUserValidity(false);
      }
      if (pwdvalue.trim().length === 0) {
        setPwdalidity(false);
      }
      return;
    }
    localStorage.setItem("isLoggedIn", "logged");
    props.onLogin();
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl invalid={!isUserIdValid}>
        <label>UserId</label>
        <input type="text" ref={userIdRef} />
      </FormControl>

      <FormControl invalid={!isPwdValid}>
        <label>Password</label>
        <input type="password" ref={pwdRef} />
      </FormControl>
      <Button type="submit">Login</Button>
    </form>
  );
};
export default Login;
