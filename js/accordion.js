// accordion js start 



    const accordionToggles = (document.querySelectorAll("#accordion-collapse"))
    
    accordionToggles.forEach(toggle =>{

          toggle.addEventListener("click",function(e){
            // alert("working");
            e.preventDefault();
            
            const content = this.nextElementSibling;
            
            content.classList.toggle('active');
            
            // const accIcon = document.getElementById('accIcon');



            accordionToggles.forEach(otherToggle=>{
                if(otherToggle !== toggle){
                    otherToggle.nextElementSibling.classList.remove('active');
                }
            })

        })
    });

       



//accordion js end