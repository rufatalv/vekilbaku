import styles from "@/styles/ServicesCard.module.scss";
import Image from "next/image";
export default function ServiceCard({ data }) {
  const { title, description, image } = data;
  return (
    <div className={styles.services}>
      <Image src={image} alt="logo" width={55} height={55} />
      <h1 className="service__title">MÜLKİ MÜBAHİSƏLƏR</h1>
      <p className="service__description">{description}</p>
      <a className="service__link" href="#">Ətraflı</a>
    </div>
  );
}
