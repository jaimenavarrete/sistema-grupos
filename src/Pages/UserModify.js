import React from 'react';

import FormInput from '../Components/FormInput';

import images from './../assets/images';

function UserModify() {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Modificar usuario</h2>
            <div className="max-w-7xl mx-auto">
                <section className="card max-w-md">
                    <img src={images[3].img} alt={images[3].alt} className="object-cover w-32 h-32 mx-auto mb-5 border-2 border-gray-700 rounded-full" />
                    <button className="btn bg-white text-blue-500 border-2 border-blue-500 block mx-auto hover:bg-blue-500 hover:text-white"><i className="las la-camera-retro"></i> Cambiar foto</button>
                </section>
                <section className="card max-w-md">
                    <h4 className="subtitle-2 mb-10">Información personal</h4>
                    <form onSubmit={handleSubmit}>

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

                        <button type="submit" className="bg-blue-500 text-white text-lg font-bold w-full py-2 mt-5 cursor-pointer hover:bg-blue-600"><i className="las la-save"></i> Guardar cambios</button>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default UserModify;