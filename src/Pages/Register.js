import React from 'react';
import { Link } from 'react-router-dom';

import LogoUDB from './../assets/logo_udb.png';

import LoginInput from './../Components/LoginInput';

function Register() {
    return (
        <section className="bg-blue-500 min-h-screen p-10">
            <img src={LogoUDB} alt="Logotipo de la Universidad Don Bosco" className="mx-auto mb-10"/>
            <h2 className="text-white text-4xl font-bold font-serif uppercase text-center mb-10">Sistema de grupos</h2>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <h3 className="uppercase font-bold text-blue-500 text-xl mx-8 mt-7 border-bottom border-b-4 border-blue-500">Registro</h3>
                <form className="p-8">

                    <LoginInput type="text" icon="las la-user" placeholder="Nombres:" />
                    <LoginInput type="text" icon="las la-user" placeholder="Apellidos:" />
                    <LoginInput type="email" icon="las la-at" placeholder="Email:" />
                    <LoginInput type="text" icon="las la-phone" placeholder="Teléfono:" />
                    <LoginInput type="date" icon="las la-birthday-cake" placeholder="Fecha de nacimiento:" />
                    <LoginInput type="text" icon="las la-user" placeholder="Usuario:" />
                    <LoginInput type="password" icon="las la-unlock" placeholder="Contraseña:" />
                    <LoginInput type="password" icon="las la-unlock" placeholder="Repetir contraseña:" />

                    <input type="submit" value="Iniciar sesión" className="bg-blue-500 text-white text-lg font-bold w-full py-2 cursor-pointer hover:bg-blue-600" />
                </form>
                <p className="text-center mb-3">¿Ya tienes una cuenta?</p>
                <Link to="/login" className="text-blue-500 font-bold hover:underline block text-center mb-7">Inicia sesión</Link>
            </div>
        </section>
    )
}

export default Register;