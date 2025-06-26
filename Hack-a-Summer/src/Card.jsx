
function Card (props){

    const divStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
    };

    return (
        <div className="Card" style={divStyle} onClick={props.onClick}>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <p className="td">{props.td}</p>
        </div>
    );
}

export default Card