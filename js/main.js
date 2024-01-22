//  ---------------------------  section-1 ---------------------------------

$(".closeBtn").on("click" ,function(){
    $(".side-list").animate({width:"toggle"},1000 , function(){
        $(".sideAction").css("cssText",`position: absolute;
    top: 50%;
    left: 3%;
    transform: translate(-50% ,-50%);
    opacity: 1;`)
    },) 
})

$(".sideAction").on("click" , function(){
    $(".side-list").animate({width:'toggle'},1000 ,function(){
        $(".sideAction").css("cssText",`position: absolute;
        top: 50%;
    transform: translateY(-50%);
    ;
    
    `)
    })
})

//  ---------------------------  section-2 ---------------------------------


$("#sig-color1").on("click",function(){
    $("#inner-signer1").slideToggle(1000 , function(){
    $("#sig-color1").css("cssText" ,`margin-bottom: 0px;`);
    });
    
})
$("#sig-color2").on("click",function(){
    $("#inner-signer2").slideToggle(1000 , function(){
    $("#sig-color2").css("cssText" ,`margin-bottom: 0px;`);
    });
    
})
$("#sig-color3").on("click",function(){
    $("#inner-signer3").slideToggle(1000 , function(){
    $("#sig-color3").css("cssText" ,`margin-bottom: 0px;`);
    });
    
})
$("#sig-color4").on("click",function(){
    $("#inner-signer4").slideToggle(1000 , function(){
    $("#sig-color4").css("cssText" ,`margin-bottom: 0px;`);
    $("#containrerr").css("cssText",`margin-top:50px;`)
    });
    
})
//  ---------------------------  section-3 ---------------------------------

let nums = 60 ;
let secondCount = document.getElementById("seconds");

setInterval(function(){
    secondCount.innerHTML = nums +"s";
    nums--;
    if(nums == 0){
        nums = 60
    }
},1000)

let minu = 60 ; 

let minCount = document.getElementById("minCount");

setInterval(function(){
    minCount.innerHTML = minu + "m";
    minu--;
    if(minu == 0){
        minu = 60 ;
    }
},60000)


let dayCount = 24 ;
let dayCounter = document.getElementById("dayCounter");
setInterval(function(){
    dayCounter.innerHTML = dayCount + "H";
    dayCount--;
    if(dayCount == 0){
        dayCount = 24
    }
},3600000 )


let yearCount = 1000 ;

let yearCounter = document.getElementById("yearCounter");

setInterval(function(){
    yearCounter.innerHTML= "-" + yearCount + "D"
    yearCount--;
    if(yearCount == 0){
        yearCount = 1000
    }

},86400000)



//  ---------------------------  section-4 ---------------------------------

$('#txtpostSearch').keyup(function () {                
    var txtCharCountLength = $(this).val().length;
    if (txtCharCountLength <= 100) {
        var remainingChar = 100 - txtCharCountLength;
        $("#divChar").html(remainingChar);
    }
});