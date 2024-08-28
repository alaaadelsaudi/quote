let qoutes=[
    {decriotion:"“Be yourself; everyone else is already taken.”"
,
 author:"― Oscar Wilde"}
,
{decriotion:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
,
 author:"― Albert Einstein"}
,
{decriotion:"“A room without books is like a body without a soul.”"
, 
author:"― Marcus Tullius Cicero"}
,
{decriotion:"“In three words I can sum up everything I've learned about life: it goes on.”"
, 
author:"― Robert Frost"}
,
{decriotion:"“If you tell the truth, you don't have to remember anything.”"
,
 author:"― Mark Twain"},
]


let btn=document.getElementById('btn');
let outeputqoute=document.getElementById("outeputqoute");
let auteputathor=document.getElementById('auteputathor')


btn.addEventListener('click',()=>{
    let result=qoutes[Math.floor(Math.random()*qoutes.length)]

    outeputqoute.innerHTML=result.decriotion
    auteputathor.innerHTML=result.author
})

// console.log(Math.floor(Math.random()*qoutes.length))