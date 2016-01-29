(function() {
  var i;
  var toggleComponent = document.getElementsByClassName('toggle');
  var toggleSwitch = document.getElementsByClassName('switch');

  for (i = 0; i < toggleComponent.length; i++) {
    toggleComponent[i].onclick = (function (i) { return function(event) {toggle(event, i); }; })(i);
  }

  for (i = 0; i < toggleSwitch.length; i++) {
    //toggleSwitch[i].addEventListener('click', slideSwitch);
    toggleSwitch[i].onclick = (function (i) { return function(event) {toggle(event, i); }; })(i);
  }



  //invoked when clicked on toggle component
  function toggle(event, k) {
    event.stopPropagation();
    var parent = document.getElementsByClassName('toggle');
    var switchType = parent[k].getAttribute('data-switch');
    var listofclasses = parent[k].classList;

    if (!parent[k].querySelector('.checkbox').checked) {
      //switch on
      parent[k].querySelector('.checkbox').checked = true;
      listofclasses.remove('toggle__off');
      listofclasses.add('toggle__on');
      listofclasses.add('toggle__on--' + switchType);
    } else {
      //switch off
      parent[k].querySelector('.checkbox').checked = false;
      listofclasses.remove('toggle__on');
      listofclasses.remove('toggle__on--' + switchType);
      listofclasses.add('toggle__off');
    }
  }

  var rectangularSwitch = document.getElementsByClassName('switch__rectangle');
  var rectangularToggle = document.getElementsByClassName('toggle__rectangle');

  for (i = 0; i < rectangularSwitch.length; i++) {
    rectangularSwitch[i].onclick = (function (i) { return function(event) {changeToggle(event, i); }; })(i);
  }

  for (i = 0; i < rectangularToggle.length; i++) {
    rectangularToggle[i].onclick = (function (i) { return function(event) {changeToggle(event, i); }; })(i);
  }

  //invoked when clicked on toggle component of type rectangular switch
  function changeToggle(event, k) {
    event.stopPropagation();
    var target = document.getElementsByClassName('toggle__rectangle');
    var targetSwitch = target[k].querySelector('.switch__rectangle');
    var targetClasslist = targetSwitch.classList;
    if (!target[k].querySelector('.checkbox').checked) {
      target[k].querySelector('.checkbox').checked = true;
      targetClasslist.remove('switch__rectangle--off');
      targetClasslist.add('switch__rectangle--on');
    } else {
      target[k].querySelector('.checkbox').checked = false;
      targetClasslist.remove('switch__rectangle--on');
      targetClasslist.add('switch__rectangle--off');
    }
  }

})();
