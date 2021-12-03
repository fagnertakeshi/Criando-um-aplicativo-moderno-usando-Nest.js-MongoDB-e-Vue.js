<template>
  <div class="container-fluid">
    <div class="text-center">
      <h1>ROIT TEST</h1>
      <p>Built with Nest.js, Vue.js, and MongoDB</p>
      <div v-if="users.length === 0">
        <h2>No user found at the moment</h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Usuário GitHub</th>
            <th scope="col">CEP</th>
            <th scope="col">Endereco</th>
            <th scope="col">Numero</th>
            <th scope="col">Complemento</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col">Estado</th>
            
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.idade }}</td>
            <td>{{ user.github_user }}</td>
            <td>{{ user.cep }}</td>
            <td>{{ user.rua }}</td>
            <td>{{ user.numero }}</td>
            <td>{{ user.complemento }}</td>
            <td>{{ user.bairro }}</td>
            <td>{{ user.cidade }}</td>
            <td>{{ user.estado }}</td>
            <td>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px">
                  <router-link
                    :to="{ name: 'Edit', params: { id: user._id } }"
                    class="btn btn-sm btn-outline-secondary"
                    >Edit user</router-link
                  >
                  <button
                    class="btn btn-sm btn-outline-secondary"
                    v-on:click="deleteuser(user._id)"
                  >
                    Delete user
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { server } from "../helper";
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchusers();
  },
  methods: {
    fetchusers() {
      axios
        .get(`${server.baseURL}/user/users`)
        .then((data) => (this.users = data.data));
    },
    deleteuser(id) {
      axios
        .delete(`${server.baseURL}/user/delete?userID=${id}`)
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
  },
};
</script>
