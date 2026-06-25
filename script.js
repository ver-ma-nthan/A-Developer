document.querySelector("#switch>img").addEventListener("click",function(){

    document.getElementById("page").style.display="block";
    document.querySelector("#switch").style.display="none";

    setTimeout(function(){

        document.querySelector("#mainImage>img").style.display="block";
        document.querySelector("#mainImage2>img").style.display="block";
        document.querySelector("#line").style.display="none";
        document.querySelector("#line2").style.display="none";

    },4100);



})