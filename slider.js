document.addEventListener("DOMContentLoaded",()=>{
    let customSlider = document.querySelector(".custom-slider");
    let sliderWith = Math.round(customSlider.getBoundingClientRect().width);
    let min = customSlider.dataset.min?+customSlider.dataset.min:0;
    let max = customSlider.dataset.max?+customSlider.dataset.max:100;
    let value = customSlider.dataset.value?+customSlider.dataset.value:0;
    let position= 0;

    

    
    let sliderBtn = document.createElement("div");
    sliderBtn.classList.add("slider-button")
    let sliderLine = document.createElement("div");
    sliderLine.classList.add("slider-line")

    customSlider.append(sliderBtn,sliderLine)
    
        function sliderMove(e){
            let direction = e.movementX;
            position=position+direction;
               
            if(position<sliderWith&&position>=0){
            sliderBtn.style.left = position+"px" 
            // value = ((max)/sliderWith)*position
            value = (((max-min)/sliderWith)*position)+min;
            
            }
            if(position>=sliderWith){
                sliderBtn.style.left = sliderWith+"px"
                value = max
            }
            if(position<=0){
                sliderBtn.style.left = "0px"
                value = min
            }
            customSlider.dataset.value = Math.round(value); 
            console.log({max,min,value,position,sliderWith});
            }

    sliderBtn.addEventListener("mousedown",e=>{
        e.preventDefault();
        document.addEventListener("mousemove",sliderMove)});
   document.addEventListener("mouseup",()=>{
    document.removeEventListener("mousemove",sliderMove)
   }) 
})