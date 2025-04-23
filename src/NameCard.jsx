function NameCard(props) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <p className="card-text">Hello, my name is {props.name}. I am {props.age}. You can contact me through {props.email}</p>
                </div>
            </div>
        </>
    );
}
export default NameCard