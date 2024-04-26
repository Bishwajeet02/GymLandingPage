$(document).ready(function(){
    $(".heading").waypoint(function(){
        console.log("Reach to top");
        $(".heading").addClass("animate__animated animate__backInLeft")
    },
   {offset: "90%"} 
    )
})

$(document).ready(function(){
    $(".imgAnimation").waypoint(function(){
        console.log("Reach to top");
        $(".imgAnimation").addClass("animate__animated animate__pulse")
    },
   {offset: "100px"} 
    )
})


$(document).ready(function(){
    $(".content").waypoint(function(){
        console.log("Reach to top");
        $(".content").addClass("animate__animated animate__fadeInRight")
    },
   {offset: "95%"} 
    )
})


$(document).ready(function(){
    $(".up").waypoint(function(){
        console.log("Reach to top");
        $(".up").addClass("animate__animated animate__bounce")
    },{
        offset: "10%"
    }
    )
})

$(document).ready(function(){
    $(".price").waypoint(function(){
        console.log("Reach to top");
        $(".price").addClass("animate__animated animate__backInLeft")
    },{
        offset: "120%"
    }
    )
})

$(document).ready(function(){
    $(".sub").waypoint(function(){
        console.log("Reach to top");
        $(".sub").addClass("animate__animated animate__fadeInRight")
    },{
        offset: "56%"
    }
    )
})



$(document).ready(function(){
    $(".boxAnimation ").waypoint(function(){
        console.log("Reach to top");
        $(".boxAnimation ").addClass("animate__animated animate__flip")
    },{
        offset: "48%"
    }
    )
})


$(document).ready(function(){
    $(".last ").waypoint(function(){
        console.log("Reach to top");
        $(".last ").addClass("animate__animated animate__bounceInUp")
    },{
        offset: "47%"
    }
    )
})

