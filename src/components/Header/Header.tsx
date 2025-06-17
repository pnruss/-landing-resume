import s from "./Header.module.css";
import logo from "../../assets/images/Logo-project.jpg";

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <div className={s.header}>
        <div className={s.logo}>
          <img src={logo} alt="Logo" width={50} />
        </div>

        <div className={s.centerBlock}>
          <div className={s.headerNav}>
            <button className={s.buttonHeader}>About me</button>
            <button className={s.buttonHeader}>Projects</button>
            <button className={s.buttonHeader}>Skills</button>
          </div>

          <div className={s.headerContact}>
            <button className={s.buttonHeader}>Telegram</button>
            <button className={s.buttonHeader}>LinkedIn</button>
            <button className={s.buttonHeader}>GitHub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
