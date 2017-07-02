var status = 'less';

function toggleText(buttonId, textAreaClass)
{
    var text = '<p>I was blessed to have my eldest son to lead in the drum making. Thank you to Bob and Anne Kennedy who also assisted. Gunalcheesh to Cliff Johnson and Kiele Wise of Juneau Alaska for harvesting the devils club for our drums sticks and beaded necklaces. These tables were given a sample and demonstration at the beginning and students were on there own after that.</p><p>Christopher Looper helped guide students with the paddles, Shirley Ann Giannini guided students with the newly introduced Octopus bags and beading, and last but least we introduced cedar bark weaving lead by myself.</p><p>Lunch was provided with a heaping pot of clam chowder, salmon spread, sailor boy crackers and many goodies provided by students.</p><p>Howaa and Gunalcheesh to Donavin Hannon, Jay Silva, John Hannon, Don and Linda Starbard, Christopher Looper, Shirley Giannini, Charlene Gray, Scott Fulton, Richard Peterson, Cliff Johnson, Kiele Wise, Miranda Starbard, Sue and Israel shotridge for taking the time to help and support this camp.</p>';

    if (status == 'less') {
        document.getElementsByClassName(textAreaClass).innerHTML = text;
        document.getElementById(buttonId).innerText = 'Show Less';
        status = 'more';
    } else if (status == 'more') {
        document.getElementsByClassName(textAreaClass).innerHTML = '';
        document.getElementById(buttonId).innerText = 'Show More';
        status = 'less';
    }
}
