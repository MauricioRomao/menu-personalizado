                   //   - pegando a class 'navbar do document'
const navbar=document.querySelector(".navbar")

                 // - pegando a lista de list (lista de list kkk)
const alllist=navbar.querySelectorAll('li')
     //  - selecção do elemento para remocao e add nos elemento
alllist.forEach((li,index) => {
    li.addEventListener("click", e =>{
        navbar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")
        const indicator=navbar.querySelector(".indicator")
        indicator.style.transform=`translateX(calc(${index * 90}px))`
       
    })
    
    
});
