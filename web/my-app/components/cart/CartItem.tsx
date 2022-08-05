import { item } from "../../store/cart-context";
import Image from "next/image";
import { urlFor } from "../../../../lib/sanity";
import { useCartCtx } from "../../store/cart-context";

const CartItem = ({ item }: { item: item }) => {
    const { cart, clearCart, removeFromCart, totalAmount, addToCart } = useCartCtx();
    console.log(item);
    return (
        <li className="flex gradient--text items-center pb-2 mb-2 border-b-2">
            <Image className='rounded-t-md' src={urlFor(item.image).url()} alt={item.image} width={70} height={70} />
            <p className="w-7/8 self-center ml-6 gradient--text">
                {item.name}
            </p>
            <p className="mx-6 gradient--text font-semibold self-center text-3xl ml-auto">
                {item.price * item.quantity}$
            </p>
            <div className="flex justify-center items-center">
                <button onClick={removeFromCart.bind(null, item)} className="font-bold text-3xl px-2">
                    -
                </button>
                <div className="border translate-y-1 w-8 h-8 flex items-center justify-center mx-4">
                    <p className="gradient--text cursor-default">
                        {item.quantity}
                    </p>
                </div>
                <button onClick={addToCart.bind(null, item)} className="font-bold text-3xl px-2">
                    +
                </button>
                <button className="font-bold text-3xl px-2 ml-2">
                    x
                </button>
            </div>
        </li>
    )
}

export default CartItem;