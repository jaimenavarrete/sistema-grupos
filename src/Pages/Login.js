import React from 'react';
import { Link } from 'react-router-dom';

import LoginInput from './../Components/LoginInput';

function Login() {
    return (
        <section className="bg-blue-400 h-screen pt-20">
            <h2 className="text-white text-3xl font-bold font-serif uppercase text-center mb-10">Sistema de grupos UDB</h2>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
                <h3 className="uppercase font-bold text-blue-500 text-xl mx-8 mt-7 border-bottom border-b-4 border-blue-500">Inicio de sesión</h3>
                <form className="p-8">

                    <LoginInput icon="las la-user" placeholder="Usuario:" />
                    <LoginInput icon="las la-unlock" placeholder="Contraseña:" />

                    <div className="flex justify-between my-7">
                        <label>
                            <input type="checkbox" className="h-5 w-5 mr-1 rounded-md" /> Recordarme
                        </label>
                        <Link to="/forgetPassword" className="text-blue-500 font-bold hover:underline">¿Olvidaste tu contraseña?</Link>
                    </div>

                    <input type="submit" value="Iniciar sesión" className="bg-blue-500 text-white text-lg font-bold w-full py-2 cursor-pointer hover:bg-blue-600" />
                </form>
                <p className="text-center mb-3">¿Aún no tienes cuenta?</p>
                <Link to="/register" className="text-blue-500 font-bold hover:underline block text-center mb-7">Regístrate</Link>
            </div>
        </section>
    )
}

export default Login;