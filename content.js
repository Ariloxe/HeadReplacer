const profileDiv = document.querySelector('.profile');

if (profileDiv && window.location.href.includes('ecoledirecte.com')) {
  console.log('L\'image de fond a été remplacée avec succès.');
  profileDiv.style.backgroundImage = `url('https://media.tenor.com/ppSaoARoT-kAAAAC/nao.gif')`;

  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .ed-menu-eleve-seul .active .ed-menu-image-wrapper div:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      visibility: hidden;
      background: linear-gradient(rgba(13, 79, 147, 0.01), rgb(13, 79, 147));
    }
  `;
  document.head.appendChild(styleElement);

} else {
  console.log('Aucune image n\'a été modifiée.');
}