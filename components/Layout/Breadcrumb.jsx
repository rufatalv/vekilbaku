import styles from "@/styles/Layout/Breadcrumb.module.scss";
import { faSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Breadcrumb({ title, service }) {
  return (
    <div className={`${styles.breadcrumb} breadcrumb`}>
      <div className="breadcrumb__inner">
        <h2 className="title">{title}</h2>
        <ul className="breadcrumb breadcrumb-style-2">
          <li>
            <Link href="/">Əsas səhifə</Link>
            <FontAwesomeIcon
              className="icon"
              color="#fff"
              width={15}
              icon={faSlash}
            />
          </li>
          {service && (
            <li>
              <Link href="/">Hüquqi xidmətlər</Link>
              <FontAwesomeIcon
                className="icon"
                color="#fff"
                width={15}
                icon={faSlash}
              />
            </li>
          )}
          <li>{title}</li>
        </ul>
      </div>
    </div>
  );
}
