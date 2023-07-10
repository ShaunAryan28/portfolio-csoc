window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
      width: '100%',
      height: '200',
    uri: 'https://open.spotify.com/artist/2oSONSC9zQ4UonDKnLqksx?si=yCIty90WQxWfdnLdlBv9CQ'
    };
    const callback = (EmbedController) => {
      document.querySelectorAll('.episode').forEach(
        episode => {
          episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId)
          });
        })
    };
    IFrameAPI.createController(element, options, callback);
  };  

 

const hoverCards = document.querySelectorAll('.hover-card');

hoverCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = '#f1f1f1';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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


for (var i = 0; i < 100; i++) {
    createFloatingElement();
}
 
 

