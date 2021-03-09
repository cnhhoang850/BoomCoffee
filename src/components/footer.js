import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="brand">
        B<span className="stretch">O</span>
        <span className="stretch">O</span>M<br />
        <span className="brandcoffee">COFFEE</span>
      </div>
      <div className="footerGrid">
        <div className="linksColumn info">
          <a id="address">
            14B9 Ngo Tat To, ward 19,
            <br /> Binh Thanh district
            <br /> Ho Chi Minh city
          </a>
          <br />
          <a>Phone: 0702 775 511</a>
          <br />
          <a>Mail: boomCoffee@gmail.com</a>
        </div>
        <div className="linksColumn company">
          <a>About us</a>
          <br />
          <a>Partnership</a>
          <br />
          <a>Recruitment</a>
          <br />
        </div>
        <div className="linksColumn service">
          <a>Refund policy</a>
          <br />
          <a>Food safety</a>
        </div>
        <div className="linksColumn social">
          <a href="">Facebook</a>
          <br />
          <a href="">Foody</a>
          <br />
          <a href="">Twitter</a>
          <br />
          <a href=""></a>
        </div>
      </div>
      <div className="footerTail">
        <p id="copyright">
          Copyright @ 2020 BOOM COFFEE. <br />
          All rights reserved.
        </p>
        <p id="policy">
          <a>PRIVACY POLICY </a>
          <a> TERMS OF USE</a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
