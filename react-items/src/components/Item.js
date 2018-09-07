import React from 'react';
import PropTypes from 'prop-types';

import Col from 'reactstrap/lib/Col';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';
import Row from 'reactstrap/lib/Row';


const Item = ({ item }) => (
  <ListGroupItem >
    <Row md="12">
      <Col md="6">{item.product}</Col>
      <Col md="2">{(+item.qty).toFixed(2)}</Col>
      <Col md="2">{(+item.price).toFixed(2)}</Col>
      <Col md="2">{(+(item.qty * item.price)).toFixed(2)}</Col>
    </Row>
  </ListGroupItem>
);

Item.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
}

export default Item;