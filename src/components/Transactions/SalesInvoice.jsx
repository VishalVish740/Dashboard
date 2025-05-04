import React, { useState } from 'react';
import CrudButtons from '../GlobalFunction/CrudButtons';

const SalesInvoice = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [tableData, setTableData] = useState([
        { barcode: '123456', productDisc: 'Shirt', size: 'M', qty: 2, rate: 20, disc: 0, chrg: 0, gst: 2.4, grossAmount: 40, netAmount: 42.4 },
        { barcode: '789012', productDisc: 'Pants', size: 'L', qty: 1, rate: 30, disc: 0, chrg: 0, gst: 1.8, grossAmount: 30, netAmount: 31.8 },
        { barcode: '345678', productDisc: 'Jacket', size: 'S', qty: 3, rate: 50, disc: 5, chrg: 2, gst: 4.5, grossAmount: 145, netAmount: 149.5 },
    ]);

    const [summary, setSummary] = useState({
        totalAmt: 50000,
        totalDisc: 500,
        charges: 100,
        gst: 1500,
        netPayable: 52200,
        receiptAmt: 0,
        refundableAmt: 0,
    });

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

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleDelete = (index) => {
        setTableData(tableData.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
            <div className="bg-gray-800 shadow-xl rounded-2xl p-3 sm:p-4 w-full max-w-5xl">
                <div className="relative mb-4">
                    <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-extrabold text-white">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    <select
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
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
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        placeholder="Bill No"
                    />
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                    />
                    <input
                        type="text"
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        placeholder="Ref No"
                    />
                    <select
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                    >
                        <option value="" disabled selected>Select Sales Person</option>
                        {salesPersons.map((person) => (
                            <option key={person.id} value={person.id}>
                                {person.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-2">
                    <textarea
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        rows="1"
                        placeholder="Description"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <textarea
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        rows="1"
                        placeholder="Product Description"
                    ></textarea>
                </div>

                {/* Horizontal Line */}
                <hr className="my-4 border-gray-600" />

                {/* Table Section with Fixed Height and Scroll */}
                <div className="overflow-x-hidden max-h-72 overflow-y-auto">
                    <table className="w-full bg-gray-700 border border-gray-600 rounded-md text-xs sm:text-sm">
                        <thead>
                            <tr className="bg-gray-600 sticky top-0">
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[12%]">Barcode</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[15%]">Product Disc</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[8%]">Size</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[8%]">Qty</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[10%]">Rate</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[8%]">Disc</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[8%]">Chg</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[8%]">Gst</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[10%]">GAmount</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[10%]">NAmount</th>
                                <th className="py-1 px-3 border-b border-gray-600 text-left font-medium text-gray-200 w-[5%]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-600 transition-colors">
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.barcode}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.productDisc}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.size}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.qty}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.rate}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.disc}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.chrg}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.gst}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.grossAmount}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">{row.netAmount}</td>
                                    <td className="py-1 px-3 border-b border-gray-600 text-gray-300">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                                            title="Delete"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Discount and Payment Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    <select
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                    >
                        <option value="" disabled selected>DISC %</option>
                        <option value="5">5%</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                    </select>
                    <input
                        type="text"
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        placeholder="disc AMT"
                    />
                    <select
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                    >
                        <option value="" disabled selected>PAYMENT MODE</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="online">Online</option>
                    </select>
                    <input
                        type="text"
                        className="w-full p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 text-xs sm:text-sm"
                        placeholder="PAYMENT REF NO"
                    />
                </div>

                {/* Summary Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-[10px] sm:text-xs">
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">TOTAL AMT</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.totalAmt}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">TOTAL DISC</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.totalDisc}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">CHARGES</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.charges}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">GST</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.gst}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">NET PAYABLE</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.netPayable}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">RECEIPT AMT</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.receiptAmt}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-medium text-gray-200">REFUNDABLE AMT</span>
                        <span className="p-1.5 bg-gray-700 text-gray-300 border border-gray-600 rounded-md">{summary.refundableAmt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesInvoice;