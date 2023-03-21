x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

  recognition.onresult = function(event){
    console.log(event);

var content = event.results[0][0].transcript;

      document.getElementById("status").innerHTML = "The Speech Has Been Recognized As : " +content;
      if(content == "circle")
      {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("sttus").innerHTML = "Started Drawing Circle ⭕";
        draw_circle = "set";
      }
      if(content == "rectangle")
      {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("state").innerHTML = "Rectangle Is Drawn ▯";
        draw_rect = "set";
      }
  }

  function setup(){
    canvas= createCanvas(00,600);
  }

  function draw(){
    IdleDeadline(draw_circle == "set")
    {
        radius = Math.floor (Math.random()*100);
        circle(x,y,radius);
        document.getElementById("state").innerHTML = "Circle Is Drawn ⭕ ";
        draw_circle= "";
    }

    if(draw_rect == "set")
    {
        recognition(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle Is Drawn ▯ ";
        draw_rect = "";
    }
  }
