import Title from '@/components/Title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';

interface Project {
    id: number;
    name: string;

}

const Project = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const projectsData = await response.json();
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        getProjects();
    }, []);

    return (
        <div className='wrapper'>
            <Title text='Projects' icon={<GiSkills />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <Link key={project.id} href={`/project/${project.id}`}>
                        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <p className="text-gray-600">{project.name}</p>
                        </div>
                    </Link>
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


