import React, { useEffect, useState } from 'react';

const Project1 = () => {
    const data = {
        id: 1,
        name: "Bookworms",
        tools: [
            "React JS",
            "Stripe",
            "React Router",
            "Node JS",
            "MongoDB",
            "Express JS",
            "ImageBB",
            "Firebase",
            "Tailwind"
        ],
        image: "https://i.ibb.co/bvbLCf7/image.png",
        liveSite: "https://bookworms-a630e.web.app/",
        clientSiteCode: "https://github.com/marziamostafa/assignment12-used_products_resale_clients_side",
        serverSiteCode: "https://github.com/marziamostafa/assignment12-used_products_resale_server_side",
        details: "An online based book shop where you can buy old books as a buyer. And can sell books as a seller",
        img1: "https://i.ibb.co/93g9mq0/image.png",
        img2: "https://i.ibb.co/6Pg9NWZ/image.png",
        img3: "https://i.ibb.co/m47L5v2/image.png",
        bulletPoints: [
            "1. Admin will have all type of access. ",
            "2. User can sign up as a seller or buyer.",
            "3. Buyer can book/buy/ report any product and will be able to pay through card. ",
            "4. Seller can add and delete any product. Also will be able to advertise any product. ",
            "5. Admin can verify any seller. Dynamic routes Possibility."
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

            <div className="overflow-x-auto">
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

export default Project1;