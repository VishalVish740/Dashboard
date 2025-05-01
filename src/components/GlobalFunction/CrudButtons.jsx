import React from 'react';
import { FaPlus, FaEdit, FaTrash, FaPrint, FaSignOutAlt } from 'react-icons/fa';

const CrudButtons = ({ onAdd, onEdit, onDelete, onPrint, onExit }) => {
    const buttonStyles = `
    flex items-center justify-center gap-1
    px-3 py-1.5 rounded-md
    text-white font-medium text-xs
    transition-all duration-300
    hover:scale-105 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-offset-1
    disabled:opacity-50 disabled:cursor-not-allowed `;

    return (
        <div className="flex flex-wrap gap-2 justify-center cursor-pointer p-3">
            <button
                onClick={onAdd}
                className={`${buttonStyles} bg-green-600 hover:bg-green-700 focus:ring-green-500`}
                title="Add"
            >
                <FaPlus className="w-3 h-3" />
                <span className="hidden sm:inline">Add</span>
            </button>

            <button
                onClick={onEdit}
                className={`${buttonStyles} bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`}
                title="Edit"
            >
                <FaEdit className="w-3 h-3" />
                <span className="hidden sm:inline">Edit</span>
            </button>

            <button
                onClick={onDelete}
                className={`${buttonStyles} bg-red-600 hover:bg-red-700 focus:ring-red-500`}
                title="Delete"
            >
                <FaTrash className="w-3 h-3" />
                <span className="hidden sm:inline">Delete</span>
            </button>

            <button
                onClick={onPrint}
                className={`${buttonStyles} bg-purple-600 hover:bg-purple-700 focus:ring-purple-500`}
                title="Print"
            >
                <FaPrint className="w-3 h-3" />
                <span className="hidden sm:inline">Print</span>
            </button>

            <button
                onClick={onExit}
                className={`${buttonStyles} bg-gray-600 hover:bg-gray-700 focus:ring-gray-500`}
                title="Exit"
            >
                <FaSignOutAlt className="w-3 h-3" />
                <span className="hidden sm:inline">Exit</span>
            </button>
        </div>
    );
};

export default CrudButtons;