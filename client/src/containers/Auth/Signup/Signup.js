import React from 'react';

import classes from './Signup.css';

const signup = (props) => {
    return (
        <div>
            <div className={classes.main}>
                <div className={classes.container}>
                    <h1>Connect</h1>
                    <h2>Sign up</h2>
                    <div>
                        <form action="/auth/signin">
                            <input type="text" placeholder="Your Name" name="name" required /> 
                            <input type="tel" placeholder="Your SAP ID" name="id" />
                            <input type="email" placeholder="Your E-Mail ID" name="e-id" />
                            <select name="dept" id="" required>
                                <option value="">Department</option>
                                <option value="computer">Computer</option>
                                <option value="it">IT</option>
                                <option value="extc">EXTC</option>
                                <option value="civil">Civil</option>
                                <option value="mechanical">Mechanical</option>
                            </select>
                            <input type="password" placeholder="Password" name="pass1" required />
                            <input type="password" placeholder="Confirm Password" name="pass2" required />
                            <button>Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default signup;