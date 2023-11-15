import { reactive, computed } from "vue";
import { type Product } from "@/model/products";

export type ShoppingCartItem = {
    product: Product,
    quantity: number
}

const cart = reactive([] as ShoppingCartItem[])

export const getCart = () => cart;

export const addToCart = (product: Product) => {
    const item = cart.find(item => item.product.id === product.id)
    if (item) {
        item.quantity++
    } else {
        cart.push({ product, quantity: 1})
    }
};

export const removeFromCart = (product: Product, quantity?: number) => {
    const item = cart.find(item => item.product.id === product.id)
    if (item) {
        quantity = quantity ?? item.quantity
        item.quantity -= quantity
        if (item.quantity <= 0) {
            cart.splice(cart.indexOf(item), 1)
        }
    }
};

export const clearCart = () => {
    cart.splice(0, cart.length)
};

export const total = computed(() => cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0))
export const count = computed( () => cart.reduce((sum, item) => sum + item.quantity, 0))


/* main functional functions for functional programming
    filter
    find
    map
    reduce

    splice isn't good for functional programming, splice directly changes the array
*/
