import React from "react";
import icon from "../assets/img/2.png";
import style from "./Footer.module.css";
export default function Footer() {
    return (
        <footer>
            <div className={style.brand}>
                <img src={icon} alt="Personal Development soon" height={100} width={100}/>
            </div>
            <section className={style.siteMapLinks}>
                <h2>Links Úteis</h2>
                <ul>
                    <li><a className={style.link} href="/">Início</a></li>
                    <li><a className={style.link} href="https://github.com/DayaneNogueira/reactPersonalDevelopment.git">Código Fonte</a></li>
                </ul>
            </section>
        </footer>
    )
}