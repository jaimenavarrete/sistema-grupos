import React, { useEffect } from 'react';

function NavBar() {
    const showMenu = () => {
        const menu = document.getElementById('navbar-menu'),
              btnMenu = document.getElementById('btn-navbar');

        btnMenu.addEventListener('click', () => menu.classList.toggle('hidden'));
    }

    useEffect(() => {
        showMenu();
    }, []);

    return (
        <header className="bg-blue-500 text-white font-semibold fixed w-full">
            <nav id="navbar" className="p-3 lg:max-w-7xl lg:mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex justify-between items-center">
                    <h1 className="title">SISTEMA DE GRUPOS</h1>
                    <i id="btn-navbar" className="las la-bars text-3xl lg:hidden"></i>
                </div>
                <ul id="navbar-menu" className="hidden mt-5 lg:flex lg:mt-0">
                    <li className="navbar-item"><i className="las la-home"></i> Inicio</li>
                    <li className="navbar-item"><i className="las la-user"></i> Perfil</li>
                    <li className="navbar-item"><i className="las la-book"></i> Inscripcion</li>
                    <li className="navbar-item"><i className="las la-clipboard"></i> Reportes</li>
                    <li className="navbar-item"><i className="las la-users"></i> Grupos de materia</li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;