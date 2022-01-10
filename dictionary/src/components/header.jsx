import './dictionary.css';
function Header (){
    return (
        <>
        <nav className="menu-main">
        <ul>
            <li><a href='/'>Table</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/dictionary'>Dictionary</a></li>
            </ul>
        </nav>
        
        </>
    )
}
export default Header;