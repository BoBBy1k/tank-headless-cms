import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function AlertBanner() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible style={{top: "-10px"}}>
        <Alert.Heading as="h2">Alert</Alert.Heading>
        <p>
        This is a Message!
        </p>
      </Alert>
    );
  }
  return ;
}