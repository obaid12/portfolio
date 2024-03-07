import Title from '@/components/Title';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';
import { GetServerSideProps } from 'next';

const SkillsDetails = ({ skills }: any) => {
    console.log('skills', skills);

    return (
        <div className='wrapper'>
            <Title text='Skills' icon={<GiSkills />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <div key={skills.id} className="bg-white rounded-lg shadow-md p-4">
                        <p className="text-gray-600"> {skills.name}</p>

                    </div>

            </div>
         </div>
    );
};

export default SkillsDetails;



export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    const id = query.sid;
    console.log('id', id);
    const response = await fetch("http://localhost:3000/api/skills")
    const skills = await response.json();

    const getSkills = skills.find((skills: { id: string | string[] | undefined; }) => skills.id == id);
    console.log('getSkills', getSkills);

    if (!getSkills) {

        res.setHeader('Location', '/skills');
        res.statusCode = 302;
        res.end();
        return { props: {} };
    }

    return {
        props: {
            skills: getSkills,
        }
    };
};
