<template>
  <div class="container">
  <header class="header">
  <a class="header-brand" href="#">
    <img src="https://cdn.gfinityesports.com/images/ncavvykf/gfinityesports/60ec496055090247be319112b7dced230b62064e-1920x1080.jpg?rect=0,36,1920,1008&w=1600&h=840" alt="" width="200" height="100" class="d-inline-block align-top">
  </a>
  <button class="header-toggler" type="button">
    <span class="header-toggler-icon"></span>
  </button>
  <ul class="header-nav mr-auto">
    <li class="nav-item">
      <router-link  id="ko" class="nav-link" to="/hi">DINNERS</router-link>
    </li>
    <li class="nav-item">
      <router-link id="lk" to="lu" class="nav-link" href="#">LUNCH</router-link>
    </li>
    <li class="nav-item dropdown">
      <a  class="nav-link dropdown-toggle" href="#" id="headerDropdown" role="button" data-coreui-toggle="dropdown" aria-expanded="false">
        DRINKS
      </a>
      <div class="dropdown-menu" aria-labelledby="headerDropdown">
        <a class="dropdown-item" href="#">MILKSHAKE</a>
        <a class="dropdown-item" href="#">SPARKLING WATER</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">OREO MCFLURRY</a>
      </div>
    </li>
    <li class="nav-item">
      <a id="kl" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">UNDER WORK</a>
    </li>
  </ul>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
</header>

  <div id="top">
    <h1>Welcome to the DEEPWOKEN COOKS webstie!!! Feel free to roam around!!!!! click on this <a href="#">word</a> to learn more about us</h1>
  </div>

  <div  class="container" id="coool">
  <img id="col" src="https://i1.sndcdn.com/artworks-hm2szdaXJKdK2Obe-Fut4dg-t500x500.jpg">
  </div>

<div id="rah" class="container">
<a href="#">SHOCKING NEWS!!THE GUY HAS STOLE SOMEONE"S MEGURGER?</a>
<h1 >NEWS AND TRANDINGS!!</h1>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#rah{
  margin-left:800px;
  margin-bottom: 600px;
  
}
#top{
background-color:  rgb(19, 32, 141);
border: solid black;
}
h1{
  color: rgb(0, 0, 0);
  
}
#ko{
  color: rgb(0, 0, 0);
  font-weight: 1000;
  
}
#lk{
  color: rgb(0, 0, 0);
  font-weight: 1000;
  
}
#kl{
  color: rgb(0, 0, 0);
  font-weight: 1000;
  
}
#headerDropdown{
  color: rgb(0, 0, 0);
  font-weight: 1000;
  
}

a:hover{
  text-decoration-line:underline;
}


#top{
  margin-top: 150px;
  text-decoration-line: none;
}
.header{
  background-color: rgb(255, 255, 255)
}

#col{
  margin-top: 10px;
  width: 300px;
  -webkit-filter: drop-shadow(30px 30px 30px #c73232);
  filter: drop-shadow(30px 30px 30px rgb(30, 44, 28));
}

a{
  text-decoration-line: none;
  color: rgb(0, 0, 0);
}

header{
  top: 0;
  width: 100%;
  position: fixed;
}
#cool{
  outline-color: black;
}
#guy{
  margin-left: 1500px;
}
#k{
  margin-left: 700px;
}
#lol{
  color: rgb(55, 255, 5);
}

</style>
