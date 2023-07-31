document.addEventListener('DOMContentLoaded', function(){
    // console.log('dom ready!!');
    loadPortfolio();
});

function loadPortfolio(){
    // console.log('From the load portfolio function');
    const url = 'data.json';
    fetch (url)
    .then(response => response.json())
    .then(data => {
        // console.log(data.portfolio);
        let html = '';
        data.portfolio.forEach(item => {
            html += `
                <div class="item">
                    <img src="img/${item.id}.jpg">
                    <div class="content">
                    <h3>${item.projectname}</h3>
                    <p>${item.desc}</p>
                    </div>
                </div>
            `;
        });
        // console.log(html);
        document.querySelector('#portfolio').innerHTML = html;
    })
}