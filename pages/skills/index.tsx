
import Title from '@/components/Title';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';
// import { GetServerSideProps } from 'next';
import skills from '../../data/skills.json'
const Skills = () => {
    const [skills, setSkills] = useState([]);


    useEffect(() => {
        const getSkills = async () => {

                const response = await fetch("api/skills");
                console.log(response);
                const skills =  await response.json();
                console.log("skills",skills);
                setSkills(skills);
            }
        getSkills();
    }, [])

    return (
        <div className='wrapper'>
        <Title text='Skills' icon={<GiSkills />} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill: any) => (
                <div key={skill.id} className="bg-white rounded-lg shadow-md p-4">
                    <p className="text-gray-600"> {skill.name}</p>
                    {/* <p className="text-gray-600"> {skill.level}</p> */}


                </div>
            ))}
        </div>
        </div>
    );
};


export default Skills;

