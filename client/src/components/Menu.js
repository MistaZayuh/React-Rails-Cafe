import React from "react";
import MenuForm from "./MenuForm";
import { Header, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import ItemList from "./ItemList";

class Menu extends React.Component {
  state = { editing: false,
  items: [],
  showItems: false };
  // const { id, name, updateMenu, deleteMenu, } = this.props

toggleEdit = () => {
  this.setState({ editing: !this.state.editing, })
};

addItem = () => {

};

renderItems = () => {
  if (this.state.showItems === true) {
    return   <ItemList menu_id={this.props.menu_id} />}
  this.setState({ showItems: !this.state.showItems })
  
}

updateItem = () => {
  // TODO
};

deleteItem = ({id, menu_id}) => {
  axios.delete(`/api/menus/${menu_id}/items/${id}`)
  .then( res => {
    const { items, } = this.state.items;
    this.setState({ menus: this.state.items.filter( item => item.id !== id ), })
  })
  .catch( err => {
    console.log(err)
  })
};

render() {
  return (

    <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>

        {
          this.state.editing ?
            <MenuForm toggleEdit={this.toggleEdit} {...this.props} />
            :
            <Header as="h2">{this.props.name}</Header>
        }
        <br />
        <br />


      </div>
      <Button
        color="blue"
        animated
        onClick={this.renderItems}
      >
        <Button.Content visible>View</Button.Content>
        <Button.Content hidden>
          <Icon name='eye' />
        </Button.Content>
      </Button>
      <Button
        color="green"
        animated
        onClick={this.toggleEdit}
      >
        <Button.Content visible>Edit</Button.Content>
        <Button.Content hidden>
          <Icon name='pencil' />
        </Button.Content>
      </Button>
      <Button
        color="red"
        animated
        onClick={() => this.props.deleteMenu(this.props.id)}
      >
        <Button.Content visible>Delete</Button.Content>
        <Button.Content hidden>
          <Icon name='trash' />
        </Button.Content>
      </Button>
    </div>

  );
};
};
export default Menu;