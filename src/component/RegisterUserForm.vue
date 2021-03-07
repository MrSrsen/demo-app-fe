<template>
    <form class="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2">
        <label>
            First name
            <input v-model="value.firstName" name="firstName" type="text" required class="bg-gray-100 px-4 py-1 block rounded w-full">
        </label>
        <label>
            Last name
            <input v-model="value.lastName" name="lastName" type="text" required class="bg-gray-100 px-4 py-1 block rounded w-full">
        </label>
        <label>
            Email
            <input v-model="value.email" name="email" type="email" required class="bg-gray-100 px-4 py-1 block rounded w-full">
        </label>
        <label>
            Role
            <select v-model="value.role" name="role" required class="bg-gray-100 px-4 py-1 block rounded w-full">
                <option :value="null" disabled>- select role --</option>
                <option v-for="role in roles" :value="role.id" :key="role.id">{{ role.name }}</option>
            </select>
        </label>
        <label>
            Password
            <input v-model="value.password" name="password" type="password" required class="bg-gray-100 px-4 py-1 block rounded w-full">
        </label>
        <label>
            Confirm password
            <input v-model="value.passwordConfirmation" name="passwordConfirmation" type="password" required class="bg-gray-100 px-4 py-1 block rounded w-full">
        </label>
    </form>
</template>

<script>
export default {
    name: "RegisterUserForm",
    props: {
        value: {
            type: Object,
            required: true,
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
    }
}
</script>

<style scoped>

</style>
