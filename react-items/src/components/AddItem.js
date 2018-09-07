import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

import Button from 'reactstrap/lib/Button';
import Input from 'reactstrap/lib/Input';
import InputGroup from 'reactstrap/lib/InputGroup';


class AddItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      product: { product: '', qty: 0, price: 0 }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    value = name === "product" ? value : parseFloat(value);

    const product = Object.assign({}, this.state.product, {[name]: value});
    this.setState(Object.assign({}, this.state, {product}));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.dispatch(addItem(this.state.product));

    const product = { product: '', qty: '', price: '' }
    this.setState(Object.assign({}, this.state, {product}));
  }

  render() {
    return (
      <div>
        <span>
          <h3>Add New item</h3>
        </span>
      
        <form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input required
                   type="text"
                   name="product"
                   placeholder="Product name"
                   value={this.state.product.product}
                   onChange={this.handleChange} />

            <Input required
                   type="number"
                   name="qty"
                   placeholder="Quantity"
                   value={this.state.product.qty}
                   onChange={this.handleChange} />

            <Input required
                   type="number"
                   name="price"
                   placeholder="Price"
                   value={this.state.product.price}
                   onChange={this.handleChange} />
            <Button color="success">Add</Button>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default connect()(AddItem);