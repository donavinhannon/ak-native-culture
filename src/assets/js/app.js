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
    const Activity = {
        'Drums': {
            'text': 'Paragraph about making drums',
            'desktopImg1': 'assets/img/3-2017/active/drums-17.jpg',
            'desktopImg2': 'assets/img/3-2017/active/drums-2.jpg',
            'desktopImg3': 'assets/img/3-2017/active/drums-5.jpg',
            'mobileImg1': 'assets/img/drums-mobile-1.jpg',
            'mobileImg2': 'assets/img/drums-mobile-2.jpg',
            'mobileImg3': 'assets/img/drums-mobile-3.jpg'
        },
        'Paddles': {
            'text': 'Paragraph about making paddles',
            'desktopImg1': 'assets/img/3-2017/active/paddles-2.jpg',
            'desktopImg2': 'assets/img/3-2017/active/paddles-7.jpg',
            'desktopImg3': 'assets/img/9-2015/active/2015-culture-camp-18.jpg',
            'mobileImg1': 'assets/img/paddles-mobile-1.jpg',
            'mobileImg2': 'assets/img/paddles-mobile-2.jpg',
            'mobileImg3': 'assets/img/paddles-mobile-3.jpg'
        },
        'Beads': {
            'text': 'Paragraph about making beads',
            'desktopImg1': 'assets/img/9-2015/active/2015-culture-camp-24.jpg',
            'desktopImg2': 'assets/img/9-2015/active/2015-culture-camp-23.jpg',
            'desktopImg3': 'assets/img/3-2017/active/beads-1.jpg',
            'mobileImg1': 'assets/img/beads-mobile-1.jpg',
            'mobileImg2': 'assets/img/beads-mobile-2.jpg',
            'mobileImg3': 'assets/img/beads-mobile-3.jpg'
        },
        'Weaving': {
            'text': 'Paragraph about making weaving',
            'desktopImg1': 'assets/img/3-2017/active/weaving-4.jpg',
            'desktopImg2': 'assets/img/3-2017/active/weaving-3.jpg',
            'desktopImg3': 'assets/img/3-2017/active/weaving-5.jpg',
            'mobileImg1': 'assets/img/weaving-mobile-1.jpg',
            'mobileImg2': 'assets/img/weaving-mobile-2.jpg',
            'mobileImg3': 'assets/img/weaving-mobile-3.jpg'
        }
    };
    parseTabContent(Activity, tabName);

}

function parseTabContent(o, tabName) {
    let results = o.Drums;
    if (tabName == 'Paddles') {results = o.Paddles;}
    else if (tabName == 'Beads') {results = o.Beads;}
    else if (tabName == 'Weaving') {results = o.Weaving;}
    else if (tabName == 'Bags') {results = o.Bags;}
    else {results = o.Drums;}


    const tabContentHtml = document.getElementById('tab-content');
    tabContentHtml.innerHTML = '<div class="container grid"><div class="grid__col is-12"><p class="activity__text">' + results.text + '</p></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg1 + '" alt="' + tabName + ' Picture 1"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg2 + '" alt="' + tabName + ' Picture 2"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg3 + '" alt="' + tabName + ' Picture 3"></div></div>';

}
