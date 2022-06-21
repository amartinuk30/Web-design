<template>
<body>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <div class="logo">
            <a class="navbar-brand" href="/">
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
              <a class="nav-link active" href="/profile">Профіль</a>
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
        <span id="border" class="border border-primary"> Профіль користувача</span>
      
        <div v-if= "registers.length > 0">
        <tr v-for="(reg, index) in registers" :key = "index">
            <div v-if= "reg.my_profile_check == true" >
            
            <div class="container emp-profile">
            <form method = "post">
                <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                    <img src="../assets/profile.jpeg" alt="" />
                    </div>


                </div>

                <div class="col-md-6">
                    <div class="profile-head">
                    <h3>
                        {{reg.name}} {{reg.last_name}}
                    </h3>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                            aria-controls="home" aria-selected="true">Інформація</a>
                        </li>
                    </ul>
                    </div>

                    <div class="col-md-12">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="row">
                            <div class="col-md-6">
                            <label>Ім'я</label>
                            </div>
                            <div class="col-md-6">
                                <a> {{reg.name}}</a>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <label>Прізвище</label>
                            </div>
                            <div class="col-md-6">
                            <a> {{reg.last_name}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <label>Email</label>
                            </div>
                            <div class="col-md-6">
                                <a> {{reg.email}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <label>Стать</label>
                            </div>
                            <div class="col-md-6">
                            <a> {{reg.gender}}</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                            <label>Дата народження</label>
                            </div>
                            <div class="col-md-6">
                            <a> {{ date_convert(reg.data_b, check) }}</a>
                            </div>
                        </div>
                        <button type="submit" id = "reg-btn" @click="out(reg._id)" class="btn btn-primary" >Вийти з профіля</button>  
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    </div>
</tr>     
</div>



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
  name: 'ProfileView',
  data () {
    return {
        registers: []
    }
  },
mounted () {
    this.getProfile()
  },
  methods: {
    async getProfile () {
      const response = await PostsService.fetchRegister()
      this.registers = response.data.registers
    },
    async changeTrue(id) {
        await PostsService.changeTrue({
        id: id
      })
    },
    date_convert (date){
        var v = date.toString()
        let c = '';
        for (let i = 0; i < 10; i++){
            c += v[i]
        }
        return c
    },
    out(id){
        this.changeTrue(id);
        this.$router.push({ name: 'input' })
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
    justify-content: center;
	display: flex;
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

.border {
	text-align: center;
	font-size : 250%;
}

.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}

.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}

</style>