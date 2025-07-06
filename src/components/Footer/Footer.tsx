import { useState } from "react";
import s from "../Style/Footer.module.css";
const Footer = () => {
  const [copied, setCopied] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "Javascript (ES5, ES6, ES7, ES8)",
    "React",
    "React-router",
    "Redux",
    "Redux-Saga",
    "React-query",
    "Redux-toolkit",
    "BrowserRouter",
    "Git",
    "Gitlab",
    "Github",
    "bitbucket",
    "ECharts",
    "Работа с API",
    "Swagger",
    "REST API",
    "JSON RPC",
    "SSE",
    "Websocket",
    "Typescript",
    "Jest",
    "Enzyme",
    "Cypress",
    "SPA",
    "unit тесты",
    "code review",
    "Webpack",
    "Vite",
  ];

  const copyEmail = () => {
    const email = "yura.dybov.45@bk.ru";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={s.skills}>
        {skills.map((skill, index) => (
          <span key={index} className={s.skillTag}>
            #{skill}
          </span>
        ))}
      </div>

      <div className={s.footerWrapper}>
        <div className={s.footerContent}>
          <div className={s.footerBtn}>
            <button className={s.buttonBack} onClick={scrollToTop}>
              ↑ Назад
            </button>
          </div>

          <div className={s.buttonContact}>
            <button
              className={s.contactBtn}
              onClick={() => window.open("https://t.me/pnrusdybov", "_blank")}
            >
              Связаться со мной
            </button>
            <button
              className={s.buttonBack}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/yuriy-dybov-91a25b351/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>
            <button
              className={s.buttonBack}
              onClick={() => window.open("https://github.com/pnruss", "_blank")}
            >
              Github
            </button>
            <button className={s.buttonBack} onClick={copyEmail}>
              {copied ? "Скопировано!" : "yura.dybov.45@bk.ru"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
