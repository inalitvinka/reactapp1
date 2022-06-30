import TodoItem from './Todoitem';

const styles = {
    ul: {
        listStyle: 'none',
        margin: '0',
        padding: '0',
        color: 'red',
        fontSize: '1.5rem',
        display:'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
}

export default function Todolist(props) {
    return (
        <>
            <h2 style={{marginLeft: '2rem', fontSize:' 2rem',}}>React To Do List</h2>
            <ul style={styles.ul}>
                { props.todos.map((todo, index) => {
                    return (
                        <TodoItem 
                            todo={todo} 
                            key={todo.id} 
                            index={index} 
                            // onChange={props.onToggle}
                        />
                    )
                }) }
            </ul>
        </>
        
    )
}