import { projects } from "../data/projects";
import { projectCategories } from "../data/projectCategories";

function sortByPriority(items) {
  return [...items].sort((a, b) => a.priority - b.priority);
}

export const projectService = {
  getAll() {
    return sortByPriority(projects);
  },

  getFeatured() {
    return sortByPriority(projects.filter((project) => project.featured));
  },

  getByCategory(categoryId) {
    return sortByPriority(
      projects.filter((project) => project.category === categoryId)
    );
  },

  getVisibleCategories() {
    return Object.values(projectCategories)
      .sort((a, b) => a.priority - b.priority)
      .filter((category) => this.getByCategory(category.id).length > 0);
  },

  getGroupedProjects() {
    return this.getVisibleCategories().map((category) => ({
      category,
      projects: this.getByCategory(category.id),
    }));
  },
};