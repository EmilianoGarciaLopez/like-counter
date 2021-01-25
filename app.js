const button = document.getElementById("click");
var count = 0;
  
  function addNum(){
  count += 1;
  document.getElementById("click").innerHTML = "Click me: " + count;
};

function Reset(){
    count = 0;
    document.getElementById("click").innerHTML = "Click me: " + count;
}