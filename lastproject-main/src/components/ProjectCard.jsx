import React from "react";

  const FormatDescription = (description) => {
    return description.substring(0, 50) + "...";
  };
const ProjectCard = (props) => {
  const { project, onEdit } = props;
  const handleEditClick = (projectBeingEdited) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className="card">
      <img src={project.strCategoryThumb} alt={project.strCategory} />
      <section className="section_light">
          <h5 className="strong">
            <strong>{project.strCategory}</strong>
          </h5>
          <p>{FormatDescription(project.strCategoryDescription)}</p>
        <button className="bordered" onClick={() => handleEditClick(project)}>
          <span className="icon-edit"></span>
          Edit
        </button>
      </section>
    </div>
  );
};

export default ProjectCard;
