"use-strict";
let data = [];


const getData = (e) =>{
    e.preventDefault();
    let list = {
        date : Date.now(),
        title : document.getElementById('title').value,
        desc : document.getElementById('desc').value
    }
    var x = document.querySelector('#hideme');
    x.hidden=true;
    var y = document.querySelector('#sample');
    y.hidden=false;
        if(list.title == ""){
        console.log("Please Enter Something to add.");
        }
        else if(list.desc ==""){
        console.log("Please Enter Something to add.");
        }
        else{
        data.push(list);
        document.querySelector('form').reset;
        console.log('ADDED :', data);
        var r = document.createElement("h3");
        var u = document.createTextNode(list.title);
        r.appendChild(u);
        var l = document.createElement("p");
        var w = document.createTextNode(list.desc);
        l.appendChild(w);

        var rule = document.getElementById("sample");
        rule.appendChild(r);
        rule.appendChild(l);
        }       
        


    
    localStorage.setItem('My To-Do', JSON.stringify(data))
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', getData);
})

