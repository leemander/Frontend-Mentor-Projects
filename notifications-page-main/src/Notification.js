import React from "react";
export default function Notification(props) {
  return (
    <div
      className={
        props.unread ? "notification notification--unread" : "notification"
      }
    >
      <img className="notification__user-img" src={props.userPic} alt=""></img>
      <div>
        <p>
          <a href="#" className="notification__name">
            {props.user}{" "}
          </a>
          {props.action}{" "}
          {props.action.includes("group") ? (
            <a href="#" className="notification__group">
              {props.target}
            </a>
          ) : (
            <a href="#" className="notification__post-name">
              {props.target}
            </a>
          )}
          {props.unread && <span className="notification__dot"> •</span>}
        </p>
        <p className="notification__time">{props.time}</p>
        {props.msgText && (
          <a href="#" className="notification__message">
            {props.msgText}
          </a>
        )}
      </div>
      {props.img && (
        <a href="#">
          <img src={props.img} alt="" className="notification__img"></img>
        </a>
      )}
    </div>
  );
}
