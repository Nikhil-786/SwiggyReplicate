import React from "react";

class ContactClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };
    console.log( this.props.name+ ' Constructor is called');
  }
  componentDidMount(){
    console.log(this.props.name+'component did mount');
  }
  render() {
    console.log(this.props.name+ 'render method  is called');
    return (
      <div className=" border-black border-2 w-60 ml-96 ">
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Clickme
        </button>
        <h1>Name: {this.props.name}</h1>
        <p>Address: {this.props.Address}</p>
        <h3>Phone No-9974968749</h3>
      </div>
    );
  }
}

export default ContactClass;
