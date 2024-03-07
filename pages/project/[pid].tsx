import Title from "@/components/Title";
import React, { useEffect, useState } from "react";
import { GiSkills } from "react-icons/gi";
import { GetServerSideProps } from "next";

const ProjectDetails = ({ project }: any) => {
  console.log("projects", project);

  return (
    <div className="wrapper">
      <Title text="Projects" icon={<GiSkills />} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-600"> {project.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  const id = query.pid;
  console.log("id", id);
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();
  // const project = projects.find((project: any) => project.id === 1);
  const getProject = projects.find(
    (project: { id: string | string[] | undefined }) => project.id == id
  );
  console.log("getProject", getProject);
  if (!getProject) {
    res.setHeader("Location", "/project");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: {
      project: getProject,
    },
  };
};
