<template>
    <div class="main">
        <v-data-table :headers="headers" :items="employees" class="elevation-1">
            
            <template v-slot:item.action="{ item }">
                <v-icon @click="addListAllEmployee" size="large" color="green-darken-2" icon="mdi-dots-vertical"></v-icon>
            </template>
        </v-data-table>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            headers: [
                {
                    title: 'ID post',
                    align: 'start',
                    sortable: true,
                    key: 'id',
                },
                { title: 'Title post', key: 'title' },
                { title: 'Body post', key: 'body' },
                { title: 'User ID', key: 'userId' },
                { title: 'Action', key: 'action' },
            ],
            employees:[],
        }
    },
    created() {
        this.getListAllEmployee();
    },
    methods: {
        async getListAllEmployee() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                this.employees = response.data
                console.log(response, "response ");
            } catch (error) {
                console.log('error', error);
            }
        },
        async addListAllEmployee() {
            try {
                axios.create({
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });
                const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                    title: 'New 1',
                    body: 'body 1',
                    userId: 999,
                });
                console.log(response, "response ");
            } catch (error) {
                console.log('error', error);
            }
        },
        getColor(calories) {
            if (calories > 400) return 'red'
            else if (calories > 200) return 'orange'
            else return 'green'
        },
    },
}
</script>
 
<style scoped></style>
 