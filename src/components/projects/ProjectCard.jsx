import { useTranslation } from "react-i18next";
import { getLocalizedText } from "../../utils/getLocalizedText";

function ProjectCard({ project, compact = false }) {
  const { i18n } = useTranslation();
  const description = getLocalizedText(project.description, i18n.language);

  return (
    <article className={`project-card ${compact ? "project-card--compact" : ""}`}>
      <div className="project-card__top">
        <div>
          <p className="project-card__type">{project.type}</p>
          <h3>{project.title}</h3>
        </div>

        <span className="project-card__status">{project.status}</span>
      </div>

      <p className="project-card__description">{description}</p>

      <div className="project-card__stack">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div className="project-card__actions">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            Live →
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;