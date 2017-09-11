/* exported getJson*/
function getJson(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    };
    xhr.open('GET', url, true); // true for asynchronous
    xhr.send(null);
}

/* exported getActivity*/
function getActivity(tabName) {
    const Activity = {
        'Drums': {
            'text': 'A 10 inch round deerskin rawhide leather round is used to form the drum. Once the holes are pounded into the leather, round wooden frames are placed on the table to stretch the hide.  A leather lace is stretched and ready at this time to start lacing the drum together weaving in and out of the drums.',
            'desktopImg1': 'assets/img/ccc-2017/active/drums-17.jpg',
            'desktopImg2': 'assets/img/ccc-2017/active/drums-2.jpg',
            'desktopImg3': 'assets/img/ccc-2017/active/drums-5.jpg',
            'mobileImg1': 'assets/img/drums-mobile-1.jpg',
            'mobileImg2': 'assets/img/drums-mobile-2.jpg',
            'mobileImg3': 'assets/img/drums-mobile-3.jpg'
        },
        'Paddles': {
            'text': 'Paddles are cut into shape prior to class to help the students to be able to complete their them during this one day affair.  Bench planes are used to shave the boards down to form the paddles.  As the paddles get shaped the students finish by sanding all the edges.  Last but not least a pattern can be placed on the paddle and painted to precise precision.',
            'desktopImg1': 'assets/img/ccc-2017/active/paddles-2.jpg',
            'desktopImg2': 'assets/img/ccc-2017/active/paddles-7.jpg',
            'desktopImg3': 'assets/img/ccc-2015/active/2015-culture-camp-18.jpg',
            'mobileImg1': 'assets/img/paddles-mobile-1.jpg',
            'mobileImg2': 'assets/img/paddles-mobile-2.jpg',
            'mobileImg3': 'assets/img/paddles-mobile-3.jpg'
        },
        'Beads': {
            'text': 'Devil’s club is a very spiritual and medicinal plant used throughout Native Alaskan cultures. For our class it is gathered in Alaska and Washington by friends and family.  The outer bark is peeled off being careful of the sharp needle like thorns. Bead shapes are cut from the limbs and holes are drilled out by taking the innermost  part of the bead out. Students then place glass, plastic, and devil’s club beads on leather necklaces.',
            'desktopImg1': 'assets/img/ccc-2015/active/2015-culture-camp-24.jpg',
            'desktopImg2': 'assets/img/ccc-2015/active/2015-culture-camp-23.jpg',
            'desktopImg3': 'assets/img/ccc-2017/active/beads-1.jpg',
            'mobileImg1': 'assets/img/beads-mobile-1.jpg',
            'mobileImg2': 'assets/img/beads-mobile-2.jpg',
            'mobileImg3': 'assets/img/beads-mobile-3.jpg'
        },
        'Weaving': {
            'text': 'Alaskan and Washington red and yellow cedar is prepared prior to the Culture Camp.  Students are able to make a traditional cedar bark basket with instruction of a Native weaver. ',
            'desktopImg1': 'assets/img/ccc-2017/active/weaving-4.jpg',
            'desktopImg2': 'assets/img/ccc-2017/active/weaving-3.jpg',
            'desktopImg3': 'assets/img/ccc-2017/active/weaving-5.jpg',
            'mobileImg1': 'assets/img/weaving-mobile-1.jpg',
            'mobileImg2': 'assets/img/weaving-mobile-2.jpg',
            'mobileImg3': 'assets/img/weaving-mobile-3.jpg'
        }
    };
    parseActivity(Activity, tabName);

}

function parseActivity(o, tabName) {
    let results = o.Drums;
    if (tabName == 'Paddles') {results = o.Paddles;}
    if (tabName == 'Beads') {results = o.Beads;}
    if (tabName == 'Weaving') {results = o.Weaving;}
    if (tabName == 'Bags') {results = o.Bags;}


    const tabContentHtml = document.getElementById('tab-content');
    tabContentHtml.innerHTML = '<div class="container grid"><div class="grid__col is-12"><p class="activity__text">' + results.text + '</p></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg1 + '" alt="' + tabName + ' Picture 1"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg2 + '" alt="' + tabName + ' Picture 2"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.desktopImg3 + '" alt="' + tabName + ' Picture 3"></div></div>';

}
