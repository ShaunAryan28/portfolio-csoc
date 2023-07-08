 
document.getElementById('resume-btn').addEventListener('click', function() {
    alert('Resume downloaded!'); 
});

 
document.getElementById('skill-level').addEventListener('click', function() {
    
    var selectedLevel = this.textContent;
    console.log('Selected skill level:', selectedLevel);
   
     changePageColors();
});
    
  
function changePageColors() {
    var colors = ['#ff0000', '#00ff00', '#0000ff','#f0f0ff', '#ffff00', '#ff00ff', '#00ffff', '#ff8000', '#8000ff', '#00ff80', '#ff0080', '#80ff00', '#0080ff'];
    var body = document.body;
    var hoverCards = document.getElementsByClassName('hover-card');

     
    // var bgColor = colors[Math.floor(Math.random() * colors.length)];
    var cardColor = colors[Math.floor(Math.random() * colors.length)];

    
    //body.style.backgroundColor = cardColor;

    
    for (var i = 0; i < hoverCards.length; i++) {
        body.style.hoverCards = cardColor;
        hoverCards[i].style.backgroundColor = cardColor;
    }
}
 
function createFloatingElement() {
    var colors = [ '#ff0000', '#00ff00', '#0000ff', '#ffff00','#ff00ff', '#00ffff', '#ff4500', '#00ff7f', '#8a2be2', '#ff8c00',
     '#7fff00', '#9932cc', '#ffd700', '#00bfff','#dc143c', '#ffd700', '#008080', '#8b4513' ];
    
    var element = document.createElement('div');
    element.classList.add('floating-element');

    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;

   
    var randomX = Math.random() * window.innerWidth;
    var randomY = Math.random() * window.innerHeight;
    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';
    element.style.animationDelay = Math.random() + 's';

   
    var randomSpeed = Math.random() * 2 + 1; 
    var randomAngle = Math.random() * 360; 

    setInterval(function() {
        var newX = randomX + Math.cos(randomAngle) * randomSpeed;
        var newY = randomY + Math.sin(randomAngle) * randomSpeed;

        
        if (newX < window.innerWidth && newX > 0 && newY < window.innerHeight && newY > 0) {
            element.style.left = newX + 'px';
            element.style.top = newY + 'px';
            randomX = newX;
            randomY = newY;
        } else {
            
            randomX = Math.random() * window.innerWidth;
            randomY = Math.random() * window.innerHeight;
            element.style.left = randomX + 'px';
            element.style.top = randomY + 'px';
        }
    }, 1000 / 60);

    
    var floatingContainer = document.querySelector('.floating-container');
    floatingContainer.appendChild(element);
}


for (var i = 0; i < 150; i++) {
    createFloatingElement();
}
