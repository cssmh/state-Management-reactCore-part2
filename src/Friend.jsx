export default function Friend({getFriend}){
    const {name, email, phone, address} = getFriend;
    console.log(getFriend)
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Zip: {address.zipcode}</p>
        </div>
    )
}