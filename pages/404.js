import styles from "@/styles/Layout/404.module.scss";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className={styles.error}>
      <div className="bg"></div>
      <div className="container">
        <div className="text">
          <div className="error">404</div>
          <div className="notfound">Axtardığınız səhifə tapılmadı.</div>
          <Link className="btn" href='/'>Əsas səhifəyə qayıt</Link>
        </div>
      </div>
    </div>
  );
}
