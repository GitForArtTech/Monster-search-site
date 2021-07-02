import React, { Component } from "react";
import { CardList } from "./components/Card-List/CardList";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  //  this.handleChange = this.handleChange.bind(this); 
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="title">Monsters Rolodex</h1>
        <SearchBox placeholder='search monster' handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
      </div>
    );
  }
}

export default App;
