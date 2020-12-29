import React from 'react';

import { Link } from 'react-router-dom';

import UserSubjectGroup from '../Components/UserProfile/UserSubjectGroup';

import images from './../assets/images';

function UserProfile() {
    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Perfil de usuario</h2>
            <div className="max-w-7xl mx-auto">
                <div className="lg:flex">
                    <section className="card text-center lg:mr-5">
                        <img src={images[3].img} alt={images[3].alt} className="object-cover w-32 h-32 mx-auto mb-5 border-2 border-gray-700 rounded-full" />
                        <h3 className="text-2xl text-gray-700 font-bold mb-2">Jaime Eduardo Navarrete Cubias</h3>
                        <h4 className="text-blue-500 text-lg font-bold mb-5">Estudiante</h4>
                        <Link to="user-modify" className="btn-pagination inline-block"><i className="las la-pen"></i> Editar perfil</Link>
                    </section>
                    
                    <section className="card lg:flex-grow">
                        <h3 className="subtitle-2 mb-10">Información personal</h3>
                        <p className="flex justify-between mb-3"><span className="font-bold text-gray-700 inline-block">Usuario: </span><span>jaimenava321</span></p>
                        <p className="flex justify-between mb-3"><span className="font-bold text-gray-700">Carrera: </span><span>Ingeniería en Ciencias de la Computación</span></p>
                        <p className="flex justify-between mb-3"><span className="font-bold text-gray-700 inline-block">Email: </span><span>jaimenava321@gmail.com</span></p>
                        <p className="flex justify-between mb-3"><span className="font-bold text-gray-700">Telefono: </span><span>12345678-9</span></p>
                        <p className="flex justify-between mb-3"><span className="font-bold text-gray-700">Fecha de nacimiento: </span><span>19-08-1999</span></p>
                    </section>
                </div>

                <section className="card">
                    <h3 className="subtitle-2 mb-10">Grupos inscritos</h3>
                    <div className="grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete"
                            img={images[4].img}
                        />
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete" 
                            img={images[4].img}
                        />
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete" 
                            img={images[4].img}
                        />
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete" 
                            img={images[4].img}
                        />
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete" 
                            img={images[4].img}
                        />
                        <UserSubjectGroup 
                            name="Lenguajes Interp. en el Servidor" 
                            code="LIS104" 
                            group="01T" 
                            teacher="Jaime Eduardo Navarrete" 
                            img={images[4].img}
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default UserProfile;