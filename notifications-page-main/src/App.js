import React from "react";
import data from "./data.json";
import Notification from "./Notification";

function App() {
  const notifications = data;
  const notificationsEl = notifications.map((notification, index) => {
    return (
      <Notification
        key={index + 1}
        userPic={notification.userPic}
        user={notification.user}
        action={notification.action}
        target={notification.target}
        time={notification.time}
        unread={notification.unread}
        msgText={notification.msgText}
        img={notification.img}
      />
    );
  });

  const [unreadCount, setUnreadCount] = React.useState(
    notifications.filter((notification) => notification.unread).length
  );

  const updateUnreadCount = () => {
    setUnreadCount(
      notifications.filter((notification) => notification.unread).length
    );
  };

  const markRead = () => {
    notifications.forEach((notification) => {
      notification.unread = false;
    });
    updateUnreadCount();
  };

  return (
    <div className="container">
      <header>
        <h1>Notifications</h1>
        <span>{unreadCount > 0 && unreadCount}</span>
        <button className="header__button" onClick={markRead}>
          Mark all as read
        </button>
      </header>
      <main>{notificationsEl}</main>
    </div>
  );
}

export default App;
