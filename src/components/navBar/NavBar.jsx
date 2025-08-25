import CartWidget from '../cartWidget/cartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Fruit Shop</h1>
        <nav>
            <ul>
                <li>Berries</li>
                <li>Citrus</li>
                <li>Drupes</li>
                <li>Pome</li>
                <li>Tropical</li>
                <li>Melons</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar