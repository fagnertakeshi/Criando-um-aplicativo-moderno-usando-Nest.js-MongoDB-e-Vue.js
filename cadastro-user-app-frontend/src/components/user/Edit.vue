<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">
          View All users
        </button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit user</h2>
      <form id="create-post-form" @submit.prevent="edituser">
        <div class="form-group col-md-12">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            v-bind:value="user.nome"
            v-on:input="$emit('user.nome', $event.target.value)"
            name="nome"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="idade">Idade</label>
          <input
            type="text"
            id="idade"
            v-model="user.idade"
            name="idade"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="github_user">Usuário Github</label>
          <input
            type="text"
            id="github_user"
            v-model="user.github_user"
            name="github_user"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="cep">CEP</label>
          <input
            type="text"
            id="cep"
            v-model="user.cep"
            name="cep"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="rua">Endereco</label>
          <input
            type="text"
            id="rua"
            v-model="user.rua"
            name="rua"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="numero">Número</label>
          <input
            type="text"
            id="numero"
            v-model="user.numero"
            name="numero"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            v-model="user.complemento"
            name="complemento"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            v-model="user.bairro"
            name="bairro"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            v-model="user.cidade"
            name="cidade"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="estado">Estado</label>
          <input
            type="text"
            id="estado"
            v-model="user.estado"
            name="estado"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit user</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      user: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getuser();
  },
  methods: {
    edituser() {
      let userData = {
        nome: this.nome,
        idade: this.idade,
        github_user: this.github_user,
        numero: this.numero,
        cep: this.cep,
        rua: this.rua,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
      };
      console.log(this.id);
      axios
        .put(`${server.baseURL}/user/update?userID=${this.id}`, userData)
        .then((data) => {
          console.log(data);
          router.push({ name: "Home" });
        });
    },
    getuser() {
      axios
        .get(`${server.baseURL}/user/user/${this.id}`)
        .then((data) => (this.user = data.data));
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>
