import Title from '@/components/Title';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';

interface Skill {
    id: number;
    name: string;
}

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await fetch("/api/skills");
                const skillsData = await response.json();
                setSkills(skillsData);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        };

        getSkills();
    }, []);

    return (
        <div className='wrapper'>
            <Title text='Skills' icon={<GiSkills />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                     <Link key={skill.id} href={`/skills/${skill.id}`}>
                        <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <p className="text-gray-600">{skill.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Skills;




