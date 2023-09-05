import React from "react";
import "./Slider.scss";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Slider = () => {
  // Language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { t } = useTranslation();
  return (
    <div className="slider">
      <div className="arrow-prev"></div>
      <div className="arrow-next"></div>
      <div className="slide current">
        <img src="https://i.ibb.co/CBGRLhG/bg-4.jpg" alt="gadgets" />
        <div className="content">
          <h2>{t("welcome")}</h2>
          <p>Up to 30% off on all onsale proucts.</p>
          <hr />
          <a href="product" className='"--btn--btn-primary'>
            Shop Now
          </a>

          {/* Internatinalization */}
          <p onClick={() => changeLanguage("hausa")}>English</p>
          <p onClick={() => changeLanguage("hausa")}>Hausa</p>
          <p onClick={() => changeLanguage("igbo")}>Igbo</p>
          <p onClick={() => changeLanguage("yoruba")}>Yoruba</p>
          {/* End of internalization */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
