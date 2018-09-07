import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Col from 'reactstrap/lib/Col';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import Row from 'reactstrap/lib/Row';

import Item from './Item';
import GrandTotal from './GrandTotal';


class ListItem extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    items: PropTypes.shape({
      product: PropTypes.string,
      qty: PropTypes.number,
      price: PropTypes.number
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      grandTotal: 0
    }
  }

  componentWillReceiveProps() {
    this.calculateGrandTotal();
  }

  componentWillMount(){
    this.calculateGrandTotal();
  }

  calculateGrandTotal = () => {
    const { details } = this.props.items;
    let grandTotal = 0;

    Object.keys(details).map(id => 
      grandTotal = grandTotal + (details[id].price * details[id].qty)
    );

    this.setState({grandTotal});
  }

  render() {
    const { details } = this.props.items

    return (
      <div className="items-ct">
        <span>
          <h3>Items</h3>
        </span>

        <ListGroup>
          <ListGroupItem>
              <Row md="12">
                <Col md="6">Product</Col>
                <Col md="2">Quantity</Col>
                <Col md="2">Price</Col>
                <Col md="2">Total</Col>
              </Row>
            </ListGroupItem>
            {Object.keys(details).map(id => 
              <Item  
                  key={id}
                  item={details[id]}
              />
            )}
        </ListGroup>

        <GrandTotal grandTotal={this.state.grandTotal} />
      </div>
      
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(ListItem);