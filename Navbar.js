let openNavElement=document.querySelector('.open');
    let closeNavElement=document.querySelector('.closebtn');
    let sidenavElement=document.querySelector('.sidenav');
    openNavElement.onclick=function(){
      sidenavElement.style.width="200px";
    } 
    closeNavElement.onclick=function(){
      sidenavElement.style.width="0";
    }
    window.onclick=function(event){
      if(event.target !== sidenavElement && event.target !== openNavElement){
        sidenavElement.style.width="0";
      }
    }
    let mainMenu = document.querySelector(".main-menu");
    let topicMainMenu = document.querySelector(".topic-main-menu");
    let topicMainMenuDld = document.querySelector(".topic-main-menu-dld");
    let topicMainMenuDsa=document.querySelector(".topic-main-menu-dsa");

    function showDiscreteTopics() {
      mainMenu.style.display = "none";
      topicMainMenu.classList.add('active-topic');
  }
  function showDldTopics() {
    mainMenu.style.display = "none";
    topicMainMenuDld.classList.add('active-topic-dld');
}
  function showDsaTopics() {
    mainMenu.style.display = "none";
    topicMainMenuDsa.classList.add('active-topic-dsa');
  }
 
  