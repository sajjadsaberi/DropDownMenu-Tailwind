document.getElementById('menu-button').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('hidden');
  });
  
  // برای بستن منو هنگام کلیک بر روی بدنه صفحه
  document.addEventListener('click', function (event) {
    var menu = document.getElementById('menu');
    var menuButton = document.getElementById('menu-button');
  
    if (!menu.contains(event.target) && event.target !== menuButton) {
      menu.classList.add('hidden');
    }
  });
  