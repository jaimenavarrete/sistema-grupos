import React from 'react';
import { Link } from 'react-router-dom';

import images from './../assets/images';

import FormInput from '../Components/General/FormInput';

function Register() {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className="bg-blue-500 min-h-screen p-5">
            <img src={images[0].img} title={images[0].title} alt={images[0].alt} className="mx-auto mb-10"/>
            <h2 className="subtitle-1 p-0">Sistema de grupos</h2>

            <section className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <h3 className="subtitle-2 mx-8 mt-7">Registro</h3>
                <form onSubmit={handleSubmit} className="p-8">

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
                    <FormInput 
                        type="password" 
                        icon="las la-unlock" 
                        placeholder="Contraseña:" 
                    />
                    <FormInput 
                        type="password" 
                        icon="las la-unlock" 
                        placeholder="Repetir contraseña:" 
                    />

                    <input type="submit" value="Registrarse" className="btn py-3 w-full" />
                </form>
                <p className="text-center mb-3">¿Ya tienes una cuenta?</p>
                <Link to="/login" className="text-blue-500 font-bold hover:underline block text-center mb-7">Inicia sesión</Link>
            </section>
        </main>
    )
}

export default Register;