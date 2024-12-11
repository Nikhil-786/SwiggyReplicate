import React from "react";
import Contact from "./Contact";
import ContactClass from "./ContactClass";

class Help extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Called Parent component did mount");
  }

  render() {
    console.log("parent render is called");
    return (
      <div>
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
