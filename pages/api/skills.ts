import { NextApiRequest, NextApiResponse } from "next";
import skills from '../../data/skills.json'
const SkillsAPI = (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method === "GET") {

        res.status(200).json(skills);

    }

};

export default SkillsAPI;