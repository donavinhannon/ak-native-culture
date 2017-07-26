function getJson(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    };
    xhr.open('GET', url, true); // true for asynchronous
    xhr.send(null);
}

function getTabContent(tab) {
    getJson('https://www.calaska.org/assets/json/activities.json', function() {
        var tabContentHtml = document.getElementById('tab-content');
        tabContentHtml.innerHTML = '<div class="container grid"><div class="grid__col is-12"><p class="activity__text">' + tab.text + '</p></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + tab.desktopImg1 + '" alt="' + tab + ' Picture 1"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + tab.desktopImg2 + '" alt="' + tab + ' Picture 2"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + tab.desktopImg3 + '" alt="' + tab + ' Picture 3"></div></div>';
    });
}
