import React from 'react';

import { Link } from 'react-router-dom';

import FormInput from '../Components/General/FormInput';

import images from './../assets/images';

function UserModify() {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Modificar usuario</h2>
            <div className="max-w-7xl mx-auto">
                <section className="card">
                    <h3 className="subtitle-2 mb-10">Modificar foto de perfil</h3>
                    
                    <Link to="user" className="btn-pagination"><i className="las la-arrow-left"></i> Regresar</Link>
                    <img src={images[3].img} alt={images[3].alt} className="object-cover w-32 h-32 mx-auto mb-5 border-2 border-gray-700 rounded-full" />
                    <button className="btn block mx-auto"><i className="las la-camera-retro"></i> Cambiar foto</button>
                </section>

                <section className="card">
                    <h3 className="subtitle-2 mb-10">Modificar información personal</h3>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                        <FormInput 
                            type="text" 
                            icon="las la-user" 
                            placeholder="Nombres:" 
                        />
                        <FormInput 
                            type="text" 
                            icon="las la-user" 
                            placeholder="Apellidos:" 
                        />
                        <FormInput 
                            type="email" 
                            icon="las la-at" 
                            placeholder="Email:" 
                        />
                        <FormInput 
                            type="text" 
                            icon="las la-phone" 
                            placeholder="Teléfono:" 
                        />
                        <FormInput 
                            type="date" 
                            icon="las la-birthday-cake" 
                        />
                        <FormInput 
                            type="text" 
                            icon="las la-user" 
                            placeholder="Nombre de usuario:" 
                        />

                        <button type="submit" className="btn w-full"><i className="las la-save"></i> Guardar cambios</button>
                    </form>
                </section>

                <section className="card">
                    <h3 className="subtitle-2 mb-10">Modificar contraseña</h3>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">

                        <div className="mb-10">
                            <FormInput 
                                type="password" 
                                icon="las la-lock" 
                                placeholder="Contraseña anterior:" 
                            />
                        </div>

                        <FormInput 
                            type="password" 
                            icon="las la-lock" 
                            placeholder="Nueva contraseña:" 
                        />
                        <FormInput 
                            type="password" 
                            icon="las la-lock" 
                            placeholder="Repetir nueva contraseña:" 
                        />

                        <button type="submit" className="btn w-full"><i className="las la-save"></i> Guardar cambios</button>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default UserModify;