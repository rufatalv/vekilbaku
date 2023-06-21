import styles from "@/styles/Layout/Header.module.scss";
import Link from "next/link";
import logo from "@/public/images/header-logo.png";
import logoIMG from "@/public/images/header-bg.png";
import React, { useEffect, useState } from "react";

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
  const [isMobileOpen, setIsMobileOpen] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 220) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const openMenu = () => {
    const isNarrowScreen = window.matchMedia("(max-width: 991px)").matches;
    isNarrowScreen && setIsMobileOpen(!isMobileOpen);
    !isNarrowScreen && setIsMobileOpen(false);
  };

  return (
    <header className={styles.header}>
      <div
        className={`header__inner ${isMobileOpen ? "mobile" : ""} ${
          scroll ? "scroll" : ""
        }`}
      >
        <div className="top container">
          <div className="logoImage"></div>
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
              <li className="menu__item">
                <Link href="/" className="menu__item-link">
                  Əsas səhifə
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/about" className="menu__item-link">
                  Haqqımda
                </Link>
              </li>
              <li className="menu__item dropdown">
                <Link href="#services" scroll={true} className="menu__item-link">
                  Hüquqi xidmətlər
                  <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </Link>
                <ul className="dropdown__menu">
                  <li>
                    <Link href="/services/service">Mülki mübahisələr</Link>
                  </li>
                  <li>
                    <Link href="/services/service">
                      Kommersiya mübahisələri
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service">Cinayət işləri</Link>
                  </li>
                  <li>
                    <Link href="/services/service">İnzibati mübahisələr</Link>
                  </li>
                  <li>
                    <Link href="/services/service">
                      Korporativ hüquqi yardım
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/service">
                      Əmtəə nişanlarının dövlət qeydiyyatı
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <Link href="/videos" className="menu__item-link">
                  Videoçarxlar
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/contacts" className="menu__item-link">
                  Əlaqə
                </Link>
              </li>
              <li className="menu__item lang-dropdown">
                <Link href="#" className="menu__item-link">
                  Az
                  <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </Link>
                <ul className="lang__menu">
                  <li>
                    <a href="#">EN</a>
                  </li>
                  <li>
                    <a href="#">RU</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
