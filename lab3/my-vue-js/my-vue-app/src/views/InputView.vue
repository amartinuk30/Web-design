<template>
<body>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <div class="logo">
            <a class="navbar-brand" href="#">
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
              <a class="nav-link active" href="/input">Увійти</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>



    <div class="container">
      <div class="fon">
        <div class="row">
          <span id="border" class="border border-primary"> Вхід</span>
          <div class="input_form">
            <div class="col">
              <form>
                <div class="form-group row">
                  <label for="email" class="col-5 col-form-label">Email</label>
                  <div class="col-7">
                    <input type="text" id = "email" class="form-control" ref = "email">
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-5 col-form-label">Пароль</label>
                  <div class="col-7">
                    <input type="password" class="form-control" ref = "password">
                  </div>
                </div>
                <div class="offset-5 col-7">
                  <button type="submit" class="btn btn-primary" @click = "goinput(registers)">Увійти</button>
                </div>
              </form>
            </div>
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
  name: 'InputView',
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
    async goinput (reg) {
        let input_check = 0;
        for(let i = 0; i < reg.length; i++){
            if (reg[i].email == this.$refs.email.value && reg[i].password == this.$refs.password.value){               
                input_check = 1;
                this.changeTrue(reg[i]._id);
                 alert("Успішно !")
            }
        }

        if (input_check == 0){
            alert("Невірна адреса або пароль !!!")
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

.input_form{
	margin-top: 40px;
	margin-left: auto;
    margin-right: auto;
    width: 500px;
	height: 250px;
}
</style>