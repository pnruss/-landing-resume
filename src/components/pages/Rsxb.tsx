import s from "../Style/Rsxb.module.css";
import image1 from "../../assets/images/rsxbprevievs.jpg";
import { useNavigate } from "react-router-dom";

const StoryRsxb = () => {
  const navigate = useNavigate();
  return (
    <div className={s.RsxbStory}>
      <div className={s.contentStory}>
        <div className={s.buttonBackWrapper}>
          <button className={s.backBtn} onClick={() => navigate(-1)}>
            ← Назад
          </button>
        </div>
        <div className={s.title}>
          <h1>РСХБ-ИНТЕХ</h1>
        </div>

        <div className={s.imgWrapper}>
          <img src={image1} alt="RSXB project preview" />
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
                <span className={s.infoText}>12 человек</span>
              </p>
              <p>
                Время работы <br />
                <span className={s.infoText}>Март 2023 — настоящее время</span>
              </p>
            </div>
          </div>

          <div className={s.aboutProject}>
            <div className={s.infoPoints}>
              <p className={s.titlePoints}>О проекте</p>
              <p>
                Система эквайринга — платформа для мониторинга, управления и
                аналитики тысяч POS-терминалов по всей стране. Проект помогает
                банку повышать надежность транзакций и улучшать клиентский опыт,
                предоставляя актуальную информацию о статусах терминалов в
                реальном времени. Моя задача — создать удобный интерфейс для
                мониторинга и аналитики, способный работать с большими объемами
                данных и поддерживать быструю реакцию на события в системе.
              </p>
            </div>
          </div>

          <div className={s.infoPoints}>
            <p className={s.titlePoints}>Задачи и вызовы</p>
            <ul className={s.infoPointsUl}>
              <li>
                Реализовать карту для отображения тысяч терминалов с
                кластеризацией и аналитикой
              </li>
              <li>
                Обеспечить обновление статусов в реальном времени через
                WebSocket
              </li>
              <li>Упростить пользовательские сценарии для поддержки</li>
              <li>Снизить нагрузку на браузер при больших данных</li>
              <li>Поддерживать чистую архитектуру и DX</li>
            </ul>
          </div>

          <div className={s.infoPoints}>
            <p className={s.titlePoints}>Ключевые задачи и результаты</p>
            <ul className={s.infoPointsUl}>
              <li>
                Разработал интерактивную карту мониторинга на Yandex Maps API
              </li>
              <li>Внедрил WebSocket для обновлений статусов терминалов</li>
              <li>Создал механизм синхронизации контактов</li>
              <li>Оптимизировал UX через подсказки и формы</li>
              <li>Внедрил Redux Toolkit, сократил код на 20%</li>
              <li>Настроил ESLint + TypeScript для качества кода</li>
            </ul>
          </div>

          <div className={s.infoPoints}>
            <p className={s.titlePoints}>Взаимодействие в команде</p>
            <p>
              Тесно работал с backend-разработчиками, обсуждая архитектуру API и
              интеграцию real-time обновлений через WebSocket. Проводил
              код-ревью, поддерживал общие стандарты разработки и активно
              участвовал в принятии решений по развитию фронтенда. Это дало мне
              глубокое понимание того, как выстраивать надежные системы обмена
              данными между фронтендом и сервером.
            </p>
          </div>

          <div className={s.infoPoints}>
            <p className={s.titlePoints}>Итог</p>
            <p>
              Проект в РСХБ-Интех дал мне опыт разработки интерфейса для
              высоконагруженной B2B-системы, где важно сочетание UX,
              производительности и надежности. Я понял значимость деталей,
              архитектуры и качества кода, а также научился быстро
              адаптироваться к требованиям бизнеса и пользователей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryRsxb;
