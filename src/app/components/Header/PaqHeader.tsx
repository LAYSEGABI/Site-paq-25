"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../button";
import Menu from "../Menu/Menu"
import style from "./PaqHeader.module.css";
import logoPaq from "./img/logo-paq.png";
import { list } from "postcss";


export default function PaqHeader() {

  return (

    
    <div className={style.container}>
      <div className={style.itens}>
        <Image src={logoPaq} alt="Logo PAQ" width={35} height={35} />
        <a href="#quem-somos">QUEM SOMOS</a>
        <a href="#papel-do-paq">O QUE FAZEMOS</a>
        <a href="#juntoComAGente"> QUEM FAZ PARTE</a>
      </div>
      <div className={style.btns}>
        <Button title={"PARTICIPE"} width="109px" height="32px" href={"#outrasFormasDeFazerParte"} />
        <Button title={"APOIE"} width="77px" height="32px" href={"#como-apoiar"} />
      </div>
    </div>
  );
}
