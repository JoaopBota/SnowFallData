import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ( ) => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return(
        !isAuthenticated && (
            <button class="inline-flex items-center bg-slate-400 text-white focus:outline-none hover:bg-gray-800 rounded-md px-7 py-2" onClick={() => loginWithRedirect()}>
                Sign In
            </button>
        )
    )
    
}

export default LoginButton