import React from 'react';

import classes from './Signin.css';

const signin = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.container}>
                <h1>Connect</h1>
                <h2>Login</h2>
                <div>
                    <form action="/">
                        <input type="tel" placeholder="Your SAP ID" name="id"  />
                        <input type="password" placeholder="Password" name="pass" required />
                        <p><a href="/">Forgot password?</a></p>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default signin;