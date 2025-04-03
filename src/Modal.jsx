import React from "react";
import { useState } from "react";

function ModalHeader() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="h-screen flex items-center justify-center">
            <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Mở Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <p>Trẫm đã mở modal!</p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-3 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Đóng lại
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalHeader;
