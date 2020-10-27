<template>
    <div class="newArrivalsBg pb-5 pt-5">
        <div class="px-md-0 container d-flex flex-column flex-sm-row justify-content-between align-items-center ">
            <div class="newArrivals">New Arrivals</div>
            <div class="newArrivalsPath mt-4 mt-sm-0">
                    <router-link to="/">Home</router-link>
                    <a @click="$router.push('/Product')">men</a>
                    <a @click="$router.push('/SinglePage')" >new arrivals</a>
            </div>
        </div>
    </div>
</template>