import styles from "@/styles/Layout/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="footer__up">
        <div className="container">
          <img src="/images/footer-logo.png" />
          <div className="footer__links">
            <ul>
              <li>
                <Link href="#">Əsas səhifə</Link>
              </li>
              <li>
                <Link href="/about">Haqqımda</Link>
              </li>
              <li>
                <Link href="#">Videoçarxlar</Link>
              </li>
              <li>
                <Link href="/contacts">Əlaqə</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Mülki mübahisələr</Link>
              </li>
              <li>
                <Link href="#">Kommersiya mübahisələri </Link>
              </li>
              <li>
                <Link href="#">Cinayət işləri</Link>
              </li>
              <li>
                <Link href="#">İnzibati mübahisələr</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Korporativ hüquqi yardım</Link>
              </li>
              <li>
                <Link href="#">Əmtəə nişanlarının dövlət qeydiyyatı</Link>
              </li>
            </ul>
          </div>
          <div className="footer__contacts">
            <div className="footer__contacts-item">
              <FontAwesomeIcon color="#fff" width={9} icon={faFacebookF} />
            </div>
            <div className="footer__contacts-item">
              <FontAwesomeIcon color="#fff" width={16} icon={faInstagram} />
            </div>
            <div className="footer__contacts-item">
              <FontAwesomeIcon color="#fff" width={16} icon={faTelegramPlane} />
            </div>
            <div className="footer__contacts-item">
              <FontAwesomeIcon color="#fff" width={16} icon={faWhatsapp} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__down">
        <div className="container">
          <p>© 2021 Vekilbaku.az. Müəllif hüquqları qorunur.</p>
          <p>Sayt Jedai tərəfindən yaradılmışdır.</p>
        </div>
      </div>
    </div>
  );
}
