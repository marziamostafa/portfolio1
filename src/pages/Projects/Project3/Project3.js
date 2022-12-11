import React from 'react';

const Project3 = () => {
    const data = {
        "_id": 3,
        "name": "Learn Online",
        "tools": [
            "React JS",
            "Node JS",
            "MongoDB",
            "React Router",
            "Express JS",
            "Firebase",
            "Bootstrap"
        ],
        "image": "https://i.ibb.co/cCB9Yct/image.png",
        "liveSite": "https://b610-learning-platform.firebaseapp.com/",
        "clientSiteCode": "https://github.com/marziamostafa/assignment10-learning_platform_client_side",
        "serverSiteCode": "https://github.com/marziamostafa/assignment10-learning_platform_server_side",
        "details": "A website that provides courses to gain knowledge",
        "img1": "https://i.ibb.co/cr7zpNg/image.png",
        "img2": "https://i.ibb.co/KmqZ10V/image.png",
        "img3": "https://i.ibb.co/zZ8GBSd/image.png",
        "bulletPoints": [
            "1. Can change into dark mode or light mode.  ",
            "2. Login with email and password, github and goggle.",
            "3. Private route added",
            "4.  User name and picture added on the header. ",
            "5. Premium section added"
        ]
    }
    return (
        <div>
            <h1 className='text-5xl text-center my-4'>{data.name}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className="card  bg-base-100">
                    <figure><img className='rounded-2xl' src={data.img1} alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100">
                    <figure><img className='rounded-2xl' src={data.img2} alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100">
                    <figure><img className='rounded-2xl' src={data.img3} alt="Shoes" /></figure>
                </div>
            </div>

            <div className="overflow-x-auto my-4">
                <table className="table table-compact w-full text-center">
                    <thead>
                        <tr>
                            <td>Features</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.bulletPoints.map(point => <tr>
                                <td>{point}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <div className="btn-group btn-group-vertical w-full">
                <button className="btn "><a href={data.liveSite}>Live website</a></button>
                <button className="btn"><a href={data.clientSiteCode}>Client site code</a></button>
                <button className="btn"><a href={data.serverSiteCode}>Server site code</a></button>
            </div>
        </div>
    );
};

export default Project3;