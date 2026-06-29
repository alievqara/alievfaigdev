import { useTranslation } from "react-i18next";
import Reveal from "../common/Reveal";
import ProjectGroup from "../projects/ProjectGroup";
import { projectService } from "../../services/projectService";

function SelectedWork() {
  const { t } = useTranslation();
  const groups = projectService.getGroupedProjects();

  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <p className="section-heading__eyebrow">{t("work.eyebrow")}</p>
            <h2 className="section-heading__title">{t("work.title")}</h2>
          </div>
        </Reveal>

        <div className="project-groups">
          {groups.map(({ category, projects }) => (
            <ProjectGroup
              key={category.id}
              titleKey={category.titleKey}
              projects={projects}
              compact={category.id === "landing" || category.id === "labs"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;