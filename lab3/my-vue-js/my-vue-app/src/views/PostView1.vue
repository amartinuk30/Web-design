<template>
<body>
      <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <div class="logo">
            <a class="navbar-brand" href="Main.html">
              <img src="../assets/emblema.png">
            </a>
            <b class="navbar-text">
              ФК Динамо Київ
            </b>
          </div>
        </nav>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link " href="/">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/info">Інфо</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">Профіль</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Реєстрація</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/input">Увійти</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">

        <div class="col-1"> </div>

        <div class="col-10">
          <h1 class="display-3">Вітіньйо орендований «Атлетико Паранаенсе»</h1>
          <img src="../assets/post1.jpg" class="post_img" alt="...">
          
          <p align="left">Атакувальний півзахисник київського «Динамо» Вітіньйо, скориставшись спеціальним рішенням ФІФА щодо
            легіонерів у чемпіонаті України, повернувся до «Атлетико Паранаенсе».</p>
          <p align="left">Бразилець виступатиме за «Атлетико Паранаенсе» на правах оренди, розрахованої до 30 червня 2022 року. При
            цьому з 1 липня контракт Вітіньйо з «Динамо» буде поновлено.</p>
          <p align="left">Нагадаємо, саме з «Атлетико Паранаенсе» Вітіньйо перейшов до «Динамо» у серпні 2021 року, провівши з того
            часу 13 матчів у складі «біло-синіх» і відзначившись трьома голами.</p>
          <p align="left"><em>Бажаємо Вітіньйо успішного виступу на батьківщині!</em></p>
          

          <div class="blog-comment">
            <ul class="comments">
              <textarea class="form-control" id = "comment-area" placeholder="Напишіть коментар... (за відсутності кнопки  #Надіслати#  перевірте авторизацію)" rows="3" v-model="body"></textarea>
              <tr v-for="(reg, index) in registers" :key = "index">
              <div v-if= "reg.my_profile_check == true">
              <button type="button" id = "comment-add" class="btn btn-info pull-right" v-on:click="addComment_1(reg.name, reg.last_name)">Надіслати</button>
              </div>
              </tr>
              <div class="comment-add-field" id = "comment-field">
                    <div v-if= "post1.length > 0">
                    <tr v-for="(comm, index) in post1" :key = "index">
                        <li class="clearfix">
                            <div class="post-comments">
                            <p class="meta">
                            <t class = "name_title"> {{comm.name}} {{comm.last_name}}</t>
                            <button type="button" class="rep-button" v-on:click="reply(comm.name, comm.last_name)">Відповісти</button>
                            <button type="button" class="rep-button" v-on:click="deleteComment_1(comm._id)">Видалити</button>
                            </p>
                            <p class = "comm_body">
                            {{comm.body}}
                            </p>
                            </div>
                        </li>
                        </tr>
                    </div>
              </div>
            </ul>
          </div>

        </div>
        <div class="col-1"> </div>
      </div>
    </div>

    <footer class="bg-light text-center text-lg-start">
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2022 Kyiv, Web-design, KV-94, Martyniuk
      </div>
    </footer>

  </div>

  </body>
</template>

<script>
import PostsService from '@/services/PostsService'

export default {
  name: 'PostView1',
  data () {
    return {
        post1: [],
        registers: []
    }
  },
    mounted () {
    this.getProfile();
    this.getComment_1();

  },
  methods: {
    async getProfile () {
      const response = await PostsService.fetchRegister()
      this.registers = response.data.registers
    },
    reply(name, last_name){
        let commentArea = document.getElementById('comment-area');
        commentArea.value = name + ' ' + last_name + ', ';
    },
    async addComment_1(name, last_name) {
      await PostsService.addComment_1({
        name: name,
        last_name: last_name,
        body: this.body
      })
      this.$router.go()
    },
    async getComment_1() {
      const response = await PostsService.fetchComment_1()
      this.post1 = response.data.post1
    },
    async deleteComment_1 (id) {
    await PostsService.deleteComment_1(id)
    this.$router.go()
    }
  }
}


</script>

<style>
body{
    font-family: "TimesNewRoman";
    background-image: url(../assets/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
	background-size: cover;
	height : 100vh;
   
}

.navbar-nav {
  min-height: 2em;
  margin-left: auto;
  margin-right: 2em;
}

img{
	height: 55px;
    width: 33px;
}

.row {
	margin-top: 20px;
	margin-bottom : 50px;
	background-color : white;
	font-size : 100%;	
}

.navbar-text {
	margin-left : 20px;
	font-size : 130%;
}



.post_img{
	margin-left: auto;
    margin-right: auto; 
	width : 100%;
	height : 500px;
	object-fit: cover;
}


.display-3{
	font-family: "Helvetica";
	font-weight : bold;
	margin-top : 20px;
}
.lh-base{
	font-size: 10em;
	font-family: "Helvetica";
	margin-top : 20px;

}

.pull-right{
	margin-bottom: 20px;
    margin-top: 20px;
}
.blog-comment{
	padding-right: 15%;
}

.blog-comment ul{
	list-style-type: none;
	padding: 0;
}

.post-comments{
    width : 500px;
	border: 1px solid #eee;
    margin-bottom: 20px;
    padding: 10px 20px;
    border-radius: 4px;
	background: #fff;
	color: #6b6e80;
    margin-top: 20px;
}

.blog-comment .meta {
	color: #aaaaaa;
	padding-bottom: 8px;
	margin-bottom: 10px;
    
	border-bottom: 1px solid #eee;
}

.blog-comment .meta .name_title{
    padding-right : 10%;
}



.blog-comment ul.comments ul{
	list-style-type: none;
	padding: 0;
}

.blog-comment-form{
	
	padding-right: 15%;
	padding-top: 40px;
}

.blog-comment h3,
.blog-comment-form h3{
	margin-bottom: 40px;
	font-size: 26px;
	line-height: 30px;
	font-width: 800;
}

</style>