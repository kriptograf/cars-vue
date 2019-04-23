<template>
    <div>
        <h1>Cars page</h1>
        <ul class="nav flex-column nav-pills">
            <router-link
            tag="li"
            v-for="car in 6"
            :to="/car/+car"
            :key="car"
            class="nav-item"
            >
                <a class="nav-link">Car {{car}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Cars"
    }
</script>

<style scoped>

</style>