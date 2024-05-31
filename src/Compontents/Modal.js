import React, { useState } from 'react';

function Modal() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Modal not connected to server");
        setFormData({ name: '', email: '', number: '' });
    };

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Please Fill The Details to Book Your Cab</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 row">
                                    <label htmlFor="name" className="col-sm-4 col-form-label">Name:</label>
                                    <div className="col-sm-8">
                                        <input type="text" className="form-control" placeholder="Full name" id="name" name="name" value={formData.name} onChange={handleChange} minLength={3} required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="email" className="col-sm-4 col-form-label">Email:</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" placeholder="name123@mail.com" name="email" id="email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor="number" className="col-sm-4 col-form-label">Contact Number:</label>
                                    <div className="col-sm-8">
                                        <div className="input-group">
                                            <span className="input-group-text">+91</span>
                                            <input type="text" className="form-control" id="number" placeholder="0123456789" name="number" minLength={10} maxLength={10} value={formData.number} onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div><hr />
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn mx-4" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn" style={{ backgroundColor: "#FACA16" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Modal;
