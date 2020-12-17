import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../../shared/Notifications';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const BookForm = ({ endpoint, preload }) => {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    setInputs({...preload});
  }, [preload])

  const handleChange = event => {
  };

  const handleSubmit = event => {
  };

  if (redirect) return <Redirect to="/"/>;
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Author</Form.Label>

      <Form.Group>
        <Form.Control 
          onChange={handleChange} 
          name="author" 
          placeholder="Mark Twain"
          defaultValue={inputs.author}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Title</Form.Label>

        <Form.Control 
          onChange={handleChange} 
          name="title" 
          placeholder="Tom Sawyer"
          defaultValue={inputs.title}
        />
      </Form.Group>

      <Form.Group>
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  );
}
 
export default BookForm;