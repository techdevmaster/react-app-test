import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardText from 'reactstrap/lib/CardText';


const GrandTotal = ({ grandTotal }) => (
  <Card className="grand-total">
    <CardBody>
      <CardText>{grandTotal}</CardText>
    </CardBody>
  </Card>
);

GrandTotal.propTypes = {
  grandTotal: PropTypes.number.isRequired
}

export default GrandTotal;
