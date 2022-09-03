import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ( ) => {
    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
            <button class="inline-flex items-center bg-slate-400 text-white focus:outline-none hover:bg-gray-800 rounded-md px-7 py-2" onClick={() => logout()}>
                Log Out
            </button>
        )
    )
    
}

export default LogoutButton