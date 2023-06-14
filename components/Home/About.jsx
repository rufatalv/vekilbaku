import styles from "@/styles/About.module.scss";
import image from "@/public/images/photo.jpg";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.about}>
      <div className="bg"></div>
      <div className="container">
        <div className="card">
          <div className="card__inner">
            <div className="card__left">
              <h2 className="card__title">Vəkil Emin Kiçikbəyov haqqında</h2>
              <div className="card__text">
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
              <div className="btn">
                <button>Ətraflı</button>
              </div>
            </div>
            <div className="card__right">
              <Image src={image} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
