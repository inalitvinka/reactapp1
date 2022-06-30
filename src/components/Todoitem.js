const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1.5rem',
        border: 'solid .2rem #ccc',
        borderRadius: '.8rem',
        backgroundColor: 'aliceblue',
    },
    input: {
        marginRight: '1rem',
    }
}

function TodoItem( {todo, index, onChange} ) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} onChange={(event) => console.log(event.target, todo.id)}/>
                <strong>{++index}</strong>
                &nbsp;  
                {todo.title}
            </span>
            <button className="btn">&times;</button>
        </li>
    )
}


export default TodoItem;