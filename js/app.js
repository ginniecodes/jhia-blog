(() => {
  function changeAvatar(avatar) {
    avatar.to(avatar._curIconId === 'cup' ? 'blockie' : 'cup');
  }
  if(document.querySelector('.banner')) {
    const avatar = new SVGMorpheus('#avatar', { iconId: 'blockie', rotation: 'random'});
    setInterval(changeAvatar.bind(this, avatar), 3000);  
  } else {
    document.querySelector('.app-nav').className += ' green';
  }

  if(!!document.querySelector('.post')) {
    let main = document.querySelector('.post');
    if(!!main.querySelector('img')) {
      let banner = document.querySelector('.banner');
      banner.replaceNode(main.querySelector('img'), banner.querySelector('img'));
    }
  }
})();
