var open = document.getElementById('open');
var start = document.getElementById('start');
var test = document.getElementById('1');
var test2 = document.getElementById('2');
var test3 = document.getElementById('3');
var test4 = document.getElementById('4');
var button = document.getElementById('button');
var wrapper = document.getElementById('zoomin');
var bt1 = document.getElementById('b1');
var bt2 = document.getElementById('b2');
var bt3 = document.getElementById('b3');
var hiden = document.getElementById('hidden')


window.onload = function(){
   setTimeout(function(){
      open.classList.add('intro');
   },2000);
   setTimeout(function(){
      hiden.classList.remove('hidden')
   },4500);
   setTimeout(function(){
    start.classList.add('start');
   },4000);
   setTimeout(function(){
    start.classList.remove('op0');
   },4000);
   setTimeout(function(){
    test2.classList.add('start');
   },4000);
   setTimeout(function(){
    test3.classList.add('start');
   },4000); setTimeout(function(){
    test4.classList.add('start');
   },4000);
   setTimeout(function(){
      button.classList.add('bt-zoom')
   },4000);
  setTimeout(function(){
   wrapper.classList.add('bt-zoom')
  },4000);
  setTimeout(function(){
   bt1.classList.add('bt-zoom1')
  },2000);
  setTimeout(function(){
   bt2.classList.add('bt-zoom2')
  },2000);
  setTimeout(function(){
   bt3.classList.add('bt-zoom3')
  },2000);
};




