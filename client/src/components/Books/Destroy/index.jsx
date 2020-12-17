import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(``, {
      // you need to pass a value here. What is it? Careful... it isn't as straight forward as it may seem...
    })
    .then(() => {
      setNotification(`Book was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected book due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/"/>;
}
 
export default Destroy;