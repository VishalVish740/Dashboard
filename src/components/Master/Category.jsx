import React, { useState, useEffect } from 'react';
import CategoryTable from './CategoryTable';

const Category = ({ isVisible, onClose, masterData, setMasterData, setLoading }) => {
    const [error, setError] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [formData, setFormData] = useState(null);

    // Simulated API fetch function
    const fetchMasterData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await new Promise((resolve) =>
                setTimeout(() => {
                    resolve([
                        { id: 1, name: 'Electronic', abvr: 'ELC', status: 'Active' },
                        { id: 2, name: 'Furniture', abvr: 'Fur', status: 'Inactive' },
                        { id: 3, name: 'Clothings', abvr: 'Cloth', status: 'Active' },
                        { id: 4, name: 'Smartphones', abvr: 'phone', status: 'Pending' },
                    ]);
                }, 1000)
            );
            const storedData = JSON.parse(localStorage.getItem('categoryData'));
            if (storedData && storedData.length > 0) {
                setMasterData(storedData);
            } else {
                setMasterData(response);
                localStorage.setItem('categoryData', JSON.stringify(response));
            }
        } catch (err) {
            setError('Failed to fetch data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isVisible && masterData.length === 0) {
            fetchMasterData();
        }
    }, [isVisible]);

    const handleAdd = () => {
        setSelectedRow(null);
        setFormData({ id: '', name: '', abvr: '', status: '' });
    };

    const handleEdit = () => {
        if (selectedRow) {
            setFormData({ ...selectedRow });
        }
    };

    const handleDelete = () => {
        if (selectedRow) {
            const updatedData = masterData.filter((record) => record.id !== selectedRow.id);
            setMasterData(updatedData);
            localStorage.setItem('categoryData', JSON.stringify(updatedData));
            setSelectedRow(null);
            setFormData(null);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let updatedData;
        if (formData.id === '') {
            const newRecord = { ...formData, id: masterData.length + 1 };
            updatedData = [...masterData, newRecord];
        } else {
            updatedData = masterData.map((record) =>
                record.id === formData.id ? formData : record
            );
        }
        setMasterData(updatedData);
        localStorage.setItem('categoryData', JSON.stringify(updatedData));
        setFormData(null);
        setSelectedRow(null);
    };

    const handleFormCancel = () => {
        setFormData(null);
        setSelectedRow(null);
    };

    if (!isVisible) return null;

    return (
        <div className="mt-4 sm:mt-6 max-h-screen overflow-y-auto">
            {error && <div className="text-center text-red-300 text-sm sm:text-base">{error}</div>}
            {masterData.length > 0 && (
                <>
                    {/* Form for Add/Edit */}
                    {formData && (
                        <div className="mb-4 sm:mb-6 p-4 sm:p-6 bg-gradient-to-br from-gray-800/90 to-indigo-900/90 rounded-xl shadow-lg">
                            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                                {formData.id ? 'Edit Record' : 'Add New Record'}
                            </h4>
                            <form onSubmit={handleFormSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    <div>
                                        <label className="block text-xs sm:text-sm text-indigo-200 mb-1">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            className="w-full p-2 text-xs sm:text-sm text-gray-100 bg-gray-700/50 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm text-indigo-200 mb-1">Abvr</label>
                                        <input
                                            type="text"
                                            name="abvr"
                                            value={formData.abvr}
                                            onChange={handleFormChange}
                                            className="w-full p-2 text-xs sm:text-sm text-gray-100 bg-gray-700/50 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm text-indigo-200 mb-1">Status</label>
                                        <input
                                            type="text"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleFormChange}
                                            className="w-full p-2 text-xs sm:text-sm text-gray-100 bg-gray-700/50 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300"
                                    >
                                        Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleFormCancel}
                                        className="px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-500 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-600 hover:shadow-xl transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    <CategoryTable
                        data={masterData}
                        onClose={onClose}
                        onRowSelect={setSelectedRow}
                        selectedRow={selectedRow}
                        onAdd={handleAdd}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </>
            )}
        </div>
    );
};

export default Category;