import React from "react";
import { Form, } from "semantic-ui-react";


class ItemForm extends React.Component {
  state = { name: "",}

  componentDidMount() {
    if (this.props.id)
      this.setState({ name: this.props.name, })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.updateItem({ id: this.props.id, name: this.state.name, });
      this.props.toggleEdit()
    } else {
      this.props.addItem(this.state.name);
    }
    this.setState({ name: "", })
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value, })
  };

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        label="Item"
        placeholder="Add a Item"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      </Form>
    );
  };
};

export default ItemForm;