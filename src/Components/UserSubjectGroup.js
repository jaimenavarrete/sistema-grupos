import React from 'react';

import images from './../assets/images';

function UserSubjectGroup() {
    return (
        <article className="card p-0 overflow-hidden inline-block max-w-sm">
            <img src={images[4].img} alt={images[4].alt} className="border-b-2 border-blue-500 object-cover h-40 w-full" />          
            <div className="text-gray-700 p-3">
                <div className="font-bold flex justify-between mb-2">
                    <p><span className="text-blue-500">Código: </span> LIS104</p>
                    <p><span className="text-blue-500">Grupo: </span> 01T</p>
                </div>
                <div>
                    <span className="text-blue-500 text-center font-bold block mb-2">Nombre:</span>
                    <p className="text-center text-xl font-bold uppercase mb-5">Lenguajes interp. en el servidor</p>
                </div>
                <button className="btn bg-blue-500 w-full"><i className="las la-external-link-alt"></i> Ver materia</button>
            </div>
        </article>
    );
}

export default UserSubjectGroup;