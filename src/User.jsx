export default function User({ user }) {
    const userStyle = {
        border: "2px solid tomato",
        padding:'20px',
        margin:'20px',
        borderRadius:'20px'
    }
    const { name, email } = user;

    return (
        <>
            <div style={userStyle}>
                <h4>Name: {name}</h4>
                <h4>Email: {email}</h4>
            </div>
        </>
    );
}
