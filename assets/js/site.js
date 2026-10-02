/* halihali.loveyou.bond 站点行为：导航折叠 / 返回顶部 / 外链绑定 */
(function () {
  'use strict';

  /* 外链绑定：所有 data-link 按钮读 SITE_LINKS 跳转 */
  document.querySelectorAll('[data-link]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var key = el.getAttribute('data-link');
      var url = window.SITE_LINKS && window.SITE_LINKS[key];
      if (url) {
        e.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });

  /* 移动端导航折叠 */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* 返回顶部 */
  var backTop = document.getElementById('backTop');
  if (backTop) {
    var onScroll = function () {
      backTop.classList.toggle('is-visible', window.scrollY > 480);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
