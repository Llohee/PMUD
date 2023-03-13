import { useState } from "react";
import Video1 from "./trailer/EndGame.mp4";
import './login.css';





function Login({ callback }) {
  const [name, setName] = useState("");
  const handleClick = () => {
    callback(name);
  };

  // const opennav = () => {
  //   const [isOpen, setIsopen] = useState(false);
  //         isOpen === true ? setIsopen(false) : setIsopen(true);
  // }
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
        <div className="film-info">
          <h1>Avenger</h1>
          <div className="film-info-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium hic
            adipisci illo incidunt, necessitatibus modi itaque, distinctio suscipit accusantium
            aperiam, cupiditate ea enim quod debitis cumque sit eum iste.
          </div>
          <video src={Video1} loop autoPlay muted controls>

          </video>
        </div>
      </footer>
      <div className="cmt">
        <div className="cmt-post">
          <h1>Bình Luận</h1>
          <input type="text" placeholder="Nhập tên để xem Bình Luận" value={name} onChange={(e) => {
            setName(e.target.value)
          }} />
          <button onClick={handleClick}>Xác nhận</button>
        </div>
      </div>
    </div>

  );
}

export default Login;
