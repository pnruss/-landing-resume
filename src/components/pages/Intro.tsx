import s from "../Style/Intro.module.css";

const Intro = () => {
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
        <div className={s.selectedProject}>
          <button className={s.buttonProject}>
            Мои проекты <span>↓</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
