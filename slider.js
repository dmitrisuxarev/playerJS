let slider
document.addEventListener("DOMContentLoaded", () => {
    // let numInput = document.querySelector(".slider-change-value");
    // let customSlider = document.querySelector(".custom-slider");
    // let sliderWith = Math.round(customSlider.getBoundingClientRect().width);
    // let min = customSlider.dataset.min ? +customSlider.dataset.min : 0;
    // let max = customSlider.dataset.max ? +customSlider.dataset.max : 100;
    // let value = customSlider.dataset.value ? +customSlider.dataset.value : 0;
    // let position = 0;




    // let sliderBtn = document.createElement("div");
    // sliderBtn.classList.add("slider-button")
    // let sliderLine = document.createElement("div");
    // sliderLine.classList.add("slider-line")

    // customSlider.append(sliderBtn, sliderLine)

    // function sliderMove(e) {
    //     let direction = e.movementX;
    //     position = position + direction;

    //     if (position < sliderWith && position >= 0) {
    //         sliderBtn.style.left = position + "px"
    //         value = (((max - min) / sliderWith) * position) + min;

    //     }
    //     if (position >= sliderWith) {
    //         sliderBtn.style.left = sliderWith + "px"
    //         value = max
    //     }
    //     if (position <= 0) {
    //         sliderBtn.style.left = "0px"
    //         value = min
    //     }
    //     value = Math.round(value)
    //     customSlider.dataset.value = value;
    //     setValueToAnotherInput(numInput)
    // }

    // function setValueToAnotherInput(someInput) {
    //     someInput.value = value;
    // }

    // function setSliderValue(value) {
    //     if (value > max)
    //         value = max;
    //     if (value < min)
    //         value = min
    //     position = (value * sliderWith) / max
    //     sliderBtn.style.left = position + "px"
    // }
    // numInput.addEventListener("change", e => {
    //     setSliderValue(e.target.value)

    // })
    // sliderBtn.addEventListener("mousedown", e => {
    //     e.preventDefault();
    //     document.addEventListener("mousemove", sliderMove)
    // });
    // document.addEventListener("mouseup", () => {
    //     document.removeEventListener("mousemove", sliderMove)
    // })
slider = new CustomeSider(".custom-slider",".slider-change-value")
slider.initialization()


})

class CustomeSider {
    constructor(divClass, dependentInputFieldClass) {
        this.dependentInputField = document.querySelector(dependentInputFieldClass);
        this.slider = document.querySelector(divClass);
        this.sliderWith = Math.round(this.slider.getBoundingClientRect().width);
        this.min = this.slider.dataset.min ? +this.slider.dataset.min : 0;
        this.max = this.slider.dataset.max ? +this.slider.dataset.max : 100;
        this.value = this.slider.dataset.value ? +this.slider.dataset.value : 0;
        this.position = 0;
        // this.initialization()
    }

    
    createSlider() {
        this.sliderBtn = document.createElement("div");
        this.sliderBtn.classList.add("slider-button")
        this.sliderLine = document.createElement("div");
        this.sliderLine.classList.add("slider-line")
        this.sliderFullLine = document.createElement("div");
        this.sliderFullLine.classList.add("slider-full")
        this.sliderLine.append(this.sliderFullLine)
        this.slider.append(this.sliderBtn, this.sliderLine)
    }
    
    moveElements(val){
        this.sliderBtn.style.left = val?val+"px":this.position + "px"
        this.sliderFullLine.style.width = val?val+"px":this.position + "px"
    }
    sliderMove(e) {
        console.log(this.position);
        let direction = e.movementX;
        console.log(direction);
        this.position = this.position + direction;

        if (this.position < this.sliderWith && this.position >= 0) {
            
            this.moveElements()
            this.value = (((this.max - this.min) / this.sliderWith) * this.position) + this.min;

        }
        if (this.position >= this.sliderWith) {
            this.moveElements(this.sliderWith)
            this.value = this.max
        }
        if (this.position <= 0) {
            this.moveElements("0")
            this.value = this.min
        }
        this.value = Math.round(this.value)
        this.slider.dataset.value = this.value;
        this.setValueToAnotherInput()
    }
    
    setValueToAnotherInput(){
        this.dependentInputField.value = this.value;
    }
    setSliderValue(value) {
        if (value > this.max)
            value = this.max;
        if (value < this.min)
            value = this.min
        this.position = (value * this.sliderWith) / this.max
        this.moveElements()
    }
    initialization(){
        this.createSlider()
    
       this.dependentInputField.addEventListener("change", e => {
        this.setSliderValue(e.target.value)

    })
    let f = e=>this.sliderMove(e)
    this.sliderBtn.addEventListener("mousedown", e => {
        e.preventDefault();
        document.addEventListener("mousemove", f)
    });
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", f)
    })
    }
}