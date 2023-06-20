import { Services } from "@/components/Home";
import Breadcrumb from "@/components/Layout/Breadcrumb";
import styles from "@/styles/Services/Service.module.scss";
export default function Service() {
  return (
    <>
      <Breadcrumb service="true" title={"Mülki mübahisələr"} />
      <div className={styles.service}>
        <div className="bg"></div>
        <div className="container">
          <div className="content">
            <div className="content__inner">
              <div className="text">
                <p>
                  Hüquqları pozulmuş şəxs öz qanuni mənafeyinin müdafiəsi üçün
                  bir qayda olaraq məhkəməyə müraciət edir. Buna baxmayaraq
                  hüquqların müdafiəsini peşəkar vəkilə həvalə etmək arzulanan
                  nəticəyə daha tez və qısa yolla nail olmağa imkan yaradır.
                </p>
                <p>
                  Nəzərə almaq lazımdır ki, qanunvericilik müxtəlif iddia
                  tələbləri üçün ayrı-ayrı müddətlər (iddia müddətləri və kəsici
                  müddətlər) müəyyən etmişdir ki, bu müddətlərin ötürülməsi
                  gələcəkdə hüquqların bərpa olunmasını mümkünsüz edə bilər.
                </p>
                <p>
                  Bununla yanaşı birinci istansiya məhkəmələrində mülki işlərə
                  baxılan zaman lazımi sübutların əldə olunaraq mülki işə əlavə
                  olunmaması uğursuz nəticəyə gətirib çıxara bilər. Bu səbəbdən
                  də mən sizə mülki işlər üzrə keyfiyyətli və əlçatan hüquqi
                  yardım təklif edirəm:
                </p>
              </div>
              <img src="/images/service-1.png" alt="" />
            </div>
            <div className="content__inner">
              <div className="text">
                <p>
                  Hüquqları pozulmuş şəxs öz qanuni mənafeyinin müdafiəsi üçün
                  bir qayda olaraq məhkəməyə müraciət edir. Buna baxmayaraq
                  hüquqların müdafiəsini peşəkar vəkilə həvalə etmək arzulanan
                  nəticəyə daha tez və qısa yolla nail olmağa imkan yaradır.
                </p>
                <p>
                  Nəzərə almaq lazımdır ki, qanunvericilik müxtəlif iddia
                  tələbləri üçün ayrı-ayrı müddətlər (iddia müddətləri və kəsici
                  müddətlər) müəyyən etmişdir ki, bu müddətlərin ötürülməsi
                  gələcəkdə hüquqların bərpa olunmasını mümkünsüz edə bilər.
                </p>
                <p>
                  Bununla yanaşı birinci istansiya məhkəmələrində mülki işlərə
                  baxılan zaman lazımi sübutların əldə olunaraq mülki işə əlavə
                  olunmaması uğursuz nəticəyə gətirib çıxara bilər. Bu səbəbdən
                  də mən sizə mülki işlər üzrə keyfiyyətli və əlçatan hüquqi
                  yardım təklif edirəm:
                </p>
              </div>
              <img src="/images/service-2.png" alt="" />
            </div>
          </div>
          <Services />
        </div>
      </div>
    </>
  );
}
