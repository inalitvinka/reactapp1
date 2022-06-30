

function Header (props) {
    return (
        <header>
            <Nav logo={props.data.logo} navData={props.data.nav}/>
            <h1 style={{textAlign: 'center', font: '4rem sans-serif', marginTop: '1rem'}}>Hello, World! {props.data.appname}</h1>
        </header>
    )
}

function Nav (props) {
    let nav = props.navData;
    const navLinks = nav.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
    return (
        <nav className="nav">
            <a className="logo" href="/">{props.logo}</a> 
            <ul>
                {navLinks}
            </ul>
        </nav>
    )
}

export default Header;