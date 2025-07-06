import s from "../Style/Manuspect.module.css";
import image1 from "../../assets/images/imageManuspect.png";
import { useNavigate } from "react-router-dom";

const Manuspect = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={s.ManuspectStory}>
        <div className={s.contentStory}>
          <div className={s.buttonBackWrapper}>
            <button className={s.backBtn} onClick={() => navigate(-1)}>
              ← Назад
            </button>
          </div>
          <div className={s.title}>
            <h1> MANUSPECT</h1>
          </div>
          <div className={s.imgWrapper}>
            <img src={image1} />
          </div>
          <div className={s.contentWrapper}>
            <div className={s.infoPointsGraph}>
              <div className={s.graph}>
                <p>
                  Должность <br />
                  <span className={s.infoText}>Frontend-разработчик</span>
                </p>
                <p>
                  Команда <br />
                  <span className={s.infoText}>11 человек</span>
                </p>
                <p>
                  Время работы <br />
                  <span className={s.infoText}>Январь 2022 - Март 2023</span>
                </p>
              </div>
            </div>

            <div className={s.aboutProject}>
              <div className={s.infoPoints}>
                <p className={s.titlePoints}>О проекте</p>
                <p>
                  <span className={s.infoText}>Manuspect</span> — платформа для
                  мониторинга, анализа и оптимизации работы отделов продаж.{" "}
                  <br />
                  Проект направлен на автоматизацию бизнес-процессов и помогает
                  менеджерам и руководителям <br /> быстро принимать решения на
                  основе актуальных данных.
                </p>
                <p>
                  Моя задача — создать удобный, отзывчивый интерфейс, который{" "}
                  <br />
                  выдерживает работу с большими объемами информации и сложной
                  бизнес-логикой.
                </p>
              </div>
            </div>
            <div className={s.contentWrapper}>
              <div className={s.infoPoints}>
                <p className={s.titlePoints}>Задачи и вызовы</p>
                <ul className={s.infoPointsUl}>
                  <li>
                    Сделать интерфейс адаптивным и удобным на всех
                    устройствах{" "}
                  </li>
                  <li>
                    Обеспечить обновление данных в реальном времени без потери
                    производительности
                  </li>
                  <li>
                    {" "}
                    Визуализировать сложную аналитику и показатели так, чтобы их
                    было просто понять{" "}
                  </li>
                  <li>
                    Оптимизировать рендеринг, чтобы платформа работала быстро и
                    плавно даже при больших нагрузках
                  </li>
                </ul>
              </div>
              <div className={s.infoPoints}>
                <p className={s.titlePoints}>Ключевые задачи и результаты</p>
                <ul className={s.infoPointsUl}>
                  <li>
                    Разработал интерфейс AI-ассистента, который помогает
                    менеджерам во время переговоров
                  </li>
                  <li>
                    Создал аналитические дашборды с большим количеством графиков
                    и показателей на базе Recharts
                  </li>
                  <li>
                    Использовал Material-UI для создания адаптивных, современных
                    и удобных компонентов
                  </li>
                  <li>
                    Оптимизировал рендеринг ключевых страниц, сократив время
                    загрузки на 30%
                  </li>
                  <li>
                    Внедрил Redux Toolkit — это помогло сократить объем кода на
                    20% и упростить управление состоянием
                  </li>
                  <li>
                    Покрыл ключевые компоненты тестами с Jest и Cypress для
                    повышения стабильности и качества продукта
                  </li>
                  <li>
                    Оптимизировал графики на ECharts, уменьшив время загрузки на
                    15% и улучшив пользовательский опыт
                  </li>
                </ul>
              </div>

              <div className={s.infoPoints}>
                <p className={s.titlePoints}>Взаимодействие в команде</p>
                <p>
                  Тесно сотрудничал с backend-разработчиками — участвовал в
                  обсуждениях архитектуры, <br />
                  интегрировал API, настраивал обмен данными через WebSocket.
                  <br />
                  Проводил код-ревью вместе с командой поддерживал высокий
                  уровень качества кода. <br />
                  Такой опыт помог мне глубже понять, как строится
                  взаимодействие фронтенда и сервера в реальном времени.
                </p>
              </div>
              <div className={s.infoPoints}>
                <p className={s.titlePoints}>Итог</p>
                <p>
                  Проект Manuspect дал мне не только опыт работы с современными
                  технологиями и большой командой, <br /> но и научил важности
                  качества кода, коммуникации и постоянной оптимизации. Работа
                  была сложной <br /> и интересной — я горжусь тем, что смог
                  внести реальный вклад в развитие платформы, которая помогает{" "}
                  <br />
                  бизнесам становиться эффективнее.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manuspect;
