function Goods (props) {
    return (
        <div className="container">
            {/* <h2>Goods for site</h2> */}
            <div className="card">
                <h3>{props.title}</h3>
                <p>{props.cost}</p>
                <img src={props.img} alt={props.title} />
            </div>
        </div>
    )
}
export default Goods;