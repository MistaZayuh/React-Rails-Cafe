import React from "react";
import ItemForm from "./ItemForm";
import { Header, Button, Icon } from "semantic-ui-react";

class Item extends React.Component {
  state = { editing: false, };

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing, })
  };

  render() {
    return (
      <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {
            this.state.editing ?
              <ItemForm toggleEdit={this.toggleEdit} {...this.props} />
              :
              <div>
                <Header as="h2">{this.props.name}</Header>
                <Header as="h4">{this.props.price}</Header>
              </div>
          }
          <br />
          <br />
        </div>
        <Button
          color="blue"
          animated
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
          onClick={() => this.props.deleteItem(this.props.id)}
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
export default Item;