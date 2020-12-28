import React from 'react'

function SubjectRegistration() {
    return (
        <main className="bg-gray-200 min-h-screen p-5">
            <h2 className="subtitle-1 text-gray-700">Inscripción de materias</h2>
            <div className="max-w-7xl mx-auto">
                <form className="card">
                    <h3 className="subtitle-2 mb-10">Proceso de inscripción</h3>
                    <label className="mb-5 block">
                        <span className="text-blue-500 font-bold block mb-3">Materia:</span>
                        <select className="font-bold border-2 rounded w-full max-w-xl">
                            <option value="LIS104">Lenguajes Interp. en el Servidor</option>
                        </select>
                    </label>
                    <label className="mb-5 block">
                        <span className="text-blue-500 font-bold block mb-3">Grupo teórico:</span>
                        <select className="font-bold border-2 rounded w-32">
                            <option value="LIS104">01T</option>
                        </select>
                    </label>
                    <label className="mb-5 block">
                        <span className="text-blue-500 font-bold block mb-3">Cupos disponibles:</span>
                        <input type="text" value="1" className="bg-gray-100 text-gray-500 font-bold border-2 rounded w-32" readOnly />
                    </label>
                    <div className="flex justify-end">
                        <button className="btn"><i className="las la-plus"></i> Agregar materia</button>
                    </div>
                </form>
                <section className="card">
                    <h3 className="subtitle-2 mb-10">Materias a inscribir</h3>
                </section>
            </div>
        </main>
    )
}

export default SubjectRegistration;

