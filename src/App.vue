<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" class="nav-item" exact="" to="/" active-class="active">
              <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" exact="" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <router-view></router-view>

      <div class="form-group">
        <label for="car-name">Car name</label>
        <input type="text" class="form-control" id="car-name" placeholder="Enter car name" v-model.trim="carName">
      </div>
      <div class="form-group">
        <label for="car-year">Car Year</label>
        <input type="text" class="form-control" id="car-year" placeholder="Car Year" v-model.number="carYear">
      </div>
      <button type="submit" class="btn btn-primary" @click="createCar">Submit</button>

    <hr>
    <button class="btn btn-info" @click="loadCars">Load Cars</button>

    <hr>

    <ul class="list-group">
      <li class="list-group-item" v-for="car of cars" v-bind:key="car.id">
        <strong>{{car.name}}: </strong> {{car.year}}
      </li>
    </ul>

  </div>
</template>

<script>


  export default {
    name: 'app',
    data(){
      return{
        carName: '',
        carYear: 2019,
        cars: [],
        resource: null
      }
    },
    methods: {
      createCar(){
        const car = {
          name: this.carName,
          year: this.carYear
        };
        /**
         * Без использования resource
         */
        /*this.$http.post('http://localhost:3000/cars', car)
                .then(response => {
                  return response.json();
                })
                .then(newCar => {
                  this.cars.push(newCar)
                })*/
        /**
         * POST сохранание данных на сервере с помощью resource
         */
        this.resource.save({}, car)
          .then(response => {
            return response.json();
          })
          .then(newCar => {
            this.cars.push(newCar)
          });
      },
      loadCars(){
        /**
         * Без использования resource
         */
        /*this.$http.get('http://localhost:3000/cars')
                .then(response => {
                  return response.json();
                })
                .then(cars => {
                  this.cars = cars
                });*/
        /**
         * Загрузить данные используя resource
         */
        this.resource.get()
                .then(response => {
                  return response.json();
                })
                .then(cars => {
                  this.cars = cars
                });
      }
    },
    created() {
      /**
       * Здесь достаточно передать path, базовый url задан в глобальной конфигурации
       * @type {*|ResourceMethods}
       */
      this.resource = this.$resource('cars')
    }
  }
</script>