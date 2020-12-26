import React, { useEffect } from 'react';

import { Link } from 'react-router-dom'

import images from './../assets/images';

function NavBar() {
    const showMenu = () => {
        const menu = document.getElementById('navbar-menu'),
              btnMenu = document.getElementById('btn-navbar');

        btnMenu.addEventListener('click', () => {
            btnMenu.classList.toggle('la-bars');
            btnMenu.classList.toggle('la-times');

            menu.classList.toggle('hidden')
        });
        // console.log('Nuevo');
    }

    const showDropMenu = () => {
        const dropMenu = document.getElementById('drop-menu'),
              iconDropMenu = document.getElementById('icon-drop-menu'),
              btnDropMenu = document.getElementById('btn-drop-menu');

        btnDropMenu.addEventListener('click', () => {
            iconDropMenu.classList.toggle('la-caret-right');
            iconDropMenu.classList.toggle('la-caret-down');

            dropMenu.classList.toggle('hidden');
        });
        // console.log('Nuevo2');
    }

    useEffect(() => {
        showMenu();
        showDropMenu();
    });

    return (
        <header className="bg-blue-500 text-white font-semibold fixed w-full">
            <nav id="navbar" className="p-3 lg:max-w-7xl lg:mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="flex justify-between items-center">
                    <h1 className="title flex items-center">
                        <img src={images[2].img} title={images[2].title} alt={images[2].alt} className="w-10 mr-3" />
                        <strong>Sistema de grupos</strong>
                    </h1>
                    <i id="btn-navbar" className="las la-bars text-3xl lg:hidden"></i>
                </div>
                <ul id="navbar-menu" className="hidden mt-5 lg:flex lg:mt-0">
                    <li className="navbar-item">
                        <i className="las la-home"></i> Inicio
                    </li>
                    <li className="navbar-item">
                        <i className="las la-book"></i> Inscripcion
                    </li>
                    <li className="navbar-item">
                        <i className="las la-clipboard"></i> Reportes
                    </li>
                    <li className="navbar-item">
                        <i className="las la-users"></i> Grupos de materia
                    </li>
                    <li className="relative">
                        <div id="btn-drop-menu" className="flex items-center text-lg cursor-pointer p-2 ml-5">
                            <img src={images[3].img} title={images[3].title} alt={images[2].alt} className="bg-white w-10 h-10 object-cover border-2 border-white rounded-full mr-1" />
                            <i id="icon-drop-menu" className="las la-caret-right"></i>
                        </div>
                        <ul id="drop-menu" className="absolute bg-blue-500 w-36 mt-3 hidden">
                            <li className="cursor-pointer p-3 hover:bg-blue-600">
                                <i className="las la-user"></i> Perfil
                            </li>
                            <li className="cursor-pointer p-3 hover:bg-blue-600">
                                <Link to="/login">
                                    <i className="las la-door-closed"></i> Cerrar sesión
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;