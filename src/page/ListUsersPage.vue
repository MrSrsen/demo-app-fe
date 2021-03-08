<template>
    <div class="shadow rounded bg-white p-6">
        <h3 class="font-medium text-xl">Users list</h3>

        <alert v-if="message" :theme="message.theme">{{ message.text }}</alert>

        <div v-if="users == null" class="mt-6 bg-gray-100 rounded p-12 text-center">
            <spinner size="64" />
            <p class="mt-3 text-sm text-gray-500">Loading users...</p>
        </div>
        <alert v-else-if="users.length === 0" class="mt-6" theme="warning">Users are empty</alert>
        <table v-else class="mt-6 w-full users-table">
            <thead class="border-b">
            <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role.name }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Alert from "../component/Alert.vue";
import Spinner from "../component/Spinner.vue";

export default {
    name: "ListUsersPage",
    components: {
        Spinner,
        Alert,
    },
    data() {
        return {
            users: null,
            message: null,
        };
    },
    mounted() {
        this.fetch('get', '/user').then((response) => {
            this.users = response.users;
        }).catch((response) => {
            this.message = {
                theme: 'danger',
                text: response.message || 'Faile to load users'
            };
        });
    }
}
</script>

<style scoped>
.users-table > thead {
    background-color: #eee;
}
.users-table > thead th {
    padding: 6px 6px;
    text-align: left;
}
.users-table > tbody td {
    padding: 3px 6px;
    text-align: left;
}
.users-table > tbody tr:nth-child(2n) {
    background-color: #fafafa;
}
</style>
