<template>
  <div>
    <div class="col-md-12 form-wrapper">
      <h2>Create User</h2>
      <form id="create-post-form" @submit.prevent="createUser">
        <div class="form-group col-md-12">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            v-model="nome"
            name="title"
            class="form-control"
            placeholder="Entre com o Nome"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="idade">Idade</label>
          <input
            type="text"
            id="idade"
            v-model="idade"
            name="title"
            class="form-control"
            placeholder="Entre com a idade"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="github_user">Usuário GitHub</label>
          <input
            type="text"
            id="github_user"
            v-model="github_user"
            name="title"
            class="form-control"
            placeholder="Entre com o usuário GitHub"
            v-on:change="load_git"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="github_id">GitHub ID</label>
          <input
            type="text"
            id="github_id"
            v-model="github_id"
            name="title"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-12">
          <label for="cep">CEP</label>
          <input
            type="text"
            id="cep"
            v-model="cep"
            name="title"
            class="form-control"
            placeholder="Entre com o cep"
            v-on:change="load_cep"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="rua">Endereço</label>
          <input
            type="text"
            id="rua"
            v-model="rua"
            name="title"
            class="form-control"
            placeholder="Entre com Endereço."
          />
        </div>
        <div class="form-group col-md-12">
          <label for="numero">Número</label>
          <input
            type="text"
            id="numero"
            v-model="numero"
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
            v-model="complemento"
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
            v-model="bairro"
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
            v-model="cidade"
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
            v-model="estado"
            name="estado"
            class="form-control"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Create User</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { server } from "../../helper";
import router from "../../router";
export default {
  data() {
    return {
      nome: "",
      idade: "",
      github_user: "",
      github_id: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
    };
  },
  methods: {
    createUser() {
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
      this.__submitToServer(userData);
    },
    __submitToServer(data) {
      console.log(`${server.baseURL}/user/create`);
      axios.post(`${server.baseURL}/user/create`, data).then((data) => {
        console.log(data);
        router.push({ name: "Home" });
      });
    },
    load_cep() {
      var url_cep;
      this.cep = this.cep.trim().replace(/[^0-9]/g, "");
      url_cep = "https://viacep.com.br/ws/" + this.cep + "/json";

      // clear all headers axios to viacep
      axios.defaults.headers.common = null;

      console.log(url_cep);

      axios
        .get(url_cep)
        .then(
          function (response) {
            this.rua = response.data.logradouro;
            this.complemento = response.data.complemento;
            this.bairro = response.data.bairro;
            this.estado = response.data.uf;
            this.cidade = response.data.localidade;
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error.statusText);
        });
    },
    load_git() {
      var url_git;

      axios.defaults.headers.common = null;

      url_git = "https://api.github.com/search/users?q=" + this.github_user;

      console.log(url_git);
      axios
        .get(url_git)
        .then(
          function (response) {
            this.github_id = response.data.items[0].id;
          }.bind(this)
        )
        .catch(function (error) {
          console.log(error.statusText);
        });
    },
  },
};
</script>
