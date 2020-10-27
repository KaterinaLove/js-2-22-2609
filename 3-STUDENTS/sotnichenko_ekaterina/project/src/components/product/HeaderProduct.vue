<template>
    <header class="header center">
            <HeaderLeft />
            <div class="header__right">
                <div class="header__bucket">
                    <div class="header__count" id="basket-count"></div>
                    <button id="basket-toggler" @click="show = !show">
                        <img class="header__cart" src="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/cart.png" alt="cart">
                    </button>
                    <Basket :v-if="$router.from == '/ShoppingCart'" :show="show"/>
                </div>
                <MyAccount />
            </div>
    </header>
</template>

<script>
import HeaderLeft from '../additional/HeaderLeft.vue';
import MyAccount from '../additional/MyAccount.vue';
import Basket from '../Basket.vue';


export default {
    data() {
        return {
            show: false
        }
    },
    components: {
        HeaderLeft,
        MyAccount,
        Basket
    }
}
</script>