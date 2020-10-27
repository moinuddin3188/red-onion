import React from 'react';
import'./Header.css';

const Header = () => {
    return (
        <div className="header-container d-flex justify-content-center align-items-center">
            <div>
                <form className="text-center" action="">
                    <h1 className="mb-3">Best food waiting for your bally</h1>
                    <div className="form-row ml-3">
                        <div className="col">
                            <input class="form-control form-control-sm" type="search" name="" id=""/>
                        </div>
                        <div class="col-auto">
                            <input class="form-control form-control-sm" type="submit" value="Search"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Header;