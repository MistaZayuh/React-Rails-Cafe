import React from 'react';
import axios from "axios";
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";

import { Header, Container, } from "semantic-ui-react";

class App extends React.Component {
  state = {
    menus: [],
    items: [],
    showEdit: false,
  }
  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data})
    })
    .catch( err => {
      console.log(err)
    })
  };



  addMenu = (name) => {
    axios.post("/api/menus", { name })
    .then(res => {
      // const { menus } = this.state.menus;
      this.setState({ menus: [ res.data, ...this.state.menus, ], })
    })
    .catch(err => {
      console.log(err)
    })
  };


  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state.menus;
      this.setState({ menus: this.state.menus.filter( menu => menu.id !== id ), })
    })
    .catch( err => {
      console.log(err)
    })
  };



  updateMenu = ({name, id}) => {
    axios.put(`/api/menus/${id}`, {name, id} )
    .then(res => {
      const menus = this.state.menus.map( menu => {
        if (menu.id === id )
          return res.data;
        return menu
      })
      this.setState({ menus, })
    })
    .catch( err => {
      console.log(err)
    })
  };



  render() {
    return (
      <Container>
        <Header as="h1">
          Tacocat Cafe
        </Header>
        <div>
          <MenuForm updateMenu={this.updateMenu} addMenu={this.addMenu} />
          <MenuList
          menus={this.state.menus} 
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
          />

        </div>
      </Container>
    );
  };
};

export default App;
