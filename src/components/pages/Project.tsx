import s from "../Style/Project.module.css";
import previewManuspect from "../../assets/images/ManuspectIlustration.jpg";
import previewRsxb from "../../assets/images/RSXBILUSTRATION.jpg";
import { useNavigate } from "react-router-dom";

const Project = ({ projectsRef }) => {
  const navigate = useNavigate();

  const goTostoryManuspect = () => {
    navigate("/Manuspect");
  };

  const goTostoryRsxb = () => {
    navigate("/RSXB");
  };

  return (
    <>
      <div
        className={s.projectWrapper}
        ref={projectsRef}
        style={{ marginTop: "100px" }}
      >
        <div className={s.projectManuspect}>
          <div className={s.projectTitle}>
            <a>Manuspect · 2022 - 2023</a>
          </div>
          <div className={s.buttonStory}>
            <button onClick={goTostoryManuspect}>Подробнее о проекте →</button>
            <div className={s.imagePreviewManuspect}>
              <img src={previewManuspect} alt="Manuspect" />
            </div>
          </div>
        </div>
      </div>

      <div className={s.projectRsxb}>
        <div className={s.projectTitle}>
          <a>РСХБ-Интех · 2023 - н.в</a>
        </div>
        <div className={s.projectInfo}>
          <div className={s.buttonStory}>
            <button onClick={goTostoryRsxb}>Подробнее о проекте →</button>
          </div>
        </div>
        <div className={s.imagePreviewRsxb}>
          <img src={previewRsxb} alt="РСХБ" />
        </div>
      </div>
    </>
  );
};

export default Project;
