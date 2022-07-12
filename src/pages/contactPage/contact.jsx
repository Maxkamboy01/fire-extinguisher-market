import React from "react";
import { Board, ContactStyle, MapStyle } from "./style";
function contact() {
  return (
    <ContactStyle>
      <Board>
        <div className="cover"></div>
        <h3 className="h3">
          <p>Как мы можем помочь?</p>
          <p className="span">Отправьте нам соообщение!</p>
        </h3>
      </Board>
      <h3>
        Свяжитесь <u>с нами</u> чтобы узнать <mark>больше</mark> ...
      </h3>
      <div className="wrap">
        <section className="inputs">
          <div className="names">
            <div>
              <label>ваше имя</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>ваша фамилия</label>
              <input type="text" name="lastname" />
            </div>
          </div>
          <label>номер телефона</label>
          <input type="text" placeholder="(+998) 99 999-99-99" name="tel" />
          <label>соообщение</label>
          <textarea
            placeholder="Я заинтересован в том, чтобы узнать больше о..."
            name="message"
          />
          <button type="submit" className="send">
            {" "}
            отправить сообщение
          </button>
        </section>
        <MapStyle className="maps">
          <iframe
          title="title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.7536716356312!2d70.0884114109603!3d41.02000687819412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bdcc23f4567f25c!2zNDHCsDAxJzEyLjAiTiA3MMKwMDUnMjUuOSJF!5e1!3m2!1sru!2s!4v1657126576994!5m2!1sru!2s"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            <a href="email">angrenuyutservis@gmail.com</a>
            <br />
            <a href="tel: +998933897880" className="tel">
              (+998) 93 389-78-80
            </a>
          </p>
        </MapStyle>
      </div>
    </ContactStyle>
  );
}

export default contact;
