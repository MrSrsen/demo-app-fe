<template>
    <section class="shadow rounded p-6 bg-white border mx-auto max-w-xl">
        <h3 class="text-xl font-medium">Register new user</h3>

        <alert v-if="message" :type="message.type" class="mt-4">
            {{ message.text }}
        </alert>

        <register-user-form
            :value="user"
            class="mt-6" />

        <div class="mt-6 text-right">
            <base-button
                @click="onRegistrationFormSubmit"
                :spinner="pendingRequest"
                :disabled="pendingRequest"
                type="primary"
                >Register</base-button>
        </div>
    </section>
</template>

<script>
import config from "../config.js";
import RegisterUserForm from "../component/RegisterUserForm.vue";
import Alert from "../component/Alert.vue";
import BaseButton from "../component/BaseButton.vue";

export default {
    name: "RegisterUserPage",
    components: {
        BaseButton,
        Alert,
        RegisterUserForm,
    },
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                role: null,
                password: "",
                passwordConfirmation: "",
            },
            message: null,
            pendingRequest: false,
        }
    },
    methods: {
        onRegistrationFormSubmit() {
            this.pendingRequest = true;
            this.message = null;

            return window.fetch(`${config.backendApiRoot}/user`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: this.user,
            }).then((response) => {
                this.message = {
                    type: 'success',
                    text: response.message
                };
            }).catch((error) => {
                this.message = {
                    type: 'danger',
                    text: error.message
                };
            }).then(() => {
                this.pendingRequest = false;
            });
        }
    }
}
</script>

<style scoped>

</style>
