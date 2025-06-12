const trendingHolder = document.querySelector('.trending-holder');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const card = document.querySelector('.trending-card')
const cardWidth = card.offsetWidth+40;


// nextBtn.addEventListener('click',(e)=>{
//     // alert("working");
//     trendingHolder.scrollBy({left: +cardWidth, behavior: 'smooth'});
    
// })

// prevBtn.addEventListener('click',()=>{
//     // alert("working");
//     trendingHolder.scrollBy({left: -cardWidth, behavior: 'smooth'});
// })


if (card.offsetWidth=250){
    const cardWidth = card.offsetWidth+24;
    nextBtn.addEventListener('click',(e)=>{
    // alert("working");
    trendingHolder.scrollBy({left: +cardWidth, behavior: 'smooth'});
    
})

prevBtn.addEventListener('click',()=>{
    // alert("working");
    trendingHolder.scrollBy({left: -cardWidth, behavior: 'smooth'});
})


}
else if (card.offsetWidth=380){

     const cardWidth = card.offsetWidth+30;
    nextBtn.addEventListener('click',(e)=>{
    // alert("working");
    trendingHolder.scrollBy({left: +cardWidth, behavior: 'smooth'});
    
})

prevBtn.addEventListener('click',()=>{
    // alert("working");
    trendingHolder.scrollBy({left: -cardWidth, behavior: 'smooth'});
})

}
else{
    nextBtn.addEventListener('click',(e)=>{
    // alert("working");
    trendingHolder.scrollBy({left: +cardWidth, behavior: 'smooth'});
    
})

prevBtn.addEventListener('click',()=>{
    // alert("working");
    trendingHolder.scrollBy({left: -cardWidth, behavior: 'smooth'});
})

}