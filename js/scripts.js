
// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}
document.getElementById("sliding-header-menu-close-button").onclick = function(){
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";

}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};


var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs = document.getElementsByClassName("single-tab");

for(var a = 0; a<aboutUsTabs.length ; a++){
  aboutUsTabs[a].onclick = function(){
    var clickedValue = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[clickedValue];
    for(var b = 0; b<aboutUsTabs.length ; b++)
    {
      aboutUsTabs[b].style.backgroundColor = unseletectedColor;
      aboutUsTabs[b].style.fontWeight = "normal";

    }
    this.style.backgroundColor = seletectedColor;
    this.style.fontWeight = "bold";
  }
}




// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];


var prevArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceTitleArea = document.getElementById("service-title");
var serviceTextArea = document.getElementById("service-text");

var currentServiceIndex = 0;

nextArrow.onclick = function(){

  if(currentServiceIndex == (ourServices.length - 1))
  {
    currentServiceIndex = 0;
  }else{
  currentServiceIndex ++;
  }
  var title = ourServices[currentServiceIndex].title;
  var text = ourServices[currentServiceIndex].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}

prevArrow.onclick = function(){
  if(currentServiceIndex == 0)
  {
    currentServiceIndex = ourServices.length - 1;
  }else{
    currentServiceIndex --;
    }

  var title = ourServices[currentServiceIndex].title;
  var text = ourServices[currentServiceIndex].text;
  serviceTitleArea.innerHTML = title;
  serviceTextArea.innerHTML = text;
}







// Footer

document.getElementById("current_year").innerHTML = new Date().getFullYear();

  
   


   