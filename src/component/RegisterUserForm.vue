<template>
    <div class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2">
        <basic-input
            v-model="modelValue.firstName"
            :error="getError(errors, 'firstName')"
            label="First name"
            name="firstName"
            type="text"
            required />
        <basic-input
            v-model="modelValue.lastName"
            :error="getError(errors, 'lastName')"
            label="Last name"
            name="firstName"
            type="text"
            required />
        <basic-input
            v-model="modelValue.email"
            :error="getError(errors, 'email')"
            label="Email"
            name="email"
            type="email"
            required />
        <label>
            Role
            <select v-model="modelValue.role" name="role" required class="bg-gray-100 px-4 py-1 block rounded w-full">
                <option :value="null" disabled>- select role --</option>
                <option v-for="role in roles" :value="role.id" :key="role.id">{{ role.name }}</option>
            </select>
        </label>
        <basic-input
            v-model="modelValue.password"
            :error="getError(errors, 'password')"
            label="Password"
            name="password"
            type="password"
            required />
        <basic-input
            v-model="modelValue.passwordVerify"
            :error="getError(errors, 'passwordVerify')"
            label="Confirm password"
            name="passwordVerify"
            type="password"
            required />
    </div>
</template>

<script>
import BasicInput from "./BasicInput.vue";

export default {
    name: "RegisterUserForm",
    components: {
        BasicInput,
    },
    props: {
        modelValue: {
            type: Object,
            required: true,
        },
        errors: {
            required: false,
            type: Object,
            default() {
                return null;
            }
        }
    },
    data() {
        return {
            roles: [
                {
                    id: 1,
                    name: "User"
                },
                {
                    id: 2,
                    name: "Administrator"
                },
            ],
        }
    },
}
</script>

<style scoped>

</style>
