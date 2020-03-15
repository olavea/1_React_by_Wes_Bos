import React from "react";

class StorePicker extends React.Component {
  // const [state, setState] = useState({
  //     // username: "",
  //     // email: "",
  //     password: "",
  //     rememberMe: "session",
  //   })
  myNewEmail = React.createRef();
  changeMyEmail = event => {
    console.log("changeMyEmail");
    //     // 1. stop
    event.preventDefault();
    //     // 2. get the email from form
    //const email=
    console.log(this.myNewEmail);
    //     // 3. Change the email in userbase
  };

  render() {
    return (
      <form className="signUp" onSubmit={this.changeMyEmail}>
        <h2>Username</h2>
        <input
          ref={this.myNewEmail}
          type="text"
          id="email"
          required
          placeholder="batcatdad@usepow.app"
        />
        <button type="submit">Update email -></button>
      </form>
    );
  }
}

export default StorePicker;

// return (
//     <form className="signUp">
//       <h2>Username</h2>
//       <input type="text" required placeholder="batcatdad@usepow.app" />
//       <button type="submit">give me email -></button>
//     </form>
//   );
// onSubmit={changeMyEmail}
