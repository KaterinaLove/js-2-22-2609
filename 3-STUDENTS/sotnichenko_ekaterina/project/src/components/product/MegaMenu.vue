<template>
    <div class="mega_menu">
        <div class="mega_menu__column">
            <h6 class="mega_menu__title">{{ nameCategory }}</h6>
            <ul class="mega_menu__ul">
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Blazers</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Denim</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Leggings/Pants</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Skirts/Shorts</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Accessories </a></li>
            </ul>
        </div>
        <div class="mega_menu__column">
            <h6 class="mega_menu__title">{{ nameCategory }}</h6>
            <ul class="mega_menu__ul">
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
            </ul>
            <h6 class="mega_menu__title mega_menu__title--middle">{{ nameCategory }}</h6>
            <ul class="mega_menu__ul">
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
            </ul>
        </div>
        <div class="mega_menu__column">
            <h6 class="mega_menu__title">{{ nameCategory }}</h6>
            <ul class="mega_menu__ul">
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Dresses</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Tops</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Sweaters/Knits</a></li>
                <li class="mega_menu__list"><a href="" class="mega_menu__link">Jackets/Coats</a></li>
            </ul>
            <img v-bind:src="srcImg">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        nameCategory: {
                type: String
            },
        srcImg: {
            type: String
        }
    }
}
</script>

<style>

</style>