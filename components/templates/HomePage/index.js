import Image from "next/image";
import React from "react";
import styles from "./HomePage.module.css";

import Link from "next/link";

import Card from "@/components/modules/card.js";
import ImageSlider from "@/components/modules/ImageSlider";
import { e2p } from "@/core/utils/convert";
import SearchForm from "../SearchForm";

function HomePage({ data }) {
  if (!data.length) return <p>نتیجه ای یافت نشد.</p>;
  console.log(data);

  return (
    <div className={styles.container}>
      <Image
        src="/images/Untitled_design.png"
        alt="baner"
        width={1440}
        height={350}
        priority
        className={styles.baner}
      />
      <h3 className={styles.label}>
        <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
      </h3>
      <SearchForm />
      <div className={styles.sub}>
        <h2>همه تور ها</h2>
        <div className={styles.subContainer}>
          {data.map((tour) => (
            <Card key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
      <div className={styles.phoneCall}>
        <div className={styles.professional}>
          <h2>
            خرید تلفی از <span>تورینو</span>
          </h2>
          <p>به هرکجا که میخواهید!</p>
          <Image
            src="/images/professional.png"
            alt="professional"
            width={308}
            height={225}
          />
        </div>
        <div className={styles.tell}>
          <div>
            <p>{e2p("021-1840")}</p>
            <Image
              className={styles.tellImage}
              src="/images/call.png"
              alt="call"
              width={24}
              height={24}
            />
          </div>

          <Link href="#">اطلاعات بیشتر</Link>
        </div>
      </div>
      <div className={styles.why__torino}>
        <div>
          <h3>
            چرا<span>تورینو</span>؟
          </h3>
          <h6>تور طبیعت گردی و تاریخی </h6>
          <p>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
        <div className={styles.imageSlider}>
          <ImageSlider />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.about__torino}>
        <div className={styles.torino_section}>
          <Image
            src="/images/Group 16.png"
            width={121.42}
            height={109.03}
            alt="about"
          />
          <div>
            <h3>بصرفه ترین قیمت</h3>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>
        <div className={styles.torino_section}>
          <Image
            src="/images/Group 17.png"
            width={109.03}
            height={99.12}
            alt="about"
          />
          <div>
            <h3>پشتیبانی</h3>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>
        <div className={styles.torino_section}>
          <Image
            src="/images/Group 18.png"
            width={104.08}
            height={104.08}
            alt="about"
          />
          <div>
            <h3>رضایت کاربران</h3>
            <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
