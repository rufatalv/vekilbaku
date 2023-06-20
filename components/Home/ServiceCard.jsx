import styles from "@/styles/Home/ServicesCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function ServiceCard({ data }) {
  const { title, description, image } = data;
  return (
    <div
      className={`${styles.services} services-item`}
    >
      <Image src={image} alt="logo" width={55} height={55} />
      <h1 className="service__title">{title}</h1>
      <p className="service__description">{description}</p>
      <Link className="service__link"  href="/services/service">
        Ətraflı
      </Link>
    </div>
  );
}
