import './CartWidget.css'

const CartWidget = () => {

    const imgCart = "https://cdn-icons-png.flaticon.com/512/565/565375.png"

  return (
    <div>
        <img className="imgCart" src={imgCart} alt="Cart Icon" />
        <strong>4</strong>
    </div>
  )
}

export default CartWidget