<template>
    <div class="header__link" id="dropdownMenu2">
        <a  type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Account
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <router-link class="dropdown-item" to="/">Action</router-link>
            <router-link class="dropdown-item" to="/">Another action</router-link>
            <router-link class="dropdown-item" to="/">Something else here</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>