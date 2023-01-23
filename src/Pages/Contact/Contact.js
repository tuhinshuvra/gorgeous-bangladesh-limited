import React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';

const Contact = () => {

    return (
        <div className="contact_bg col-lg-12 px-4 py-5" style={{ backgroundColor: '#D0DFFD' }}>
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-5 text-center text-lg-start">
                    <div className=" mb-lg-0 mb-4 ">
                        <h1 className="text-3xl font-bold mb-2">Get in Touch!</h1>
                        <h5 className=' mb-0'><b>Gorgeous Bangladesh LTD.</b></h5>
                        <p><b>Valentine Group</b> </p>
                        <p className=' mb-0'><b>Corporate Office:</b></p>
                        <p className=' mb-0'>MAG House, House No-20, Shah Makhdum</p>
                        <p>Avenue, Uttara Sector -11, Dhaka-1230</p>
                        <p className=' mb-0'><b>Website:</b>
                            <Link className=' text-decoration-none' to="/"> www.gbl-bd.com</Link>
                        </p>
                        <p className=' mb-0'><b>Email:</b> info@gbl-bd.com</p>
                        <p className=' mb-0'><b>Facebook:</b>
                            <a className=' text-decoration-none' href="https://www.facebook.com/GorgeousBangladeshLtd" target="_blank" > Gorgeous Bangladesh Ltd</a> <br />
                        </p>
                        <p className=' mb-0'><b>Phone:</b> +8802 224470053, +8802 224470056</p>
                    </div>
                </div>
                <div className="col-lg-6 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-light">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Input full name" />
                            <label htmlFor="floatingInput">Full Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="0123456789" />
                            <label htmlFor="floatingInput">Phone No</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea type="message" className="form-control" id="floatingInput" placeholder="Input message" />
                            <label htmlFor="floatingInput">Message</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-outline-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;