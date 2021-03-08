<template>
    <section class="shadow rounded p-6 bg-white border mx-auto max-w-xl">
        <h3 class="text-xl font-medium">Register new user</h3>

        <alert v-if="message" :theme="message.theme" class="mt-4">
            {{ message.text }}
        </alert>

        <form @submit.prevent="onRegistrationFormSubmit">
            <register-user-form
                v-model="user"
                :errors="errors"
                class="mt-6" />

            <div class="mt-6 text-right">
                <base-button
                    :spinner="pendingRequest"
                    :disabled="pendingRequest"
                    theme="primary"
                    type="submit"
                >Register</base-button>
            </div>
        </form>
    </section>
</template>

<script>
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
            user: this.getEmptyUser(),
            message: null,
            pendingRequest: false,
            errors: null,
        }
    },
    methods: {
        onRegistrationFormSubmit(e) {
            this.pendingRequest = true;
            this.message = null;
            this.errors = null;

            this.fetch('post', '/user', this.user).then((response) => {
                this.message = {
                    theme: 'success',
                    text: response.message
                };

                this.user = this.getEmptyUser();
            }).catch((response) => {
                this.message = {
                    theme: 'danger',
                    text: response.message || 'Unexpected error'
                };

                this.errors = response.errors || null;
            }).then(() => {
                this.pendingRequest = false;
            });
        },
        getEmptyUser() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                role: null,
                password: "",
                passwordVerify: "",
            };
        }
    }
}
</script>

<style scoped>

</style>
