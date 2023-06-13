import styles from "@/styles/Header.module.scss";
import Link from "next/link";
import logo from "@/public/images/header-logo.png";
import logoIMG from "@/public/images/header-bg.png";
import React, { useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const openMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  return (
    <header className={styles.header}>
      <div className={`header__inner ${isMobileOpen ? "mobile" : ""}`}>
        <div className="top container">
          <Image src={isMobileOpen ? logoIMG : logo} alt="Logo" />
          <button className="menu-btn" onClick={openMenu}>
            {isMobileOpen ? (
              <FontAwesomeIcon color="#fff" icon={faXmark} />
            ) : (
              <FontAwesomeIcon color="#2f2f2f" icon={faBars} />
            )}
          </button>
          <div className="list">
            <div className="list__item">
              <h1>
                <FontAwesomeIcon className="icon" icon={faPhone} />
                Telefon
              </h1>
              <a href="#"> (+994) 70 431 04 01</a>
            </div>
            <div className="list__item">
              <h1>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                Email
              </h1>
              <a href="#"> k.emin@vekilbaku.az </a>
            </div>
            <div className="list__item">
              <h1>
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                Ünvan
              </h1>
              <a href="#">
                Xətai rayonu, 8 noyabr PR 15 <br />
                &#34;Azure Busines Center&#34;
              </a>
            </div>
          </div>
        </div>
        <div className="down">
          <div className="container down__inner">
            <ul className="menu">
              <li>
                <Link href="#" className="menu__item-link">
                  Əsas səhifə
                </Link>
              </li>
              <li>
                <Link href="#" className="menu__item-link">
                  Haqqımda
                </Link>
              </li>
              <li>
                <Link href="#" className="menu__item-link">
                  Hüquqi xidmətlər
                  <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </Link>
              </li>
              <li>
                <Link href="#" className="menu__item-link">
                  Videoçarxlar
                </Link>
              </li>
              <li>
                <Link href="#" className="menu__item-link">
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link href="#" className="menu__item-link">
                  Az
                  <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
