import styles from "@/styles/Services.module.scss";
import ServiceCard from "./ServiceCard";

const SERVICES = [
  {
    id: 1,
    title: "MÜLKİ MÜBAHİSƏLƏR",
    description:
      "Ailə, nikah, əmlak mübahisələri, vərəsəlik işlərində vəkil yardımı",
    image: "/images/services-1.png",
  },
  {
    id: 2,
    title: "KOMMERSİYA MÜBAHİSƏLƏRİ",
    description:
      "Kommersiya müqaviləsinin icrası, müflisləşmə hallarında hüquqşünas məsləhəti",
    image: "/images/services-2.png",
  },
  {
    id: 3,
    title: "CİNAYƏT İŞLƏRİ",
    description:
      "Cinayət işi hadisələrində ixtisaslı və təcrübəli vəkil xidməti və müşayiəti",
    image: "/images/services-3.png",
  },
  {
    id: 4,
    title: "İNZİBATİ MÜBAHİSƏLƏR",
    description:
      "Pensiya, veteranlıq və qeydiyyat kimi inzibati mübahisələrin həlli",
    image: "/images/services-4.png",
  },
  {
    id: 5,
    title: "KORPORATİV HÜQUQİ YARDIM",
    description:
      "Hüquqi şəxsin təsis edilməsi, nizamnamə kapitalının dəyişdirilməsi və s. xidmətlər",
    image: "/images/services-5.png",
  },
  {
    id: 6,
    title: "ƏMTƏƏ NİŞANLARININ DÖVLƏT QEYDİYYATI",
    description:
      "Biznesinizin və ya məhsulunuzun əmtəə nişanlarının qeydiyyatdan keçirilməsi",
    image: "/images/services-6.png",
  },
];

export default function Services() {
  return (
    <div className={`${styles.services}`} id="services">
      <div className="services__title">HÜQUQİ Xİdmətlər</div>
      <div className="services__list">
        {SERVICES &&
          SERVICES.map((service, idx) => (
            <ServiceCard key={idx} data={service} />
          ))}
      </div>
    </div>
  );
}
