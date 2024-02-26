import { NextApiRequest, NextApiResponse } from "next";
import projects from '../../data/projects.json'
const ProjectAPI = (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method === "GET") {

        res.status(200).json(projects);

    }

};

export default ProjectAPI;