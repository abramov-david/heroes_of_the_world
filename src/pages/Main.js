import "./Main.css";

import marvel_logo from "../assets/marvel_logo.png";
import dc_logo from "../assets/dc_logo.png";
import index_1 from "../assets/main_page/index_1.jpg";
import index_3 from "../assets/main_page/index_3.jpg";
import index_4 from "../assets/main_page/index_4.jpg";
import index_5 from "../assets/main_page/index_5.jpg";
import index_6 from "../assets/main_page/index_6.jpg";
import index_7 from "../assets/main_page/index_7.jpg";
import index_10 from "../assets/main_page/index_10.jpg";

const Main = () => {
  return (
    <main className="main">
      <section className="imgs">
        <div className="imgs__container">
          <img src={index_1} alt="index_1" />
        </div>
        <div className="imgs__container img_three">
          <img src={index_3} alt="index_3" />
        </div>
        <div className="imgs__container img_four">
          <img src={index_4} alt="index_4" />
        </div>
        <div className="imgs__container">
          <img src={index_5} alt="index_5" />
        </div>
        <div className="imgs__container img_six">
          <img src={index_6} alt="index_6" />
        </div>
        <div className="imgs__container img__seven">
          <img src={index_7} alt="index_7" />
        </div>
        <div className="imgs__container img_ten">
          <img src={index_10} alt="index_10" layout="fill" objectFit="cover" />
        </div>
      </section>
      <section className="main__textBlock">
        <img src={dc_logo} alt="Dc_logo" />
        <div className="title">heroes of the world</div>
        <div className="login__links">
          <p>LOGIN</p>
          <p>REGISTER</p>
        </div>
        <img src={marvel_logo} alt="Marvel_logo" />
      </section>
    </main>
  );
};

export default Main;
