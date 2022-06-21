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
              <a class="nav-link active" href="/register">Реєстрація</a>
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
        <span id="border" class="border border-primary"> Реєстрація</span>

        <div class="reg_form">
          <div class="col">
            <form name = "Form">
              <div class="form-group row">

                <label for="first_name" class="col-5 col-form-label">Ім'я</label>
                <div class="col-7">
                  <input type="text" class="form-control" id="first_name" name="first_name" v-model="name">
                </div>

              </div>

              <div class="form-group row">
                <label for="last_name" class="col-5 col-form-label">Прізвище</label>
                <div class="col-7">
                  <input type="text" class="form-control" id="last_name" name="last_name" v-model="last_name">
                </div>
              </div>


              <div class="form-group row">
                <label for="email" class="col-5 col-form-label">Email</label>
                <div class="col-7">
                  <input type="text" class="form-control" id = "email" name="emai" v-model="email">
                </div>
              </div>

              <div class="form-group row">
                <label for="date-bth" class="col-5 col-form-label">Дата народження</label>
                <div class="col-7">
                  <input type="date" class="form-control" id = "dtb" name = "dtb" v-model="data_b">
                </div>
              </div>


              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-5">Стать</legend>
                  <div class="col-7">
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="legendRadio" id="legendRadio1" v-model="gender" value="Чоловіча">
                        Чоловіча
                      </label>
                    </div>
                    <div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" type="radio" name="legendRadio" id="legendRadio2" v-model="gender" value="Жіноча">
                        Жіноча
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>


              <div class="form-group row">
                <label class="col-5 col-form-label">Пароль</label>
                <div class="col-7">
                  <input type="password" class="form-control" id = "password" name = "password" v-model="password">
                  <div id="passwordHelpBlock" class="form-text">
                    Ваш пароль повинен бути довжиною 8-20 символів, містити літери латинського алфавіту та цифри,а також не містити пробілів,
                    спеціальних символів чи emoji.
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-5 col-form-label">Повторіть пароль</label>
                <div class="col-7">
                  <input type="text" class="form-control" id = "password-2" name = "password-2" ref = "password2">
                </div>
              </div>

              <div id="knopka" class="offset-5 col-7">
                <button type="submit" id = "reg-btn" @click="RegCheck()" class="btn btn-primary" >Зареєструватися</button>
              </div>
            </form>
          </div>
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
  name: 'RegisterView',
  data () {
    return {
        register: []
    }
  },
  methods: {
    async addRegister() {
      await PostsService.addRegister({
      name: this.name,
      last_name: this.last_name,
      email: this.email,
      data_b: this.data_b,
      gender: this.gender,
      password: this.password,
      my_profile_check : false
      })
    },
    RegCheck(){
    var first_name = this.name;
    var last_name = this.last_name;
    var email = this.email;
    var dtb = this.data_b;
    var gender = this.gender;
    var password = this.password;
    var password_2 = this.$refs.password2.value;

    var email_reg = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
    var name_reg = new RegExp('[a-zA-Zа-яА-Я]');
    var password_reg = new RegExp('(?=.*[A-Za-z])(?=.*[0-9]){8,}');

        if (first_name == '' || last_name == '' || email == '' || gender == null || dtb == '' || password =='' || password_2 == ''){
            alert("Заповніть усі поля форми реєстрації !");
        }
        else if (!name_reg.test(first_name)){
            alert('Некоректні символи імені');
        }
        else if (!name_reg.test(last_name)){
            alert('Некоректні символи прізвища');
        }
        else if(!email_reg.test(email)){
            alert('Некоректний формат email !');
        }
        else if(!password_reg.test(password)){
            alert('Некоректний пароль !');
        }
       else if (password != password_2){
            alert("Схоже, пароль при повторенні не співпадає !");   
        }
        else{
            alert("Реєстрація успішна");
            this.addRegister();
        }
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

.reg_form{
	margin-top: 40px;
	margin-left: auto;
    margin-right: auto;
    width: 500px;
	height: 850px;
}

</style>