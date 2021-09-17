import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Messages } from "./Messages";
import { Reservations } from "./Reservations";
import { EditProperties } from "./EditProperties";

  export const Admin = () => {
  const [auth] = useContext(AuthContext);
  const [showMessagePanel, setshowMessagePanel] = useState(false);
  const [showReservationsPanel, setshowReservationsPanel] = useState(false);
  const [showEditPropertiesPanel, setsshowEditPropertiesPanel] = useState(false);
  const history = useHistory();

  //   return <>{auth ? <h1>Welcome to dashboard</h1> : history.push("/signin")}</>;

  if (!auth) {
    history.push("/login");
  }

  const toggleMessageBody = () => {
    setshowMessagePanel(!showMessagePanel);
  };

  const toggleReservationsBody = () => {
    setshowReservationsPanel(!showReservationsPanel);
  };

  const togglePropertyBody = () => {
    setsshowEditPropertiesPanel(!showEditPropertiesPanel);
  };
  return (
    <div>
      <div>
        <div>
          <h1>Welcome admin</h1>
          <p>
            Here are your enquiries.
          </p>
        </div>

        <div>
          <div>
            <div onClick={toggleMessageBody}>
              <i className="far fa-envelope"></i>
              <h2>Inbox</h2>
            </div>
            <div>
              {showMessagePanel ? <Messages /> : ""}
            </div>
          </div>

          <div>
            <div onClick={toggleReservationsBody}>
              <i className="fas fa-shopping-basket"></i>
              <h2>Reservations</h2>
            </div>
            <div>
              {showReservationsPanel ? <Reservations /> : ""}
            </div>
          </div>

          <div>
            <div onClick={togglePropertyBody}>
              <h2>Edit properties</h2>
            </div>
            <div>
              {showEditPropertiesPanel ? <EditProperties /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};