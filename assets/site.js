(() => {
'use strict';
document.querySelectorAll('a[href="index.html"]').forEach(link => link.setAttribute('href','mix-refine.html'));
const nav=document.querySelector('.site-header nav');
if(nav){const all=document.createElement('a');all.href='index.html';const label=document.createElement('span');label.dataset.ja='アプリ一覧';label.dataset.en='All apps';label.textContent='アプリ一覧';all.append(label);nav.append(all);}
const toggle = document.getElementById('language-toggle');
if (!toggle) return;
let language = new URL(window.location.href).searchParams.get('lang') === 'en' ? 'en' : 'ja';
function applyLanguage(updateURL) {
document.documentElement.lang = language;
document.querySelectorAll('[data-ja][data-en]').forEach(element => {element.textContent = element.dataset[language];});
toggle.textContent = language === 'ja' ? 'EN' : '日本語';
toggle.setAttribute('aria-label', language === 'ja' ? 'Switch to English' : '日本語に切り替える');
document.querySelectorAll('a[href]').forEach(link => {
const raw = link.getAttribute('href');
if (raw.startsWith('#') || raw.startsWith('mailto:')) return;
const url = new URL(raw, window.location.href);
if (url.origin !== window.location.origin || !url.pathname.endsWith('.html')) return;
if (language === 'en') url.searchParams.set('lang', 'en'); else url.searchParams.delete('lang');
link.setAttribute('href', url.pathname.split('/').pop() + url.search + url.hash);
});
if (updateURL) {const url = new URL(window.location.href);if (language === 'en') url.searchParams.set('lang', 'en');else url.searchParams.delete('lang');window.history.replaceState(null, '', url);}
}
toggle.hidden = false;
toggle.addEventListener('click', () => {language = language === 'ja' ? 'en' : 'ja'; applyLanguage(true);});
applyLanguage(false);
})();
