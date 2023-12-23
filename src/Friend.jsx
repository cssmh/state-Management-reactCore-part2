export default function Friend({getFriend}){
    const {name, email} = getFriend;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}