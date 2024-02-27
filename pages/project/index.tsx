
import Title from '@/components/Title';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';
// import { GetServerSideProps } from 'next';
import projects from '../../data/projects.json'

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {

                const response = await fetch("api/projects");
                console.log(response);
                const projects =  await response.json();
                console.log("projects",projects);
                setProjects(projects);
            }
        getProjects();
    }, [])

    return (
        <div className='wrapper'>
        <Title text='Projects' icon={<GiSkills />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project: any) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md p-4">
                    {/* <p className="text-lg font-semibold">ID: {project.id}</p> */}
                    <p className="text-gray-600"> {project.name}</p>
                    {/* <img src={project.image} alt={project.name} className="mt-2 rounded-md" /> */}
                </div>
            ))}
        </div>
        </div>
    );
};


export default Project;

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
//     const id = query.pid;
//     console.log('id',id);
//     const response =  await fetch("http://localhost:3000/api/projects")
//     const projects = await response.json();
//     // const project = projects.find((project: any) => project.id === 1);
//     const getProject = projects.find((project: { id: string | string[] | undefined; })=>project.id ==id);
//     console.log('getProject',getProject);


//     return {
//         props: {
//             project:getProject
//         }
//     };
// };



