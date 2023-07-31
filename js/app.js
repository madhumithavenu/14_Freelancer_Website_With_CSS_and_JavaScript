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
        console.log(data.portfolio);
    })
}