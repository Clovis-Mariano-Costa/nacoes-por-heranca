document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var midiaSection = document.getElementById('midia');
  if (!midiaSection || document.querySelector('.video-gallery')) return;

  var videos = [
    { id: 'skeoCjxQNVE', title: 'Acervo autorizado — Nações Por Herança 1' },
    { id: 'Z8aSJaYtuso', title: 'Acervo autorizado — Nações Por Herança 2' },
    { id: 'jC8nuhAnVZ4', title: 'Acervo autorizado — Nações Por Herança 3' },
    { id: '32MzipJDFVQ', title: 'Acervo autorizado — Nações Por Herança 4' },
    { id: 'q7vzihX-HKk', title: 'Acervo autorizado — Nações Por Herança 5' }
  ];

  var gallery = document.createElement('div');
  gallery.className = 'video-gallery';
  gallery.setAttribute('aria-label', 'Vídeos autorizados da Associação Social Nações Por Herança');

  videos.forEach(function (video, index) {
    var article = document.createElement('article');
    article.className = index === 0 ? 'video-card video-card-featured' : 'video-card';

    article.innerHTML =
      '<div class="video-frame">' +
        '<iframe loading="lazy" src="https://www.youtube-nocookie.com/embed/' + video.id + '" title="' + video.title + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' +
      '</div>' +
      '<div class="video-card-body">' +
        '<h3>' + video.title + '</h3>' +
        '<p>Vídeo autorizado para compor o acervo público e a memória institucional da Associação Social Nações Por Herança.</p>' +
        '<a class="link" href="https://youtu.be/' + video.id + '" target="_blank" rel="noopener">Abrir no YouTube</a>' +
      '</div>';

    gallery.appendChild(article);
  });

  var cards = midiaSection.querySelector('.cards');
  if (cards && cards.parentNode) {
    cards.insertAdjacentElement('afterend', gallery);
  }
});
