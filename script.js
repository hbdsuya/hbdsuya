function initengahan(){
    kadoIn.style="display:none";ket.style="display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style="opacity:.5";
    wallpaper.style="transform: scale(1.5);";
  }
  
  async function mulainama() {
    bodyblur.style="opacity:.5";
    wallpaper.style="transform: scale(1);";
    fotostiker.style="display:inline-flex;";setTimeout(ftmuncul,200);
    setTimeout(kethalo,500);
  }
  function berjatuhan() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart"; // pakai ikon heart ❤️
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s"; 
    heart.style.fontSize = (Math.random() * 20 + 15) + "px"; // ukuran acak
    heart.style.color = "rgba(255,0,0,0.8)"; // merah transparan
    heart.style.position = "fixed";
    heart.style.top = "-10px";
    heart.style.zIndex = "9999";
    body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
    }

  
  function ftmuncul(){
    if(ftganti==0){fotostiker.src = deffotostiker;}
    if(ftganti==1){fotostiker.src = fotostiker1.src;}
    if(ftganti==2){fotostiker.src = fotostiker2.src;}
    if(ftganti==3){fotostiker.src = fotostiker3.src;}
    if(ftganti==4){fotostiker.src = fotostiker4.src;}
    if(ftganti==5){fotostiker.src = fotostiker5.src;}
    
    fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)";
  }
  function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)";}
  function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate";}
  
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();}
  function bqhilang(){wallpaper.style="transform: scale(2);";bodyblur.style="opacity:.3";bq.style = "position:relative;transition:all .7s ease;";}
  function kethalo(){new TypeIt("#halo", {strings: ["" + vketikhalo], startDelay: 50, speed: 40, waitUntilVisible: true, afterComplete: function(){halo.innerHTML = vketikhalo;setTimeout(bqmuncul,200);},}).go();}

  function tombol(){wallpaper.style="transform: scale(1);";Tombol.style="opacity:1;transform: scale(1);";if(fungsi==2){By.innerHTML="&#128140; Balas"}}
  document.getElementById("By").onclick = function() {if(fungsi==1){Tombol.style="";fthilang();fungsi=0;pertanyaan();} if(fungsi==2){Tombol.style="";menuju();}}
  
  const waktuSekarang = new Date().getHours();let ucapan;
  if(waktuSekarang < 10){ucapan = "Selamat Pagi, ";} 
  else if(waktuSekarang < 16){ucapan = "Selamat Siang, ";}
  else if(waktuSekarang < 19){ucapan = "Selamat Sore, ";}
  else{ucapan = "Selamat Malam, ";}

  vketik1=kalimat.innerHTML;kalimat.innerHTML = "";
  function mulaiketik1(){
  new TypeIt("#kalimat", {
  strings: ["" + vketik1], startDelay: 400, speed: 20, cursor: false, deleteSpeed: 20, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    aktiopsL();
  },}).go();
  }
  
  opsLclick=0;opsLcheck=0;defopsL=opsL.innerHTML;
  document.getElementById("bq").onclick = function() {
    if(opsLclick==1){
      if(opsLcheck==1){setTimeout(aktipesan1,400);fthilang();ftganti=1;setTimeout(ftmuncul,300);}
      if(opsLcheck==2){mulaiketik3();}
      if(opsLcheck==3){mulaiketik4();}
      if(opsLcheck==4){mulaiketik5();}
      if(opsLcheck==5){kethalo2();}
      otomatis();opsL.style.opacity="0";opsLclick=0;
    }
  }
  function aktiopsL(){opsL.innerHTML=defopsL;opsL.style.opacity=".8";opsLclick=1;opsLcheck+=1;}
  function gantiopsL(){opsL.innerHTML="[ Klik beberapa LOVE-nya ]";opsL.style.opacity=".8";}
  function otomatis(){pesan3.style="transition:none";pesan8.style="display:none";kalimat.style="opacity:0";if(otoaktipesan==0){setTimeout(otolanj,400)}}
  function otolanj(){kalimat.style="opacity:1";}

  function aktipesan1(){kalimat.innerHTML=pesan1.innerHTML;kolombaru.style="position:relative;opacity:1;transform:scale(1);";}
  vketik2=pesan2.innerHTML;
  function aktipesan2(){
  wallpaper.style="transform: scale(1.5);";
  kolombaru.style="";kalimat.innerHTML="";
  new TypeIt("#kalimat", {
  strings: ["" + vketik2], startDelay: 20, speed: 40, cursor: true, deleteSpeed: 50, breakLines: false, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    setTimeout(aktipesan3,500);
  },}).go();
  }
  vketik3=pesan3.innerHTML;pesan3.innerHTML="";
  function aktipesan3(){
  kalimat.style="display:none";
  pesan3.style="position:relative;opacity:1;transform: scale(1)";
  wallpaper.style="transform: scale(1)";
  fthilang();ftganti=2;setTimeout(ftmuncul,300);
  new TypeIt("#pesan3", {
  strings: ["" + vketik3], startDelay: 1, speed: 45, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan3.innerHTML=vketik3;setTimeout(otomatis,600);setTimeout(aktipesan4,1010);
  },}).go();
  }
  function aktipesan4(){
    wallpaper.style="transform: scale(1.5);";kalimat.innerHTML=pesan4.innerHTML + nama + " 🥳";kalimat.style="transform:scale(1.2)";setTimeout(aktipesan5,1000);
  }
  vketik5=pesan5.innerHTML;pesan5.innerHTML="";
  function aktipesan5(){
  fthilang();ftganti=3;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan5", {
  strings: ["" + vketik5], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan5.innerHTML=vketik5 ;setTimeout(aktipesan6,800);
  },}).go();
  }
  vketik6=pesan6.innerHTML;pesan6.innerHTML="";
  function aktipesan6(){
  wallpaper.style="transform: scale(1.5);";
  new TypeIt("#pesan6", {
  strings: ["" + vketik6], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan6.innerHTML=vketik6;setTimeout(aktipesan7,800);
  },}).go();
  }
  vketik7=pesan7.innerHTML;pesan7.innerHTML="";
  function aktipesan7(){
  fthilang();ftganti=1;setTimeout(ftmuncul,300);
  wallpaper.style="transform: scale(1);";
  new TypeIt("#pesan7", {
  strings: ["" + vketik7], startDelay: 1, speed: 52, cursor: true, waitUntilVisible: true, lifelike: true,
  afterComplete: function(){
    pesan7.innerHTML=vketik7;fungsi=1;setTimeout(tombol,400);
  },}).go();
  }
  
  // Variabel untuk pesan 8, 9, 10
  vketik8=pesan8.innerHTML;pesan8.innerHTML="";
  vketik9=pesan9.innerHTML;pesan9.innerHTML="";
  vketik10=pesan10.innerHTML;pesan10.innerHTML="";
  
  function aktipesan8(){
  pesan5.style="display:none";pesan6.style="display:none";pesan7.style="display:none";pesan8.style="";
  wallpaper.style="transform: scale(1);";
  ftganti=4;ftmuncul();
  
  new TypeIt("#pesan8", {
  afterComplete: function(){
    setTimeout(function() {
      new TypeIt("#pesan9", {
        strings: [vketik9], startDelay: 20, speed: 45, cursor: true, waitUntilVisible: true, lifelike: true,
        afterComplete: function(){
          pesan9.innerHTML=vketik9;
          setTimeout(otomatis,1300);
          setTimeout(aktipesan10,1710);
        }
      }).go();
    }, 500);
  }}).go();
  }
  
  function aktipesan10(){
    wallpaper.style="transform: scale(1.5);";
    fthilang();ftganti=5;setTimeout(ftmuncul,300);
    otoaktipesan=1;otomatis();setTimeout(toaktipesan,300);
    setInterval(berjatuhan,400);
    fungsi=2;setTimeout(tombol,2000);
  }
  
  var otoaktipesan=0;
  function toaktipesan(){kalimat.innerHTML=vketik10;kalimat.style="transform:scale(1);font-size:24px;font-family:var(--gaya-font2)";}

  document.getElementById("lv1").onclick = function() {lv1.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv2").onclick = function() {lv2.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv3").onclick = function() {lv3.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  document.getElementById("lv4").onclick = function() {lv4.style="opacity:0";slov+=1;this.onclick=null;checkslov();}
  var slov=0;function checkslov() {if(slov==4){kolombaru.style="position:relative;transform:scale(1)";otomatis();setTimeout(aktipesan2,400);}}
  
  async function pertanyaan(){
    // Pastikan vketik81 didefinisikan
    vketik81 = katatambahan.innerHTML;
    
    var { isConfirmed: prtanya } = await swals.fire({
      title: nama + ' ' + tanya, 
      text: '' + opstanya, 
      imageUrl: '' + fotostiker6.src, 
      showCancelButton: true, 
      confirmButtonText: '' + tompositif, 
      cancelButtonText: '' + tomnegatif,
    });
    
    if(prtanya){
      await swalst.fire({
        title: '' + katatambahan.innerHTML, 
        timer: 2000, 
        imageUrl: '' + stikerditolak.src,
      });
      aktipesan8();
    } else {
      await swalst.fire({
        title: '' + kataditolak.innerHTML, 
        timer: 2000, 
        imageUrl: '' + stikerditolak.src,
      });
      aktipesan8();
    }
  }
  
  // Fungsi tambahan yang mungkin diperlukan
  function kethalo2() {
    // Implementasi fungsi ini jika diperlukan
    console.log("kethalo2 called");
  }
  
  function mulaiketik3() {
    // Implementasi fungsi ini jika diperlukan
    console.log("mulaiketik3 called");
  }
  
  function mulaiketik4() {
    // Implementasi fungsi ini jika diperlukan
    console.log("mulaiketik4 called");
  }
  
  function mulaiketik5() {
    // Implementasi fungsi ini jika diperlukan
    console.log("mulaiketik5 called");
  }
