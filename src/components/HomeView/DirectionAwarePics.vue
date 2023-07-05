<template>
    <div class="container z-1">
      <div class="box">
        <div class="imgBx">
          <img class="self-center mx-auto" src="../../assets/pic3.jpeg">
        </div>
        <div class="content">
          <div>
            <h2>Lingayen</h2>
            <p class="text-xs">Lingayen, Pangasinan is a charming coastal town in the Philippines, known for its historic significance as the landing site of General Douglas MacArthur in World War II. With beautiful beaches, landmarks like the Provincial Capitol Complex and Lingayen Church.</p>></div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="../../assets/pic4.jpeg">
        </div>
        <div class="content">
          <div>
            <h2>The Beach</h2>
            <p>Lingayen Beach in Pangasinan, Philippines, is a picturesque coastal gem with golden sands and calm waters. It is a popular destination for swimming, sunbathing, and enjoying the scenic beauty of the Lingayen Gulf.</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="../../assets/pic5.jpg">
        </div>
        <div class="content">
          <div>
            <h2>The Capitol</h2>
            <p>The Capitol is an architectural masterpiece and the seat of government for the province. With its impressive design and historical significance, it stands as a symbol of governance and serves as a hub for administrative activities.</p>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="../../assets/pic6.jpg">
        </div>
        <div class="content">
          <div>
            <h2>Veterans Memorial Park</h2>
            <p>
The Veteran Memorial Park in Lingayen, Pangasinan stands as a solemn tribute to the courage and sacrifice of soldiers during World War II, honoring their valor and dedication.</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style>
    * {
        margin: 0;
        padding: 0;
      }

      .container {
        position: relative;
        width: 1160px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        transform-style: preserve-3d;
        perspective: 500px;
        margin: auto;
      }
      .container .box {
        position: relative;
        width: 275px;
        height: 275px;
        background: #000;
        transition: 0.5s;
        transform-style: preserve-3d;
        overflow: hidden;
        margin-right: 15px;
        margin-top: 45px;
      }
      .container:hover .box {
        transform: rotateY(25deg);
      }
      .container .box:hover ~ .box {
        transform: rotateY(-25deg);
      }
      .container .box:hover {
        transform: rotateY(0deg) scale(1.25);
        z-index: 1;
        box-shadow: 0 25px 40px rgba(0,0,0,0.5);
      }
      .container .box .imgBx {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .container .box .imgBx:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg,#fff,#000);
        z-index: 1;
        opacity: 0; 
        transition: 0.5s;
        mix-blend-mode: multiply;
      }
      .container .box:hover .imgBx:before {
        opacity: 1;
      }
      .container .box .imgBx img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .container .box .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        padding: 20px;
        align-items: flex-end;
        box-sizing: border-box;
      }
      .container .box .content h2 {
        color: #fff;
        transition: 0.5s;
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: 17px;
        font-weight: bold;
        transform: translateY(200px);
        transition-delay: 0.3s;
      }
      .container .box:hover .content h2 {
        transform: translateY(0px);
      }
      .container .box .content p {
        color: #fff;
        transition: 0.5s;
        font-size: 14px;
        transform: translateY(200px);
        transition-delay: 0.4s;
      }
      .container .box:hover .content p {
        transform: translateY(0px);
      }
</style>