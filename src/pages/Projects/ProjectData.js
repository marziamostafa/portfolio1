import React, { useEffect, useState } from 'react';
import Projects from './Projects';

const ProjectData = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])
    console.log(info)
    return (
        <div>

            {
                info.map(i => <Projects
                    key={i.id}
                    i={i}
                ></Projects>)
            }


        </div >

    );
};

export default ProjectData;