<template>
  <div id="te" class="rows">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>

  <div id="top">
    <h1>Welcome to the DEEPWOKEN COOKS webstie!!! Feel free to roam around!!!!! click on this <a href="#">word</a> to learn more about us</h1>
  </div>

  <img id="col" src="https://i1.sndcdn.com/artworks-hm2szdaXJKdK2Obe-Fut4dg-t500x500.jpg">
  
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
#top{
background-color:  rgb(38, 49, 109);
border: solid black;
}
h1{
  color: bisque;
  
}

#top{
  margin-top: 100px;
}

#col{
  margin-top: 20px;
}

#te{
  top: 0;
  width: 100%;
  position: fixed;
}

</style>
