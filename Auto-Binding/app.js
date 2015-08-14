var tmpl = document.querySelector('#tmpl');
tmpl.heading = "Hello Polycast";
tmpl.selected = 0;
tmpl.addEventListener('dom-change', function(){
  console.log(document.querySelector('paper-menu'));
});
