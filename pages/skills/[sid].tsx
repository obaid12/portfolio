import Title from '@/components/Title';
import React, { useEffect, useState } from 'react';
import { GiSkills } from 'react-icons/gi';
import skills from '../../data/skills.json'
import { GetServerSideProps } from 'next';

const SkillsDetails = ({ skills }: any) => {
    console.log('skills', skills);

    return (
        <div className='wrapper'>
            <Title text='Skills' icon={<GiSkills />} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    <div key={skills.id} className="bg-white rounded-lg shadow-md p-4">
                        <p className="text-lg font-semibold">ID: {skills.id}</p>
                        <p className="text-gray-600">Name: {skills.name}</p>
                        <p className="text-gray-600">Level: {skills.level}</p>

                    </div>

            </div>
        </div>
    );
};

export default SkillsDetails;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const id = query.sid;
    console.log('id', id);
    const response = await fetch("http://localhost:3000/api/skills")
    const skills = await response.json();
    // const project = projects.find((project: any) => project.id === 1);
    const getSkills = skills.find((skills: { id: string | string[] | undefined; }) => skills.id == id);
    console.log('getSkills', getSkills);

    return {
        props: {
            skills: getSkills
        }
    };
};