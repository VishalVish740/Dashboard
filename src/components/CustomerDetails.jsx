import React, { useState } from 'react';
import CrudButtons from './GlobalFunction/CrudButtons';

const CustomerDetails = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const customers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    const salesPersons = [
        { id: 1, name: 'Alice Brown' },
        { id: 2, name: 'Mike Wilson' },
        { id: 3, name: 'Sarah Davis' },
    ];

    const tableData = [
        { barcode: '123456', product: 'Shirt', style: 'Casual', color: 'Blue', size: 'M', qty: 2, rate: 20, amount: 40 },
        { barcode: '789012', product: 'Pants', style: 'Formal', color: 'Black', size: 'L', qty: 1, rate: 30, amount: 30 },
    ];

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4 sm:p-6">
            <div className="bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6 w-full max-w-6xl">
                <div className="relative mb-6">
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl font-extrabold text-white">
                        Invoice
                    </h1>
                    <div className="flex justify-end">
                        <CrudButtons
                            onAdd={() => console.log('Add')}
                            onEdit={() => console.log('Edit')}
                            onDelete={() => console.log('Delete')}
                            onPrint={() => console.log('Print')}
                            onExit={() => console.log('Exit')}
                        />
                    </div>
                </div>

                {/* Form Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    <select
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    >
                        <option value="" disabled selected>Select Customer</option>
                        {customers.map((customer) => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
                        placeholder="Bill No"
                    />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
                        placeholder="Ref No"
                    />
                    <select
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    >
                        <option value="" disabled selected>Select Sales Person</option>
                        {salesPersons.map((person) => (
                            <option key={person.id} value={person.id}>
                                {person.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-6">
                    <textarea
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
                        rows="2"
                        placeholder="Description"
                    ></textarea>
                </div>

                <div className="mb-6">
                    <textarea
                        className="w-full p-2 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-sm"
                        rows="2"
                        placeholder="Product Description"
                    ></textarea>
                </div>

                {/* Horizontal Line */}
                <hr className="my-6 border-gray-600" />

                {/* Table Section */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-gray-700 border border-gray-600 rounded-md text-sm">
                        <thead>
                            <tr className="bg-gray-600">
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Barcode</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Product</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Style</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Color</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Size</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Qty</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Rate</th>
                                <th className="py-2 px-3 border-b border-gray-600 text-left font-medium text-gray-200">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-600 transition-colors">
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.barcode}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.product}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.style}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.color}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.size}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.qty}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.rate}</td>
                                    <td className="py-2 px-3 border-b border-gray-600 text-gray-300">{row.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetails;