import {defineStore} from "pinia";

export const useCartStore = defineStore('cart',function (){
    const cart = ref([]);
    function addProductInCart(product){
        cart.value.push(product)
    }

    return {cart, addProductInCart}
})