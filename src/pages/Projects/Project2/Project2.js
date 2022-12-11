import React from 'react';

const Project2 = () => {
    const data = {
        "_id": 2,
        "name": "Foodie",
        "tools": [
            "React JS",
            "Node JS",
            "MongoDB",
            "React Router",
            "Express JS",
            "Firebase",
            "Tailwind"
        ],
        "image": "https://i.ibb.co/J7wRywx/image.png",
        "liveSite": "https://foodie-e6ec7.web.app/",
        "clientSiteCode": "https://github.com/marziamostafa/assignment11-service_review_client_side",
        "serverSiteCode": "https://github.com/marziamostafa/assignment11-service_review_server_side",
        "details": "An online restaurent where you can get home delivery and give review",
        "img1": "https://i.ibb.co/G7kfYDj/image.png",
        "img2": "https://i.ibb.co/q50yYdX/image.png",
        "img3": "https://i.ibb.co/zbCtDjd/image.png",
        "bulletPoints": [
            "1. Login, sign in option with email, Google. ",
            "2. A service side based on foods. Any user can add service. ",
            "3.  User can give Review. Delete review, view all reviews. ",
            "4. Dynamic Route added. ",
            "5. Menu card to order"
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

export default Project2;