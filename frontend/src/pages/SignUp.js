import { useNavigate } from "react-router-dom"
import apiCalls from "../api/apiCalls"

function SignupPage() {
  console.log("Inside sign up page")

  //router params
  const navigate = useNavigate()

  // handler
  const handleSignup = async (evt) => { // evt passed in from browser // async added bc of await
    evt.preventDefault() // prevent refresh as default behavior

    let signupData = {
      // username: evt.target.elements["username"].value,
      email: evt.target.elements["email"].value,
      password: evt.target.elements["password"].value,
      first_name: evt.target.elements["first_name"].value,
      last_name: evt.target.elements["last_name"].value,
      
    }

    console.log("SIGN UP INFO:", signupData)

    const data = await apiCalls.signup(signupData) // to use await, you will need an async function

    if (data) {
      navigate ("/login")
    }
  }


  //render

  return (
    <section>
      <h2>Sign up Page</h2>
      {console.log("in signup")}
      <br />
      <form className="form__auth" onSubmit={ handleSignup } method="POST">

        <label className="screenreader-only">Email:</label>
        <input type="email" name="email" placeholder="Enter email"></input>
        <br />
        <label className="screenreader-only">Password:</label>
        <input type="password" name="password" placeholder="Enter password"></input>
        <br />
        <label className="screenreader-only">First Name:</label>
        <input type="first_name" name="first_name" placeholder="Enter first_name"></input>
        <br />
        <label className="screenreader-only">Last Name:</label>
        <input type="last_name" name="last_name" placeholder="Enter last_name"></input>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  )
}

export default SignupPage;

