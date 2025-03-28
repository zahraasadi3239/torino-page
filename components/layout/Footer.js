import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.footer}>
        <div className={styles.footer_side}>
          <div className={styles.list}>
            <div className={styles.listRigth}>
              <h4>تورینو</h4>
              <ul>
                <li>
                  <Link href="/">درباره ما</Link>
                </li>
                <li>
                  <Link href="/">تماس با ما</Link>
                </li>
                <li>
                  <Link href="/">چرا تورینو</Link>
                </li>
                <li>
                  <Link href="/">بیمه مسافرتی</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listLeft}>
              <h4>خدمات مشتریان</h4>
              <ul>
                <li>
                  <Link href="#">پشتیبانی آنلاین</Link>
                </li>
                <li>
                  <Link href="#">راهنمای خرید</Link>
                </li>
                <li>
                  <Link href="#">راهنمای استرداد</Link>
                </li>
                <li>
                  <Link href="#">پرسش و پاسخ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.list_left}>
            <div className={styles.torino}>
              <Image
                src="/images/Torino.png"
                width={146}
                height={44}
                alt="torino"
                className={styles.torino}
              />
              <p>
                تلفن پشتیبانی:<span>8574-021</span>
              </p>
            </div>

            <div className={styles.license}>
              <Image
                src="/images/aira.png"
                alt="license"
                width={68}
                height={74}
              />
              <Image
                src="/images/samandehi.png"
                alt="license"
                width={68}
                height={74}
              />
              <Image
                src="/images/ecunion.png"
                alt="license"
                width={68}
                height={74}
              />
              <Image
                src="/images/passenger-rights.png"
                alt="license"
                width={68}
                height={74}
              />
              <Image
                src="/images/state-airline.png"
                alt="license"
                width={68}
                height={74}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.line1}></div>

      <p className={styles.content}>
        کلیه حقوق این وب سایت متعلق به تورینو میباشد.
      </p>
    </>
  );
}

export default Footer;
