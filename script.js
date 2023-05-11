const one=document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const submit = document.querySelector(".button-personal");
const numbers = document.querySelectorAll('.numbers')
const section1 = document.querySelector(".personal-infos");
const section2 = document.querySelector(".plan");
const section3 = document.querySelector(".adds-on ");
const section4 = document.querySelector(".finish ");
numbers.forEach(number => {
    console.log(number)
})
submit.addEventListener('click', (e) => {
    e.preventDefault()
})
two.addEventListener('click', () => {
    two.classList.add('active')
    one.classList.remove('active')
    three.classList.remove('active')
    four.classList.remove('active')
    section1.classList.add("hidden")
    section3.classList.add("hidden")
    section4.classList.add("hidden")
    section2.classList.remove("hidden")
})
one.addEventListener("click", () => {
  one.classList.add("active");
  two.classList.remove("active");
  three.classList.remove("active");
    four.classList.remove("active");
      section2.classList.add("hidden");
      section3.classList.add("hidden");
      section4.classList.add("hidden");
      section1.classList.remove("hidden");
    
});
three.addEventListener("click", () => {
 three.classList.add("active");
  one.classList.remove("active");
  two.classList.remove("active");
    four.classList.remove("active");
     section2.classList.add("hidden");
     section3.classList.remove("hidden");
     section4.classList.add("hidden");
     section1.classList.add("hidden");
});
four.addEventListener("click", () => {
  four.classList.add("active");
  one.classList.remove("active");
  two.classList.remove("active");
    three.classList.remove("active");
      section2.classList.add("hidden");
      section3.classList.add("hidden");
      section4.classList.remove("hidden");
      section1.classList.add("hidden");
});