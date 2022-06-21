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
              <a class="nav-link active" aria-current="page" href="/">Головна</a>
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
        <div class="col">
          <div class="container px-4">
            <div class="row ">
              <div class="col-sm col-xs">
                <div class="card card1" style="width: 17rem;">
                  <div class="card-body">
                    <p class="card-text">Вітіньйо орендований «Атлетико Паранаенсе»</p>
                    <p class="card-date">11.03.2022</p>
                    <a href="/post1" class="btn btn-primary">Читати більше...</a>
                  </div>
                </div>
              </div>

              <div class="col-sm col-xs">
                <div class="card card2" style="width: 17rem;">
                  <div class="card-body">
                    <p class="card-text">Карлос де Пена: «Для мене гордість бути частиною великої історії «Динамо»</p>
                    <p class="card-date">08.03.2022</p>
                    <a href="/post2" class="btn btn-primary">Читати більше...</a>
                  </div>
                </div>
              </div>

              <div class="col-sm col-xs">
                <div class="card card3" style="width: 17rem;">
                  <div class="card-body">
                    <p class="card-text">Беньямін Вербич виступатиме за варшавську «Легію»</p>
                    <p class="card-date">03.03.2022</p>
                    <a href="/post3" class="btn btn-primary">Читати більше...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/car1.jpg" class="d-block car" style="min-width: 950px; min-height: 550px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/car2.jpg" class="d-block car" style="min-width: 950px; min-height: 550px;" alt="...">
              </div>
              <div class="carousel-item">
                <img src="../assets/car3.jpg" class="d-block car" style="min-width: 950px; min-height: 550px;" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Беньямін Вербіч :</h5>
                  <p>"Динамо робить дуже хорошу справу для своєї країни"</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

        </div>

        <div class="col">
          <div class='d-flex justify-content-end'>
            <table class="table">
              <thead>
                <tr class="table-secondary">
                  <th scope="col">Команда</th>
                  <th scope="col">Ігри</th>
                  <th scope="col">РМ</th>
                  <th scope="col">Очки</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-primary">
                  <th scope="row">Шахтар</th>
                  <td>18</td>
                  <td>39</td>
                  <td>47</td>
                </tr>
                <tr class="table-primary">
                  <th scope="row">Динамо</th>
                  <td>18</td>
                  <td>38</td>
                  <td>45</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Дніпро-1</th>
                  <td>18</td>
                  <td>18</td>
                  <td>40</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Зоря</th>
                  <td>18</td>
                  <td>18</td>
                  <td>36</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Ворскла</th>
                  <td>18</td>
                  <td>12</td>
                  <td>33</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Олександрія</th>
                  <td>18</td>
                  <td>3</td>
                  <td>26</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Десна</th>
                  <td>18</td>
                  <td>-5</td>
                  <td>25</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Колос</th>
                  <td>18</td>
                  <td>-9</td>
                  <td>24</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Верес</th>
                  <td>18</td>
                  <td>-5</td>
                  <td>23</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Металіст1925</th>
                  <td>18</td>
                  <td>-12</td>
                  <td>19</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Рух</th>
                  <td>17</td>
                  <td>-5</td>
                  <td>18</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Львів</th>
                  <td>18</td>
                  <td>-16</td>
                  <td>17</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Чорноморець</th>
                  <td>18</td>
                  <td>-20</td>
                  <td>14</td>
                </tr>
                <tr class="table-light">
                  <th scope="row">Інгулець</th>
                  <td>17</td>
                  <td>-15</td>
                  <td>13</td>
                </tr>
                <tr class="table-danger">
                  <th scope="row">Минай</th>
                  <td>18</td>
                  <td>-18</td>
                  <td>10</td>
                </tr>
                <tr class="table-danger">
                  <th scope="row">Маріуполь</th>
                  <td>18</td>
                  <td>-23</td>
                  <td>8</td>
                </tr>
              </tbody>
            </table>

          </div>

          <ul class="list-unstyled">
            <li>
              <center>Наступний матч :</center>
              <ul>
                <li>Галатасарай -:- Динамо </li>
              </ul>
            </li>
            <li>
              <center>Останній матч :</center>
              <ul>
                <li>Легія 1:3 Динамо </li>
              </ul>
            </li>
          </ul>

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
export default {
  name: 'HomeView'
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

.row {
	margin-top: 20px;
	margin-bottom : 50px;
	background-color : white;
	font-size : 100%;	
}

.navbar-nav {
  min-height: 2em;
  margin-left: auto;
  margin-right: 2em;
}

.navbar-text {
	margin-left : 20px;
	font-size : 130%;
}

img{
	height: 55px;
    width: 33px;
}

.table {
	left:auto;
	margin-top: 20px;
	width: 100%; 
}

.slide{
	max-width: 60rem;
	margin-left: auto;
	margin-right: auto;
	
}


.card1{
	margin-top: 20px;
	height: 200px;
	margin-left: auto;
	margin-right:auto;
	background: url(../assets/news1.jpg);
	background-size: cover;
}

.card2{
	margin-top: 20px;
	height: 200px;
	margin-left: auto;
	margin-right:auto;
	background: url(../assets/news2.jpg);
	background-size: cover;
}

.card3{
	margin-top: 20px;
	height: 200px;
	margin-left: auto;
	margin-right:auto;
	background: url(../assets/news3.jpg);
	background-size: cover;
}

.card-text{
	text-shadow: black 0 0 10px;
	font-weight: bolder;
	color: white;
}

.card-date{
	text-shadow: black 0 0 10px;
	font-weight: bolder;
	color: white;
	position: absolute;
	left: 5px;
	bottom: 0;
}

.btn-primary{
	position: absolute;
	right: 5px;
	bottom: 5px;
}
</style>