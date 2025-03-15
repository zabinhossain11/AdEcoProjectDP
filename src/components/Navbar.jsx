import "./navbar.scss"

function Navbar()
{
    return(
        <nav>
            <div className = "left">
                <a> 
                    <img src= "/logo.png" alt = ""/>    
                    <span> LamaEstate</span>           
                </a>
            </div>
            <div className = "right">Right</div>
        </nav>
    )

}

export default Navbar;