import s from "../Style/Intro.module.css";
interface IntroProps {
  scrollToProjects: () => void;
}

const Intro: React.FC<IntroProps> = ({ scrollToProjects }) => {
  return (
    <>
      <div className={s.introWrapper}>
        <div className={s.introContent}>
          <div className={s.title}>
            <h1>
              <span className={s.helloText}>Привет, я Юрий</span>
              <br />
              Фронтенд-разработчик.
            </h1>
          </div>
        </div>
        <div className={s.textMotto}>
          <h3>Чистый код. Чёткий интерфейс. Реальные решения.</h3>
        </div>
        <div className={s.selectedProject}>
          <button className={s.buttonProject} onClick={scrollToProjects}>
            Мои проекты
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
