<template>
<div>
    <nav class="nav center">
        <ul class="menu">
            <li class="menu__list">
                <router-link to="/" class="menu__link active">Home</router-link>
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Man</a>
                <MegaMenu 
                        srcImg="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/mega_menu.png" 
                        nameCategory="Man" 
                        style="left: 15px" />
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Women</a>
                <MegaMenu 
                        srcImg="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkCuCuOvCo6gPIccMCgDGytaaKTM5SRkZCeTgDn6uOyic" 
                        nameCategory="Women" 
                        style="left: 45px" />
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Kids</a>
                <MegaMenu 
                        srcImg="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/kids.jpg" 
                        nameCategory="Kids" />
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Accosseriese</a>
                <MegaMenu 
                        srcImg="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/accessories.jpg" 
                        nameCategory="Accoseriese" />
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Featured</a>
                <MegaMenu 
                        srcImg="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/128/applications-featured-icon.png" 
                        nameCategory="Featured" 
                        style="right: 45px" />
            </li>
            <li class="menu__list">
                <a @click="$router.push('/Product')" class="menu__link">Hot Deals</a>
                <MegaMenu 
                        srcImg="https://raw.githubusercontent.com/KaterinaLove/static/master/img/JS1_shop/imgs/hotdeal.png" 
                        nameCategory="Hot Deals" 
                        style="right: 15px" />
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
import MegaMenu from '../product/MegaMenu';

export default {
    components: {
        MegaMenu
    }
}
</script>