function Content (props) {
    const items = [1, 2, 3, 4, 5, 6, 7,];

    const htmlItems = items.map((item, index) => <h2 key={index}>{item}</h2>)
   
    return (
        <div className="border">
            <h2>{props.prop}</h2>
            <h3>{props.name}</h3>
            <h2>Content</h2>
            <h2>another content</h2>
            {htmlItems}

        </div>
    );
}

export default Content;