// import "../../App.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { URL } from "../../constants/api";

const messageURL = URL + "messages";

export const Messages = () => {
  const [loading, setloading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [displayMessage, setdisplayMessage] = useState(false);
  const [auth] = useContext(AuthContext);

  const showMessageContent = () => {
    setdisplayMessage(!displayMessage);
  };
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
        setloading(false);
      }
    }
    getMessages();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occured</div>;
  }
  if (messages.length === 0) {
    return <div>You currently have no messages.</div>;
  }
  return (
    <>
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <div onClick={showMessageContent}>
              <div>
                <p>From {message.message}</p>
                <p>Name: {message.name}</p>
                <p>Date: {message.created_at}</p>
              </div>
              <div className="message-head-col">
                <i
                  className={
                    displayMessage
                      ? "fas fa-minus-circle"
                      : "fas fa-plus-circle"
                  }
                ></i>
              </div>
            </div>
            <div>
              <p
                className={`message-content ${
                  displayMessage ? "extra-padding" : ""
                }`}
              >
                {displayMessage ? `Message: ${message.message}` : ""}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};