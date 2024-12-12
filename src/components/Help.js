import React from "react";
import Contact from "./Contact";
import ContactClass from "./ContactClass";

class Help extends React.Component {
  constructor(props) {
    super(props);
    //intial state of user
    this.state = {
      userInfo: {
        name: "DummyName",
        url: "DummyUrl",
        Avartar_Url: "Dummy Url",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nikhil-786");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    debugger;
    const { name, avatar_url, login } = this.state.userInfo;
    console.log(this.state.userInfo);
    return (
      <div>
        <div>
          <h1>name:{name}</h1>
          <img className="h-44 rounded-lg " src={avatar_url} alt="profileImg" />
          <h1>Login:{login}</h1>
        </div>

        <h1>This is the Help Page</h1>
        <Contact name={"Yashvir"} />
        <ContactClass
          Address={"Mountain blue C-1 Ground floor jivdani road virar east"}
          name={"First"}
        />
        <ContactClass
          Address={"Mountain blue C-1 Ground floor jivdani road virar east"}
          name={"Second"}
        />
      </div>
    );
  }
}

export default Help;
