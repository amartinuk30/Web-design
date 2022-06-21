<template>
<body>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <nav class="navbar navbar-light bg-light">
          <div class="logo">
            <a class="navbar-brand">
              <img src="../assets/emblema.png" class="navbar-logo">
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
              <a class="nav-link" aria-current="page" href="/">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/info">Інфо</a>
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
        <div class="col-sm-4">
          <img src="../assets/info.jpg" class="info_img" alt="...">
        </div>
        <div class="col-sm-8">
          <p class="h2">Даний веб-ресурс є фан-сайтом футбольного клубу "Динамо Київ"</p>
          <p>На сайті можна дізнатися останні новини зі стану команди та обговорити їх з іншими користувачами.</p>
          <p><em>Приємного користування !</em></p>
         
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

<style>
body{
    font-family: "TimesNewRoman";
    background-image: url(../assets/background.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    justify-content: center;
	background-size: cover;
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

.info_img{
	margin-top: 10px;
	height: 90%;
	width: 100%;
	object-fit: cover;
}
</style>