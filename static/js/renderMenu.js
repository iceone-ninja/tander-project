//рендеринг топ-меню

const brandName = 'TANDER';
const brandLink = '#';

const urls = {
    'Home':'/',
    'Add comment':'/comment',
    'View comments':'/view',
    'Statistics':'/stat'
}
const makeMenuItems = (urls)=>{
    let lis = '';
    for (const [key, value] of Object.entries(urls)) {
        lis += `<li class="pure-menu-item"><a href="${value}" class="menu-link pure-menu-link">${key}</a></li>`
    }
    return lis
}
const html = `<div class="pure-menu pure-menu-horizontal">
<strong><a href="${brandLink}" class="menu-link pure-menu-heading pure-menu-link">${brandName}</a></strong>
<ul class="pure-menu-list">
    ${makeMenuItems(urls)}
</ul>
</div>`

let renderDiv = document.getElementById('menu');
renderDiv.innerHTML = html;