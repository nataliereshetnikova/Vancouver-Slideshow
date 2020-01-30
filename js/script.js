let slides = [{
    caption: "Vancouver bird view",
    image: "1.jpg",
    size: "cover"
},
{
    caption: "stunning waterfall near Vancouver",
    image: "2.jpg",
    size: "cover"
},
{
    caption: "Victoria in the evening",
    image: "3.jpg",
    size: "cover"
},
{
    caption: "Vancouver forest",
    image: "4.jpg",
    size: "cover"
}];

window.onload= () =>{
    let currSlide = 1;
    let iHandle;
    let container = document.getElementById("slideshow");
    let nav = document.createElement("nav");
    container.appendChild(nav);
    //caption
    let caption = document.createElement('div');
    caption.classList.add("caption");
    container.appendChild(caption);
    caption.innerHTML = slides[currSlide].caption;
    //previous and next buttons
    let btnPrev = document.createElement("button");
    let btnNext = document.createElement("button");
    btnPrev.innerHTML="⬅";
    btnNext.innerHTML="➡";
    nav.appendChild(btnPrev);
    btnPrev.addEventListener("click", ()=>{
        currSlide =Math.abs(currSlide-1)% slides.length;
        showSlide(currSlide);
    });
    btnNext.addEventListener("click", ()=>{
        currSlide =(currSlide+1) % slides.length;
        showSlide(currSlide);
    });
    let showSlide = (num)=>{
        currSlide = num;
        setInterval(() => {
            for(let i = 0; i<slides.length;i++){
                if(i == currSlide){
                    slides[i].element.style.opacity = "1";
                    caption.innerHTML = slides[i].caption;
                } else{
                    slides[i].element.style.opacity = "0";
                }
            }
        }, 1500);
    }

    let startShow = ()=>{
        iHandle = setInterval(() => {
            currSlide =(currSlide+1) % slides.length;
            showSlide(currSlide);
        }, 2000);
    }

    container.addEventListener("mouseover",() =>{   
        clearInterval(iHandle);
    });
    container.addEventListener("mouseout",() =>{   
        startShow();
    });


    slides.forEach((slide , index)=>{
        let chrome = document.createElement("div");
        chrome.classList.add("slide");
        chrome.style.backgroundImage = "url('img/"+slide.image+"')";
        chrome.style.backgroundSize = slide.size;
        chrome.style.width = "100%";
        chrome.style.height = "100%";
        container.appendChild(chrome);
        slide.element = chrome;
        let thumb = document.createElement("div");
        thumb.style.backgroundImage = "url('img/"+slide.image+"')";
        thumb.style.width = "60px";
        thumb.style.height = "40px";
        thumb.style.backgroundSize = "cover";
        nav.appendChild(thumb);
        thumb.addEventListener("click", ()=>{
            showSlide(index);
        });
    });
    nav.appendChild(btnNext);
    startShow();
};







