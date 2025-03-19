"use client";

import Image from "next/image";
import imagemSetaAbaixo from "./img/setaAbaixo.svg";
import styles from "./banner.module.css";
import history from "./NossaHistoria.module.css";
import { useState } from "react";

import imgBack1 from "./img/ALANA-XP-113 2.png";
import imgBack2 from "./img/VISITA SOHO-2 3.png";
import imgBack3 from "./img/history_3.jpg";


const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.banner}>
      {/* Vídeo de fundo */}
      <video autoPlay loop muted className={styles.videoBackground}>
      <source src="/videoBack.mp4" type="video/mp4" />

        Seu navegador não suporta vídeos.
      </video>

      {/* Conteúdo do banner */}
      <div className={styles.content}>
        <h2>CONECTAR E TRANSFORMAR!</h2>
        <h3>
          Somos o <br />
          <strong>Prototipando a Quebrada, </strong>
          mas pode chamar de <strong>PAQ!</strong>
        </h3>
        <p>
          Nossa missão é <strong>conectar a juventude da periferia</strong> ao
          conhecimento e oportunidades do{" "}
          <strong>ecossistema de tecnologia!</strong>
        </p>
      </div>
    </div>
  );
};

export default Banner;
