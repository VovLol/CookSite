<template>
  <body>
  <div class="container">
      <div id="top">
        <img  id="l" src="https://st.stranamam.ru/data/cache/2013apr/11/12/7951611_51930.jpg">
        <h1>BEAUTIFUL DINNERS FOR EVERYONE!!</h1>
        <a id="cs" href="https://www.youtube.com/watch?v=4JkIs37a2JE">(Just because we dont get paid enough we'll only post 2 dinner meals)</a>
      </div>

      <div id="c">
       <h>What's for dinner? Take the work out of searching for an answer to this question with these popular 5-star dinner recipes.</h>
      </div>
      <img id="t" src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-logotip-diskord-prozrachnii-fon-1.png">
      <div id="co">
        <h1 id="mn" >This is a HamHamPangPang exclusive weekly sandwich</h1>
        <h1 id="mk">You can order it from our special delivery!</h1>
        <router-link id="ml" to="/de" type="button" class="btn btn-warning">ORDER.... NOOOOOOOW!</router-link>
        <img id="k" src="https://static.tildacdn.com/stor6331-3832-4137-a236-323137383933/81687688.jpg">
       
      </div>

     
    </div>
    </body>
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


body{
  background-color: whitesmoke;
}

#mn{
  margin-left: 680px;
  font-size: 24px;
  position: absolute; bottom: 110px;
}

#mk{
  margin-left: 680px;
  font-size: 24px;
  position: absolute; bottom: 60px;
}

#ml{
  margin-left: 750px;
  font-size: 34px;
  position: absolute; bottom: -50px;

}

#k{
 height: 400px;
 margin-left: 70px;
 margin-top: 120px;
}

#co{
  background-color: gainsboro;
  height: 600px;
  margin-top: 10px;
}
  #t{
   border: 1px solid rgba(0,0,0,.65);
    height: 30px;
    display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 90%;
  border-color: black;
  width: 35px;
  }
  
#l{
  height: 300px;
  width: 1300px;
  object-fit: cover;
  object-position: top;

  
}

#c{
  text-align: center;
}

#cs{
  color: white;
}

#cs:hover{
  color: black;
}
  #rah{
    margin-left: 500px;
    
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
    text-align: center;
  }
  .header{
    background-color: rgb(255, 255, 255)
  }
  
  #col{
  margin-top: 20px;
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

  #lol{
    color: rgb(55, 255, 5);
  }
  
  </style>
  