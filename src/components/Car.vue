<template>
    <div>
        <h1>Car {{ id }}</h1>
        <button class="btn btn-sm btn-info" @click="goToBack">Back</button>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data(){
            return {
                //id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        methods: {
            goToBack(){
                this.$router.push('/cars');
            }
        },
        watch: {
            $route(toRoute){
                this.id = toRoute.params['id']
            }
        }
    }
</script>

<style scoped>

</style>