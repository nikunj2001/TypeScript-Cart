import CartItem from "../CartItem/CartItem";
import {Wrapper} from "./Cart.styles"
import { CartItemType } from "../App";
type Props={
    cartItems:CartItemType[];
    addToCart:(clickedItem:CartItemType)=>void;
    removeFromcart:(id:number)=>void;
};
const Cart:React.FC<Props>=({cartItems,addToCart,removeFromcart})=>{
        const calculateTotal = (items:CartItemType[])=>
            items.reduce((ack:number,item)=>ack+item.amount*item.price,0)
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {
                cartItems.length===0 ? <p>No Item in Cart</p>:null
            }
            {cartItems.map(item=>(
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromcart={removeFromcart}  />
            ))}
            <h2>Total : ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}
export default Cart;