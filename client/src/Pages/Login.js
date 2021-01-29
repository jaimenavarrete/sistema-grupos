import React from 'react';
import { Link } from 'react-router-dom';

import images from './../assets/images';

import FormInput from '../Components/General/FormInput';

function Login() {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className="bg-blue-500 min-h-screen p-5">
            <img src={images[0].img} title={images[0].title} alt={images[0].alt} className="mx-auto mb-10"/>
            <h2 className="subtitle-1 p-0">Sistema de grupos</h2>

            <section className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <h3 className="subtitle-2 mx-8 mt-7">Inicio de sesión</h3>
                <form onSubmit={handleSubmit} className="p-8">

                    <FormInput 
                        type="text" 
                        icon="las la-user" 
                        placeholder="Usuario:" 
                    />
                    <FormInput 
                        type="password" 
                        icon="las la-unlock" 
                        placeholder="Contraseña:" 
                    />

                    <div className="my-5 md:flex md:justify-between md:my-0">
                        <label className="cursor-pointer block mb-5">
                            <input type="checkbox" className="h-5 w-5 mr-1 rounded-md focus:ring-0 focus:ring-offset-0 cursor-pointer" /> Recordarme
                        </label>
                        <Link to="/forgetPassword" className="text-blue-500 font-bold hover:underline">¿Olvidaste tu contraseña?</Link>
                    </div>

                    <input type="submit" value="Iniciar sesión" className="btn py-3 w-full" />
                </form>

                <p className="text-center mb-3">¿Aún no tienes cuenta?</p>
                <Link to="/register" className="text-blue-500 font-bold hover:underline block text-center mb-7">Regístrate</Link>
            </section>
        </main>
    )
}

export default Login;