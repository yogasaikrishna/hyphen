  var body = document.getElementsByTagName('body')[0];
  body.onscroll = scroll;
  //body.attachEvent('onscroll', scroll);
  var i, z, k;

  var nav = body.querySelector('' + body.getAttribute('data-target') + '');
  var navoffset = nav.offsetTop;
  var selector = nav.getElementsByTagName('li');

  //loop to attach event listener to every link in navbar
  for (i = 0; i < selector.length - 1; i++) {
    var attr = selector[i].querySelector('a').getAttribute('href');
    var element = selector[i].querySelector('a');
    element.onclick = (function (i) { return function() {changecolor(i); }; })(i);
  }

  //invoked when clicked on link in navbar
  function changecolor(z) {
    for(k = 0; k < selector.length - 1; k++) {
      selector[k].querySelector('a').classList.remove('addcolor');
    }
    selector[z].querySelector('a').classList.add('addcolor');
  }

  function scroll() {

    //add class to fix navbar position
  if (window.scrollY > navoffset) {
      nav.classList.add('fixindex');
    } else {
        nav.classList.remove('fixindex');
      }
    /*if (window.scrollY > document.getElementById('mainheader').offsetHeight - 1) {
      document.getElementById('mainheader').classList.remove('header');
      document.getElementById('mainheader').classList.add('fixheader');
      nav.classList.add('fixindex');
    } else {
        document.getElementById('mainheader').classList.add('header');
        document.getElementById('mainheader').classList.remove('fixheader');
        nav.classList.remove('fixindex');
      }*/

      //loop to check the scroll position
    for (i = 0; i < selector.length - 1; i++) {
      var attr = body.querySelector('' + selector[i].querySelector('a').getAttribute('href') + '').offsetTop - 1;
      var attrnext = body.querySelector('' + selector[i+1].querySelector('a').getAttribute('href') + '').offsetTop - 1;
      if (window.scrollY >= attr && window.scrollY < attrnext) {
        for(k = 0; k < selector.length; k++) {
          selector[k].querySelector('a').classList.remove('addcolor');
        }
        selector[i].querySelector('a').classList.add('addcolor');
        break;
      }
    }

    if (window.scrollY >= body.querySelector('' + selector[selector.length - 1].querySelector('a').getAttribute('href') + '').offsetTop - 1) {
      for(k = 0; k < selector.length - 1; k++) {
        selector[k].querySelector('a').classList.remove('addcolor');
      }
      selector[selector.length -1].querySelector('a').classList.add('addcolor');
    }
    if (window.scrollY < body.querySelector('' + selector[0].querySelector('a').getAttribute('href') + '').offsetTop - 1) {
      for(k = 0; k < selector.length; k++) {
        selector[k].querySelector('a').classList.remove('addcolor');
      }
    }
  }

  //invokes when clicked on back to top
  /*function back() {
    for(k = 0; k < selector.length - 1; k++) {
      selector[k].querySelector('a').classList.remove('addcolor');
    }
  }*/
