import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // const project = projects.map(project =>{
    console.log(projects)
  }
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        
        <ProjectItem technologies={project}/>
      </div>
    </div>
  );


export default ProjectList;
