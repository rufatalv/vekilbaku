import styles from "@/styles/Videos.module.scss";

const VIDEOS = [
  {
    id: 1,
    title: "Vəkil Emin Kiçikbəyovun video çarxı",
    image: "/images/video-1.png",
  },
  {
    id: 2,
    title: "Vəkil Emin Kiçikbəyovun video çarxı",
    image: "/images/video-2.png",
  },
  {
    id: 3,
    title: "Vəkil Emin Kiçikbəyovun video çarxı",
    image: "/images/video-3.png",
  },
];
export default function Videos() {
  return (
    <div className={styles.videos}>
      <div className="bg"></div>
      <div className="container">
        <div className="videos__title">VİDEOÇARXLAR</div>
        <div className="videos__list">
          {VIDEOS &&
            VIDEOS.map((video) => (
              <div key={video.id} className="video">
                <img src={video.image} alt="thumbnail" />
                <div className="video__text">
                  <h1>{video.title}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
