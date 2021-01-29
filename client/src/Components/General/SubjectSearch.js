import React from 'react'

function SubjectSearch() {
    return (
        <section className="card">
            <form>
                <h3 className="subtitle-2 mb-10">Buscar materia</h3>
                <div className="lg:border-b-2 lg:border-gray-200 lg:flex lg:justify-between lg:mb-5">
                    <label className="mb-5 block">
                        <span className="text-blue-500 font-bold block mb-3">Materia:</span>
                        <select className="font-bold cursor-pointer border-2 rounded w-full max-w-xl">
                            <option value="LIS104">Lenguajes Interp. en el Servidor</option>
                        </select>
                    </label>
                    <label className="mb-5 block">
                        <span className="text-blue-500 font-bold block mb-3">Grupo teórico:</span>
                        <select className="font-bold cursor-pointer border-2 rounded w-32">
                            <option value="LIS104">01T</option>
                        </select>
                    </label>
                </div>
                <div className="flex justify-end">
                    <button className="btn-pagination mr-0 hover:bg-blue-500"><i className="las la-search"></i> Buscar materia</button>
                </div>
            </form>
        </section>
    )
}

export default SubjectSearch
