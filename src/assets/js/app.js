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
            'img1': 'assets/img/ccc-2017/active/drums-17.jpg',
            'img2': 'assets/img/ccc-2017/active/drums-2.jpg',
            'img3': 'assets/img/ccc-2017/active/drums-5.jpg'
        },
        'Paddles': {
            'text': 'Paddles are cut into shape prior to class to help the students to be able to complete their them during this one day affair.  Bench planes are used to shave the boards down to form the paddles.  As the paddles get shaped the students finish by sanding all the edges.  Last but not least a pattern can be placed on the paddle and painted to precise precision.',
            'img1': 'assets/img/ccc-2017/active/paddles-2.jpg',
            'img2': 'assets/img/ccc-2017/active/paddles-7.jpg',
            'img3': 'assets/img/ccc-2015/active/2015-culture-camp-18.jpg'
        },
        'Moccasins': {
            'text': 'Moccasin kits are carefully put together by gathering materials such as Elk hide, inner lining material, sinew, wool for vamps, Elk strips for welts and furs for the trim. Students are expected to get at least one moccasin complete by the end of class in order to successfully complete their pair once returning home.',
            'img1': 'assets/img/activity/moccasin-img01.jpg',
            'img2': 'assets/img/activity/moccasin-img02.jpg',
            'img3': 'assets/img/activity/moccasin-img03.jpg'
        },
        'Beads': {
            'text': 'Devil’s club is a very spiritual and medicinal plant used throughout Native Alaskan cultures. For our class it is gathered in Alaska and Washington by friends and family.  The outer bark is peeled off being careful of the sharp needle like thorns. Bead shapes are cut from the limbs and holes are drilled out by taking the innermost  part of the bead out. Students then place glass, plastic, and devil’s club beads on leather necklaces.',
            'img1': 'assets/img/ccc-2015/active/2015-culture-camp-24.jpg',
            'img2': 'assets/img/ccc-2015/active/2015-culture-camp-23.jpg',
            'img3': 'assets/img/ccc-2017/active/beads-1.jpg'
        },
        'Weaving': {
            'text': 'Alaskan and Washington red and yellow cedar is prepared prior to the Culture Camp.  Students are able to make a traditional cedar bark basket with instruction of a Native weaver. ',
            'img1': 'assets/img/ccc-2017/active/weaving-4.jpg',
            'img2': 'assets/img/ccc-2017/active/weaving-3.jpg',
            'img3': 'assets/img/ccc-2017/active/weaving-5.jpg'
        },
        'Bags': {
            'text': 'Octopus (devil’s fish) bags named after their eight dangling arms are worn by men and women with their Tlingit dance regalia. Felt was cut into the shapes of the octopus bags ready for students to sew their bags. It is talked about how the bags are made, examples are shown, and sewing materials are placed out for students to create their bag.  Once the bag is complete they can be decorated with designs by using beads, appliques, and sewn designs of student\'s choice.',
            'img1': 'assets/img/activity/octopus-bag-img01.jpg',
            'img2': 'assets/img/activity/octopus-bag-img02.jpg',
            'img3': 'assets/img/activity/octopus-bag-img03.jpg'
        }
    };
    parseActivity(Activity, tabName);

}

function parseActivity(o, tabName) {
    let results = o.Drums;
    if (tabName == 'Paddles') {results = o.Paddles;}
    if (tabName == 'Moccasins') {results = o.Moccasins;}
    if (tabName == 'Beads') {results = o.Beads;}
    if (tabName == 'Weaving') {results = o.Weaving;}
    if (tabName == 'Bags') {results = o.Bags;}


    const tabContentHtml = document.getElementById('tab-content');
    tabContentHtml.innerHTML = '<div class="container grid"><div class="grid__col is-12"><p class="activity__text">' + results.text + '</p></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.img1 + '" alt="' + tabName + ' Picture 1"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.img2 + '" alt="' + tabName + ' Picture 2"></div><div class="grid__col text-center is-12--small is-4--medium is-4--large"><img class="media" src="' + results.img3 + '" alt="' + tabName + ' Picture 3"></div></div>';

}
