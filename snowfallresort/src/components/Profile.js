import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
    
}

export default Profile