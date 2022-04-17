import React from 'react';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth, options);
    return (
        <div>

        </div>
    );
};

export default RequireAuth;