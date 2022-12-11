import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ i }) => {
    const { name, _id, tools, details, image, liveSite, clientSiteCode, serverSiteCode } = i


    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions grid grid-cols-3 ">
                    <button className="btn "><a href={liveSite}>Live Website</a></button>
                    <button className="btn"><a href={clientSiteCode}>Client Code</a></button>
                    <button className="btn"><a href={serverSiteCode}>Server Code</a></button>
                    <button className="btn"><Link to={`/project/${_id}`}

                    >Details</Link></button>

                </div>
            </div>
        </div>
    );
};

export default ProjectCard;