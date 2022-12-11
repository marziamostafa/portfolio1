import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from '../../Projects/Projects';
import ProjectCard from './ProjectCard';

const Project = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 bg-slate-600 pb-5'>
                {
                    info.map(i => <ProjectCard
                        key={i.id}
                        i={i}
                    ></ProjectCard>)
                }
            </div>

        </div >

    );
};

export default Project;