<template>
    <div>
        <h1>Hello vue</h1>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        :class="{'is-invalid': $v.email.$error}"
                        @blur="$v.email.$touch()"
                        v-model="email"
                >
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    import { required, maxLength, email } from 'vuelidate/lib/validators'
    export default {
        name: "Login",
        data(){
            return{
                email: ''
            }
        },
        validations:{ /** настраиваем валидаторы */
            email: {
                required: required,
                maxLength: maxLength(255),
                email: email
            }
        }
    }
</script>

<style scoped>

</style>