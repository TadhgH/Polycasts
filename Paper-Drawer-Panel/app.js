console.log("yo");

document.addEventListener('WebComponentsReady', function(){
  var navicon      = document.getElementById('navicon');
  var drawerPanel  = document.getElementById('drawerPanel');

  console.log("inside function");

  navicon.addEventListener('click', function(){
    console.log("click");
    drawerPanel.togglePanel();
  });
});
