import React from "react"
import s from "./FriendMessage.module.css"
import { MessageType } from "../HW1"

type FrinedsMessageType = {
  message: MessageType
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FrinedsMessageType) => {
  return (
    <div
      id={"hw1-friend-message-" + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendsImgAndTime}>
        <img
          id={"hw1-friend-avatar-" + props.message.id}
          // создаёт студент
          src={props.message.user.avatar}

          //
        />
        <div
          id={"hw1-friend-time-" + props.message.id}
          className={s.friendTime}
        >
          {/*создаёт студент*/}
          {props.message.message.time}

          {/**/}
        </div>
      </div>

      <div className={s.friendImageAndText}>
        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + props.message.id}
            className={s.friendName}
          >
            {/*создаёт студент*/}
            {props.message.id}
            {/**/}
          </div>
          <pre
            id={"hw1-friend-text-" + props.message.id}
            className={s.friendMessageText}
          >
            {/*создаёт студент*/}
            {props.message.message.text}

            {/**/}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default FriendMessage
