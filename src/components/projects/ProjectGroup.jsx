import { useTranslation } from "react-i18next";
import Reveal from "../common/Reveal";
import ProjectCard from "./ProjectCard";

function ProjectGroup({ titleKey, projects, compact = false }) {
  const { t } = useTranslation();

  return (
    <div className="project-group">
      <Reveal>
        <div className="project-group__heading">
          <h3>{t(titleKey)}</h3>
          <span>{projects.length}</span>
        </div>
      </Reveal>

      <div className={`project-grid ${compact ? "project-grid--compact" : ""}`}>
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.04}>
            <ProjectCard project={project} compact={compact} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default ProjectGroup;