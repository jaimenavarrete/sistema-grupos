import React from 'react';

function UserSubjectGroup({ name, code, group, teacher, img }) {
    return (
        // <article className="card bg-blue-50 border-2 p-0 overflow-hidden inline-block max-w-sm">
        //     <img src={ img } title="Imagen de la materia" alt="Imagen de la materia" className="border-b-2 border-blue-500 object-cover h-40 w-full" />          
        //     <div className="text-gray-700 p-3">
        //         <div className="font-bold flex justify-between mb-2">
        //             <p><span className="text-blue-500">Código: </span> { code }</p>
        //             <p><span className="text-blue-500">Grupo: </span> { group }</p>
        //         </div>
        //         <div>
        //             <span className="text-blue-500 text-center font-bold block mb-2">Nombre:</span>
        //             <p className="text-center text-xl font-bold uppercase mb-5">{ name }</p>
        //         </div>
        //         {/* <button className="btn bg-transparent text-blue-500 border-2 border-blue-500 w-full hover:bg-blue-500 hover:text-white"><i className="las la-external-link-alt"></i> Ver materia</button> */}
        //         <button className="btn-pagination w-full"><i className="las la-external-link-alt"></i> Ver materia</button>
        //     </div>
        // </article>

        <article className="border-2 border-blue-500 rounded overflow-hidden mb-5">
            <img src={ img } title="Imagen de la materia" alt="Imagen de la materia" className="border-b-2 border-blue-500 object-cover h-40 w-full" />          
            
            <p className="text-gray-500 text-center text-lg font-bold p-3"><i className="las la-tag"></i> { code }</p>
            <p className="text-gray-700 text-center text-xl font-bold uppercase mb-3 px-3">{ name }</p>
            <p className="text-gray-500 text-center text-sm italic mb-5"><i className="las la-user-tie"></i> { teacher }</p>

            <div className="bg-blue-50 flex justify-between items-center p-3">
                <p className="text-blue-500 text-center text-xl font-bold"><i className="las la-users"></i> { group }</p>
                <button className="btn active:bg-blue-700"><i className="las la-external-link-alt"></i> Ver materia</button>
            </div>
        </article>
    );
}

export default UserSubjectGroup;