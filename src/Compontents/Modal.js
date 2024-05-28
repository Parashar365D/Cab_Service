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
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Please Fill The details to Book your cab</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Name:-</label>
                                    <div className="col-sm-8">
                                        <input type="name" className="form-control" placeholder='Full name' id="name" name='name' value={formData.name} onChange={handleChange} min={3} required />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email:-</label>
                                    <div className="col-sm-8">
                                        <input type="email" className="form-control" placeholder='name123@mail.com' name='email' id="email" value={formData.email} onChange={handleChange}  required />
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="inputnumber3" className="col-sm-4">Contact Number:-</label>
                                    <div className="col-md input-group">
                                        <div className="input-group-text">+91</div>
                                        <input type="text" className="form-control" id="number" placeholder='0123456789' name='number' minLength={10} maxLength={10} value={formData.number} onChange={handleChange} required />
                                    </div>
                                </div>
                                    <button type="button" className="btn btn-secondary mx-1 my-3" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn mx-3 my-3" style={{ backgroundColor: "#FACA16" }}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
