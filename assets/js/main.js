function _(selector)
{
    return document.querySelector(selector);
}

function SaleEndsTimer(EndDate)
{
    let countdown=[];
    
    let finalDate=new Date(EndDate).getTime();

    let currDate=new Date().getTime();

    let diff=finalDate-currDate;

    let days=Math.floor(diff/(1000*60*60*24));
    let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    let seconds=Math.floor((diff%(1000*60))/(1000));
    
    countdown.push(days);
    countdown.push(hours);
    countdown.push(minutes);
    countdown.push(seconds);
        
    return countdown;


}

let Salesinterval=setInterval(function()
{

let [days,hours,minutes,seconds]=SaleEndsTimer("Jan 1 2023");

_(".counter .days").innerText=days;
_(".counter .hours").innerText=hours;
_(".counter .minutes").innerText=minutes;
_(".counter .seconds").innerText=seconds;

if(days==0 && hours==0 && minutes==0 && seconds==0)
    {
        _(".endMessage").classList.toggle("d-none")

        clearInterval(Salesinterval);

    }


},1000)



let showmoreBtn=document.querySelector("#showmore");
let productContainer=document.querySelector("#product_container");
let i=0;
showmoreBtn.onclick=()=>
{   
   
    for(let j=0;j<3;j++)
    {   
        if(i>=10) i=0
        productContainer.innerHTML+=generateProducts(i+1);
        i++;
    }

}

function generateProducts(num)
{
    
    return content=`<div class="col-lg-3 col-sm-5 col-5 border m-3">
    <img src="assets/images/p${num}.jpg" class="img-fluid" alt="product_1">
    <div class="content">
        <div class="lead" style="font-weight:400;">White Cloth</div>
        <p>$299</p>
    </div>

    <div class="buttons mb-2">
        <button class="btn btn-success">Add to cart</button>
        <button class="btn btn-outline-danger">Wishlist</button>
    </div>

    </div>`;

}
