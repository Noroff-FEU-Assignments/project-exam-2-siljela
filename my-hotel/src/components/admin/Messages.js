import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";
import Spinner from 'react-bootstrap/Spinner';
import styles from './Messages.module.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';

const messageURL = URL + "messages";

export const Messages = () => {
  const [load, setload] = useState(true);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      return;
    }
    async function getMessages() {
      const token = auth.jwt;
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const response = await axios.get(messageURL, { headers });
        console.log(response.data);
        setMessages(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setload(false);
      }
    }
    getMessages();
  }, [auth]);

  if (load) {
    return <div>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
    </div>;
  }
  if (error) {
    return <div>We were unable to load messages at this moment. Return to <a href="/admin">admin-page</a>.</div>;
  }
  if (messages.length === 0) {
    return <div>You currently have no messages.</div>;
  }
  return (
    <>
      {messages.map((message) => {
        return (
          <Form key={message.id} className={styles.messageBox} >
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Name:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={message.name} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={message.email} />
              </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Message:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} as="textarea" plaintext readOnly defaultValue={message.message} style={{ height: '100px' }}/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Sent:
              </Form.Label>
              <Col sm="10">
                <Form.Control className={styles.guestInput} plaintext readOnly defaultValue={message.created_at} />
              </Col>
            </Form.Group>
          </Form>
        );
      })}
    </>
  );
};