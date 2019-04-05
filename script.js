var input = document.getElementById("userinput");
var button = document.getElementById("enter");

function addUserInput(){

    var ul = document.getElementById("list");

    if(input.value != "" && input.value[0] != " "){
        var li = document.createElement("li");
        ul.appendChild(li).appendChild(document.createTextNode(input.value));
        var div = ul.appendChild(li).appendChild(document.createElement("div"));

            li.addEventListener("click" , function(){
                li.classList.toggle("done");
                div.classList.toggle("checked");
            })
        
            var btn = li.appendChild(document.createElement("button"));
                btn.appendChild(document.createTextNode("Delete"));
                btn.classList.toggle("delete");
        
            btn.addEventListener("click" , function(){
                li.remove();
            })

        input.value = "";
    }else{
        input.value = "";
    }
}

//control()

button.addEventListener("click" , function()
{
    addUserInput();
    
});


input.addEventListener("keydown" , function (e)
{ 
    if( e.keyCode === 13)
    {
        addUserInput();   
    }
});

/*
function control() {

    var li = document.getElementsByTagName("li");
    var tabs = Array.from(li);
    
    var img = document.getElementsByName("check");
    var check = Array.from(img);


    tabs.forEach(function(tab ,i){

        tab.addEventListener("click" , function(){
            tab.classList.toggle("done");
            check[i].classList.toggle("checked");
        })
    
        var btn = tab.appendChild(document.createElement("button"));
            btnText = btn.appendChild(document.createTextNode("Delete"));
    
        btn.addEventListener("click" , function(){
            tab.remove();
        })
        
    })
}
*/







