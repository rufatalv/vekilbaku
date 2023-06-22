import styles from "@/styles/Home/Contacts.module.scss";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <div className="title">ƏLAQƏ</div>

      <div className="iframe__text">
        <div className="iframe__text-title">ƏLAQƏ</div>
        <ul>
          <li>
            <h1>
              <FontAwesomeIcon
                color="#9A6B45"
                width={22}
                height={22}
                icon={faLocationDot}
              />
              Ünvan
            </h1>
            <p>
              Xətai rayonu, 8 noyabr PR 15
              <br />
              &#34;Azure Busines Center&#34;
            </p>
          </li>
          <li>
            <h1>
              <FontAwesomeIcon
                color="#9A6B45"
                width={22}
                height={22}
                icon={faPhone}
              />
              Telefon
            </h1>
            <p>
              (+994) 70 431 04 01 (Qeydiyyat)
              <br />
              (+994) 55 431 04 01 (WhatsApp)
              <br />
              (+994) 12 409 57 40 (Ofis)
            </p>
          </li>
          <li>
            <h1>
              <FontAwesomeIcon
                color="#9A6B45"
                width={22}
                height={22}
                icon={faEnvelope}
              />
              Email
            </h1>
            <p>k.emin@vekilbaku.az</p>
          </li>
        </ul>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.449563795863!2d49.8745032!3d40.3786602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5b16f03049%3A0x8b233276e2e00004!2sAzure%20Business%20Center!5e0!3m2!1sru!2saz!4v1686914397432!5m2!1sru!2saz&zoom=10"
        allowFullScreen=""
        className="iframe"
        height="534px"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.449563795863!2d49.8745032!3d40.3786602!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5b16f03049%3A0x8b233276e2e00004!2sAzure%20Business%20Center!5e0!3m2!1sru!2saz!4v1686914397432!5m2!1sru!2saz&zoom=10"
          allowFullScreen=""
          className="iframe__mobile"
          height="534px"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="iframe__text-mobile">
          <ul>
            <li>
              <h1>
                <FontAwesomeIcon
                  color="#9A6B45"
                  width={22}
                  height={22}
                  icon={faLocationDot}
                />
                Ünvan
              </h1>
              <p>
                Xətai rayonu, 8 noyabr PR 15
                <br />
                &#34;Azure Busines Center&#34;
              </p>
            </li>
            <li>
              <h1>
                <FontAwesomeIcon
                  color="#9A6B45"
                  width={22}
                  height={22}
                  icon={faPhone}
                />
                Telefon
              </h1>
              <p>
                (+994) 70 431 04 01 (Qeydiyyat)
                <br />
                (+994) 55 431 04 01 (WhatsApp)
                <br />
                (+994) 12 409 57 40 (Ofis)
              </p>
            </li>
            <li>
              <h1>
                <FontAwesomeIcon
                  color="#9A6B45"
                  width={22}
                  height={22}
                  icon={faEnvelope}
                />
                Email
              </h1>
              <p>k.emin@vekilbaku.az</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
