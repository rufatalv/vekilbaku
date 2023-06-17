import styles from "@/styles/Home/About.module.scss";
import image from "@/public/images/photo.jpg";
import Image from "next/image";
import Services from "./Services";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="bg"></div>
      <div className="container">
        <div className="card">
          <div className="card__inner">
            <div className="card__left">
              <div className="card__text">Vəkil Emin Kiçikbəyov haqqında</div>
              <div className="card__info">
                <p>
                  Emin Kiçikbəyov ziyalı hüquqşünas ailəsində anadan olmuşdur.
                  Nərimanov rayon 82 nömrəli orta pilot məktəbini bitirmişdir.
                </p>
                <p>
                  2008-ci ildə hüquq fakültəsini müvəffəqiyyətlə bitirərək
                  Hüquqşünaslıq ixtisasına yiyələnmişdir. 2010-cu ildən hüquq
                  sahəsi üzrə Azərbaycan Dövlət Neft şirkətində fəaliyyətinə
                  başlamışdır.
                </p>
                <p>
                  Daha sonra vəkillik imtahanından uğurla keçərək Azərbaycan
                  Respublikası Vəkillər Kollegiyasının üzvü olmuşdur.
                  Hal-hazırda Vəkil kimi fəaliyyət göstərir.
                </p>
              </div>
              <div className="card__button">
                <button>Ətraflı</button>
              </div>
            </div>
            <div className="card__right"></div>
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
}
