let typed = new typed(".front",{
    Strings:["Front-End Developer","Web Development"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});



function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
//  end menu

function message(){
  let Name = document.getElementById("name");
  let Email= document.getElementById("email");
  let Mssg = document.getElementById("mssg");
  const success =document.getElementById("success");
  const danger = document.getElementById("danger");

  if(Name.value === '' || Email.value === '' || Mssg.value ===''){
    danger.style.display = 'block';
  }else{
   
    setTimeout(() => {
      Name.value = '';
      Email.value = '';
      Mssg.value = '';
    },2000);

    success.style.display = 'block'

   setTimeout(() => {
    danger.style.display = 'none'
    success.style.display ='none'
   },4000)
  }
}






       


