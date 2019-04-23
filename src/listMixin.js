export default {
    data(){
        return {
            searchName: '',
            names: [
                'audi',
                'bmw',
                'ford',
                'volvo'
            ]
        }
    },
    computed: {
        filteredNames(){
            return this.names.filter(name => {
                return name.indexOf(this.searchName) !== -1
            });
        }
    }
}