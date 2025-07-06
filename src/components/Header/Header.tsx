import { useState } from "react";
import s from "./Header.module.css";

interface HeaderProps {
  scrollToAboutMe: () => void;
  scrollToProjects: () => void;
}

const Header: React.FC<HeaderProps> = ({
  scrollToAboutMe,
  scrollToProjects,
}) => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    const email = "yura.dybov.45@bk.ru";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 сек
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  };
  return (
    <div className={s.headerWrapper}>
      <div className={s.header}>
        <div className={s.centerBlock}>
          <div className={s.headerNav}>
            <button className={s.buttonHeader} onClick={scrollToAboutMe}>
              About me
            </button>
            <button className={s.buttonHeader} onClick={scrollToProjects}>
              Projects
            </button>
            <button className={s.buttonHeader}>Skills</button>
          </div>

          <div className={s.headerContact}>
            <button
              className={s.buttonHeader}
              onClick={() => window.open("https://t.me/pnrusdybov", "_blank")}
            >
              Telegram
            </button>
            <button
              className={s.buttonHeader}
              onClick={() => window.open("https://github.com/pnruss", "_blank")}
            >
              Github
            </button>

            <button className={s.buttonHeader} onClick={copyEmail}>
              {copied ? "Скопировано!" : "Copy Mail"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
