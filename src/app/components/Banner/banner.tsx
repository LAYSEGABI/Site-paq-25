"use client";

import { useEffect, useRef } from "react";
import styles from "./banner.module.css";

const Banner = () => {
  // Defina a referência como HTMLVideoElement
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        // Garante que o vídeo continue tocando
        videoRef.current.play().catch((error) => {
          console.log("Erro ao tentar retomar o vídeo:", error);
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.banner}>
      {/* Vídeo de fundo */}
      <video ref={videoRef} autoPlay loop muted className={styles.videoBackground}>
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
