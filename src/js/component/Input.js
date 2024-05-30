// Input.js
import React from "react";

const Input = ({ value, onChange, onKeyPress }) => {
    return (
        <div className="input-group mb-3 mt-3 container">
            <div className="form-floating">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInputGroup1"
                    placeholder="Username"
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                <label htmlFor="floatingInputGroup1">I N P U T....</label>
            </div>
        </div>
    );
};

export default Input;
