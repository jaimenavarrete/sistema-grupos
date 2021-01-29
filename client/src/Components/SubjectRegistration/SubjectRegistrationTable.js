import React from 'react';

import OptionButtons from '../General/OptionButtons';

function SubjectRegistrationTable() {
    return (
        <section className="card max-w-7xl">
            <h4 className="subtitle-2 mb-10">Materias inscritas</h4>

            <div className="overflow-x-auto w-full">
                <table className="text-left min-w-max w-full mb-10">
                    <thead>
                        <tr className="bg-blue-500 text-white border-2 border-blue-500">
                            <th className="p-3 font-bold">N°</th>
                            <th className="p-3">Nombre de la materia</th>
                            <th className="p-3">Grupo teórico</th>
                            <th className="p-3">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Lenguajes Interp. en el Servidor</td>
                            <td className="p-3">01T</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Lenguajes Interp. en el Servidor</td>
                            <td className="p-3">01T</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Lenguajes Interp. en el Servidor</td>
                            <td className="p-3">01T</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Lenguajes Interp. en el Servidor</td>
                            <td className="p-3">01T</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Lenguajes Interp. en el Servidor</td>
                            <td className="p-3">01T</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end">
                <button className="btn bg-green-600 py-3 px-5 hover:bg-green-700 active:bg-green-800"><i className="las la-paper-plane"></i> Finalizar inscripción</button>
            </div>
        </section>
    );
}

export default SubjectRegistrationTable;
