function getJson(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    };
    xhr.open('GET', url, true); // true for asynchronous
    xhr.send(null);
}

function getTabContent(tabName) {
    getJson('https://www.calaska.org/assets/json/activities.json', function(o) {
        parseTabContent(o, tabName);
    });
}

function parseTabContent(o, tabName) {
    const json = JSON.parse(o);
    let results = json.Drums;
    if (tabName == 'Paddles') {results = json.Paddles;}
    else if (tabName == 'Beads') {results = json.Beads;}
    else if (tabName == 'Weaving') {results = json.Weaving;}
    else if (tabName == 'Bags') {results = json.Bags;}
    else {results = json.Drums;}


    const tabContentHtml = document.getElementById('tab-content');
    tabContentHtml.innerHTML = '<div class="container grid"><div class="grid__col is-12"><p class="activity__text">' + results.text + '</p></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg1 + '" alt="' + tabName + ' Picture 1"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg2 + '" alt="' + tabName + ' Picture 2"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg3 + '" alt="' + tabName + ' Picture 3"></div></div>';

}
