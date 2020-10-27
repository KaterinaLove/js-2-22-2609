<template>
<div>
    <div class="page" id="page">
        <header class="header center">
            <HeaderLeft />
            <div class="header__right">
                <div class="header__bucket">
                    <div class="header__count" id="basket-count"></div>
                    <button id="basket-toggler" @click="show = !show">
                        <img class="header__cart" src="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/cart.png" alt="cart">
                    </button>
                    <Basket :show="show"/>
                    <!--ref="basket"  -->
                </div>
                <MyAccount  />
            </div>
        </header>
        <NavCenter />
        <PromoCenter />
        <ProductsCenter />
        <section class="catalog center">
            <h3 class="catalog__header">Featured Items</h3>
            <p class="catalog__header_text">Shop for items based on what we featured in this week</p>
            <Catalog  />
            <div class="catalog__button">
                    <a @click="$router.push('/Product')" class="catalog__link" >Browse All Product
                        <i class="fas fa-long-arrow-alt-right"></i>
                    </a>
            </div>
        </section>
        <OfferCenter />
        <Subscribe />
        <ContactsCenter />
        <FooterBox />
    </div>
    <div class="popup" id="popup">
        <button class="popup__close" id="close">
            <i class="fa fa-close"></i>
        </button>
        <div class="popup__wrapper">
            <button id="prev" class="popup__prev">
                <i class="fas fa-chevron-left"></i>
            </button>
            <img src="" alt="#" id="main-pic" class="popup__main">
            <button id="next" class="popup__next">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>  
        <div id="carousel" class="popup__carousel" name="carousel">
        </div>
    </div>
</div>
</template>

<script>
import Catalog from '../components/Catalog.vue';
import Basket from '../components/Basket.vue';
import HeaderLeft from '../components/additional/HeaderLeft.vue';
import NavCenter from '../components/additional/NavCenter.vue';
import PromoCenter from '../components/additional/PromoCenter.vue';
import ProductsCenter from '../components/additional/ProductsCenter.vue';
import OfferCenter from '../components/additional/OfferCenter.vue';
import Subscribe from '../components/additional/Subscribe.vue';
import ContactsCenter from '../components/additional/ContactsCenter.vue';
import FooterBox from '../components/additional/FooterBox.vue';
import MyAccount from '../components/additional/MyAccount.vue';


export default {
    data() {
        return {
            show: false
        }
    },
  name: 'Home',
  components: {
    Catalog,
    Basket,
    HeaderLeft,
    NavCenter,
    PromoCenter,
    ProductsCenter,
    OfferCenter,
    Subscribe,
    ContactsCenter,
    FooterBox,
    MyAccount
  }
}
</script>
