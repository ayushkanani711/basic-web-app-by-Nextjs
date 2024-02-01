export default function UserProile({params}:  any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2" >
            <h1>Profile</h1>
            <br />
            <p>Profile Page of 
                <span> {params.id}</span>
            </p>
        </div>
    )
}