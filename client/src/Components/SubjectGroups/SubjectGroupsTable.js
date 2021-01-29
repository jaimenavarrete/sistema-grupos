import React from 'react';

import OptionButtons from '../General/OptionButtons';
import PaginationButtons from '../General/PaginationButtons';

function SubjectGroupsTable() {
    return (
        <section className="card max-w-7xl">
            <h3 className="subtitle-2 mb-10">Alumnos inscritos en el grupo</h3>

            <div className="overflow-x-auto w-full">
                <table className="text-left min-w-max w-full mb-10">
                    <thead>
                        <tr className="bg-blue-500 text-white border-2 border-blue-500">
                            <th className="p-3 font-bold">N°</th>
                            <th className="p-3">Apellidos</th>
                            <th className="p-3">Nombres</th>
                            <th className="p-3">Usuario</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">1</td>
                            <td className="p-3">Jaime Eduardo</td>
                            <td className="p-3">Navarrete Cubias</td>
                            <td className="p-3">jaimenava321</td>
                            <td className="p-3">jaimenava321@gmail.com</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="border-2 border-blue-500">
                            <td className="p-3 font-bold">2</td>
                            <td className="p-3">Jaime Eduardo</td>
                            <td className="p-3">Navarrete Cubias</td>
                            <td className="p-3">jaimenava321</td>
                            <td className="p-3">jaimenava321@gmail.com</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">3</td>
                            <td className="p-3">Jaime Eduardo</td>
                            <td className="p-3">Navarrete Cubias</td>
                            <td className="p-3">jaimenava321</td>
                            <td className="p-3">jaimenava321@gmail.com</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="border-2 border-blue-500">
                            <td className="p-3 font-bold">3</td>
                            <td className="p-3">Jaime Eduardo</td>
                            <td className="p-3">Navarrete Cubias</td>
                            <td className="p-3">jaimenava321</td>
                            <td className="p-3">jaimenava321@gmail.com</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                        <tr className="bg-gray-300 border-2 border-blue-500">
                            <td className="p-3 font-bold">3</td>
                            <td className="p-3">Jaime Eduardo</td>
                            <td className="p-3">Navarrete Cubias</td>
                            <td className="p-3">jaimenava321</td>
                            <td className="p-3">jaimenava321@gmail.com</td>
                            <td className="p-3">
                                <OptionButtons />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <PaginationButtons />
            </div>
        </section>
    );
}



export default SubjectGroupsTable;
