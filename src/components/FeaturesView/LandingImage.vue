<template>
  <div id="application">
    
    <div class="w-full bg-primary">
      <div class="gap-4 leading-tight title">
      <div class="title-inner">
        <div class="cafe">
          <div class="cafe-inner font-effect-shadow-multiple">What's in</div>
        </div>
        <div class="mozart">
          <div class="mozart-inner font-effect-shadow-multiple">   Lingayen?</div>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="../../assets/logowith.jpg" alt=''>
    </div>
    
  </div>
  </div>

</template>
<style lang="scss">
  
    * {
      position: relative;
      box-sizing: border-box;
    }
  
  .iframely-embed {
    top: 0;
    right: 0;
    z-index: -1;

  }
  
  #application {
    // opacity: 0 !important;
    // visibility: hidden;
    z-index:-2;
    

    &:hover {
      opacity: 0.5;
    }
  }

  

  @import url("https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple");
  
  .title {
    padding-left: 6.2em;
    grid-column: 1 / -1;
    grid-row: 1;
    font-family:'Rancho' ;
    font-size: 10vw;
    width: 100%;
    z-index: 10;
    position: absolute;
    color: #E5d3b3  ;
    top:20%;
    letter-spacing: 10px;
  
    // start
  
    > .title-inner {
      display: inline-block;
    }
  }
  
  @keyframes text-clip {
    from {
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
  
  @keyframes outer-left {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: none;
    }
  }
  
  @keyframes inner-left {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: none;
    }
  }

  .cafe,
  .mozart {
    animation: outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both;
    // outline: 1px solid red;
  }
  
  // [class*='inner'] {
  //   outline: 1px solid blue;
  // }
  
  .title-inner {
    display: fixed;
    animation: inner-left 1s 1s ease both;
  }
  
  .cafe-inner {
    display: fixed;
    animation: inner-right 1s 1s ease both,
      text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  }
  
  .mozart-inner {
    animation: text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both;
  }
  
  .title {
    animation: outer-left 1s 1s ease both;
  }
  
  .cafe {
    // start
    > .cafe-inner {
      display: absolute;
      z-index: 3;
    }
  }
  
  .mozart {
    display: absolute;
    z-index: 3;
  }
  
  .image {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.25));
    top: 0;
    grid-row: 1;
    grid-column: 2;
    opacity: 0.7;
    position: relative;
    width: 100%;
    height: 800px;
    z-index: 1;
  

  
    animation: image-in 1s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards;
  
    @keyframes image-in {
      from {
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
      }
      to {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      }
    }
  
    img {
      width: 60%;
      height: 100%;
      
    }
  }
  
  // Replay animation!
  body:active * {
    animation: none !important;
  }
</style>