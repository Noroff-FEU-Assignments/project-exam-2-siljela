import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";
import Spinner from 'react-bootstrap/Spinner';

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
          <div key={message.id}>
              <div>
                <p>From {message.email}</p>
                <p>Date: {message.created_at}</p>
                <p>Name: {message.name}</p>
                <p>Message: {message.message}</p>
              </div>
          </div>
        );
      })}
    </>
  );
};