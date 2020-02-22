import React from "react";
import "./App.css";
import GetQuoteSimp from "./components/GetQuote";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: ""
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then(response => response.data)
      .then(data => {
        this.setState({
          simpsons: data[0]
        });
      });
  }
  render() {
    return (
      <div className="App">
        <GetQuoteSimp simpsons={this.state.simpsons} />
        <button type="button" onClick={this.getQuote}>
          Get a Simpson Quote!
        </button>
      </div>
    );
  }
}
export default App;
