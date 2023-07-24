import React from 'react';

function login() {
    return (
        <div>
            <form className="row g-3" method='POST' action='http://localhost:5001/register'>
            <div className="col-auto">
                <label for="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" readonly className="form-control-plaintext" id="staticEmail2" name="email" placeholder="email@example.com"/>
            </div>
            <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" name="password" placeholder="Password"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>
            </form>
            <form className="row g-3" method='GET' action='http://localhost:5001/register'>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Get Count</button>
            </div>
            </form>
        </div>
    );
}

export default login;