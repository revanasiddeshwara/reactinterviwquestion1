import { Component } from "react";
import "./App.css";

class App extends Component {
  state = { saveBtn: true, editBtn: false, inputValue: "" };

  inputentry = (event) => this.setState({ inputValue: event.target.value });

  saveButton = () => {
    this.setState((prevState) => ({
      saveBtn: !prevState.saveBtn,
      editBtn: !prevState.saveBtn
    }));
  };


  render() {
    const { saveBtn, editBtn, inputValue } = this.state;
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable text input</h1>

          {saveBtn ? (
            <div className="saveButtonContainer">
              <input
                type="text"
                onChange={this.inputentry}
                className="input"
                value={inputValue}
              />
              <button
                type="button"
                className="saveButton"
                onClick={this.saveButton}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="saveButtonContainer">
              <p> {inputValue}</p>
              <button
                type="button"
                className="saveButton"
                onClick={this.saveButton}
              >
                edit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
