import React, { useState, useEffect } from 'react';
import { HiPlus, HiPencil, HiTrash, HiViewList, HiX } from 'react-icons/hi';

const CrudForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        code: '',
        date: '',
        description: '',
        image: null // For image file
    });
    const [dataList, setDataList] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [error, setError] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    // Load initial data (simulated) and set current date
    useEffect(() => {
        const initialData = [
            { id: 1, name: 'Item 1', code: 'C001', date: '2025-04-01', description: 'First item ', image: null },
            { id: 2, name: 'Item 2', code: 'C002', date: '2025-04-02', description: 'Second item ', image: null }
        ];
        setDataList(initialData);
        const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
        setFormData(prevState => ({
            ...prevState,
            date: currentDate
        }));
    }, []);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, image: file }));
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Add new record
    const handleAdd = () => {
        if (!formData.name || !formData.code || !formData.date || !formData.description) {
            setError('All fields are required except ID and Image.');
            return;
        }
        if (formData.id === '') {
            const newId = dataList.length > 0 ? Math.max(...dataList.map(item => item.id)) + 1 : 1;
            const currentDate = new Date().toISOString().split('T')[0];
            setDataList([...dataList, { ...formData, id: newId, date: formData.date || currentDate }]);
        } else {
            setDataList(dataList.map(item =>
                item.id === parseInt(formData.id) ? { ...formData, id: parseInt(formData.id) } : item
            ));
        }
        resetForm();
    };

    // Edit record
    const handleEdit = () => {
        if (selectedId) {
            const selectedItem = dataList.find(item => item.id === selectedId);
            if (selectedItem) {
                setFormData({ ...selectedItem, image: selectedItem.image || null });
                setImagePreview(selectedItem.image ? URL.createObjectURL(selectedItem.image) : null);
            }
        }
    };

    // Remove record
    const handleRemove = () => {
        if (selectedId) {
            setDataList(dataList.filter(item => item.id !== selectedId));
            resetForm();
        }
    };

    // List records (display in console for now)
    const handleList = () => {
        console.log('Current Data List:', dataList);
    };

    // Exit/Clear
    const handleExit = () => {
        resetForm();
        setSelectedId(null);
    };

    // Reset form
    const resetForm = () => {
        const currentDate = new Date().toISOString().split('T')[0]; // Reset to current date
        setFormData({ id: '', name: '', code: '', date: currentDate, description: '', image: null });
        setImagePreview(null);
        setError(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
            <div className="bg-gray-800/90 p-6 rounded-xl shadow-2xl w-full max-w-4xl transform transition-all duration-300 hover:shadow-indigo-500/50">
                <h2 className="text-2xl font-bold text-center mb-6 text-indigo-200">CRUD Form</h2>

                {/* Id Field moved to right corner */}
                {/* <div className="mb-4 flex justify-end">
                    <div className="w-1/4">
                        <input
                            type="number"
                            name="id"
                            value={formData.id}
                            onChange={handleInputChange}
                            placeholder="Id"
                            className="w-full p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                            disabled={selectedId !== null}
                        />
                    </div>
                </div> */}

                {/* Form Section with reduced gap and all fields retained */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-4">
                    <div className="col-span-1">
                        <input
                            type="number"
                            name="id"
                            value={formData.id}
                            onChange={handleInputChange}
                            placeholder="ID"
                            className="w-full p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="w-full p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <input
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            placeholder="Code"
                            className="w-full p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="Date"
                            className="w-full p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
                            required
                        />
                    </div>
                </div>

                {/* Description and Image Box Section with reduced gap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    <div className="col-span-1">
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Description"
                            className="w-full h-32 p-2 bg-gray-700/50 border border-indigo-500/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 resize-none"
                            required
                        />
                    </div>
                    <div className="col-span-1">
                        {/* <label className="block text-sm font-medium mb-1 text-indigo-200">Image Box</label> */}
                        <div className="w-full h-32 bg-gray-700/50 border border-indigo-500/30 rounded-md flex items-center justify-center overflow-hidden">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="imageUpload"
                            />
                            <label htmlFor="imageUpload" className="cursor-pointer w-full h-full flex items-center justify-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md" />
                                ) : (
                                    <span className="text-center">Upload Image</span>
                                )}
                            </label>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {error && <div className="text-red-400 text-sm mb-4 bg-red-900/50 p-2 rounded-md">{error}</div>}

                {/* CRUD Buttons with Enhanced Styling */}
                <div className="flex flex-col sm:flex-row gap-2 justify-between">
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={handleAdd}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-md shadow-md hover:from-green-700 hover:to-green-800 hover:shadow-lg transition-all duration-300"
                        >
                            <HiPlus className="w-5 h-5" />
                            Add
                        </button>
                        <button
                            onClick={handleEdit}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transition-all duration-300"
                            disabled={!selectedId}
                        >
                            <HiPencil className="w-5 h-5" />
                            Edit
                        </button>
                        <button
                            onClick={handleRemove}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md shadow-md hover:from-red-700 hover:to-red-800 hover:shadow-lg transition-all duration-300"
                            disabled={!selectedId}
                        >
                            <HiTrash className="w-5 h-5" />
                            Remove
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={handleList}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-md shadow-md hover:from-yellow-700 hover:to-yellow-800 hover:shadow-lg transition-all duration-300"
                        >
                            <HiViewList className="w-5 h-5" />
                            List
                        </button>
                        <button
                            onClick={handleExit}
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-md shadow-md hover:from-gray-700 hover:to-gray-800 hover:shadow-lg transition-all duration-300"
                        >
                            <HiX className="w-5 h-5" />
                            Exit
                        </button>
                    </div>
                </div>

                {/* Data Display (Beautiful Table) */}
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-sm bg-gray-700/50 rounded-md">
                        <thead>
                            <tr className="bg-gradient-to-r from-indigo-900 to-gray-800">
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Id</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Name</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Code</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Date</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Description</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Image</th>
                                <th className="p-3 border-b border-gray-600 text-left font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataList.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-600/50 transition-colors duration-200 cursor-pointer"
                                    onClick={() => {
                                        setSelectedId(item.id);
                                        setFormData({ ...item, image: item.image || null });
                                        setImagePreview(item.image ? URL.createObjectURL(item.image) : null);
                                    }}
                                >
                                    <td className="p-3 border-b border-gray-600">{item.id}</td>
                                    <td className="p-3 border-b border-gray-600">{item.name}</td>
                                    <td className="p-3 border-b border-gray-600">{item.code}</td>
                                    <td className="p-3 border-b border-gray-600">{item.date}</td>
                                    <td className="p-3 border-b border-gray-600">{item.description}</td>
                                    <td className="p-3 border-b border-gray-600">
                                        {item.image ? (
                                            <img src={URL.createObjectURL(item.image)} alt="Item" className="w-16 h-16 object-cover rounded-md" />
                                        ) : 'No Image'}
                                    </td>
                                    <td className="p-3 border-b border-gray-600">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedId(item.id);
                                                setFormData({ ...item, image: item.image || null });
                                                setImagePreview(item.image ? URL.createObjectURL(item.image) : null);
                                            }}
                                            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded-md text-xs text-white transition-colors duration-300"
                                        >
                                            Select
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CrudForm;