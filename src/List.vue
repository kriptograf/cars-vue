<template>
    <div>
        <h2>List</h2>
        <input type="text" v-model="searchName">

        <ul>
            <li v-for="item of filteredNames">{{ item }}</li>
        </ul>
    </div>

</template>

<script>
    import ListMixin from './listMixin';
    export default {
        name: "List",
        mixins: [ListMixin]
    }
</script>

<style scoped>

</style>