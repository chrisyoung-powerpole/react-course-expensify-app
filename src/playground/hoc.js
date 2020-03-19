//Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>Some Info: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComment) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a warning</p>}
            <WrappedComment {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComment) => {
    return (props) => (
        <div>
            {props.isAuthenticaed ? (
                <WrappedComment {...props} />
            ) : (
                    <p>Please Login</p>
                )}
        </div>
    );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);


ReactDOM.render(<AuthInfo isAuthenticaed={false} isAdmin={false} info="there are details" />, document.getElementById('app'));