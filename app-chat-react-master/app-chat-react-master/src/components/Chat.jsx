import { useState, useEffect, useRef } from "react";
import { database, ref, push, onValue } from "../firebase";
import Video1 from "./trailer/EndGame.mp4";

import './login.css'
function Chat({ name }) {
  const [inpMessage, setIptMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const input = useRef();
  useEffect(() => {
    onValue(ref(database, "message"), (data) => {
      let getMsg = [];
      data.forEach((d) => {
        getMsg.push(d.val());
      });
      setMessages(getMsg);
    });
  }, []);
  const handleSendMessage = () => {
    push(ref(database, "message"), {
      name: name,
      message: inpMessage,
    });
    setIptMessage("");
    input.focus();
  };
  return (

    <div className="app">
      <header>
        <div className="container">
          <div id="main">
            <span className="navopen" >&#9776; </span>
          </div>
          <a href="/Form/home.html">
            <span>Phim Mới</span>
            <div className="liquid"></div>
          </a>
          <a href="">
            <span>Phim Lẻ</span>
            <div className="liquid"></div>
          </a>
          <a href="">
            <span>Phim Bộ</span>
            <div className="liquid"></div>
          </a>

          <a href="">
            <span>Shop</span>
            <div className="liquid"></div>
          </a>
        </div>
      </header>
      <footer>
        <div className="title">
          <div className="film-info">
            <h1>Avenger</h1>
            <div className="film-info-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium hic
              adipisci illo incidunt, necessitatibus modi itaque, distinctio suscipit accusantium
              aperiam, cupiditate ea enim quod debitis cumque sit eum iste.
            </div>
            <video src={Video1} loop autoplay muted controls>

            </video>
          </div>
        </div>
      </footer>
      <div className="cmt">
        <div className="cmt-post">
          <h1>Bạn đang bình luận với tên {name}</h1>
          <ul>
            {messages.map((msg, index) => {
              return (
                <li key={index}>
                  <span>{msg.name}: </span>
                  <span>{msg.message}</span>
                </li>
              );
            })}
          </ul>
          <input type="text" value={inpMessage} onChange={(e) => {
            setIptMessage(e.target.value);
          }} ref={input} />
          <button onClick={handleSendMessage}>Gửi</button>
        </div>
      </div>
    </div>

  );
}

export default Chat;
