import styles from "@/styles/Hero.module.scss";

export default function Hero({}) {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className="text">
          <h1>Sizə peşəkar vəkilin hüquqi yardımı lazımdır?</h1>
          <p>O zaman doğru ünvandasınız.</p>
          <div className="btn">
            <button>Əlaqə</button>
          </div>
        </div>
      </div>
    </section>
  );
}
