// MAIN PAGE SCRIPT FOR KANOKARI WEBSITE PROJECT
// 
// 
// © Anime no Sekai
// 2020

var iteration = 0
var counter = 0
var kanojolist = []
var currentInterval 

function newKanojo(first_name, second_name, description, price, recommendations_name, customstyling){
    // Creates a <kanojo> DOM Element with all its informations and appends it to the page.
    // 
    // all of the arguments are strings except for
    // recommendations_name which needs to be a list of string
    
    var kanojo_element = document.createElement('kanojo')
    
    var kanojopicture_element = document.createElement('kanojopicture')
    kanojopicture_element.id = first_name.replace(' ', '') + 'MainPicture'
    if (customstyling != undefined) {
        kanojopicture_element.setAttribute('style', customstyling)
    }
    var kanojoinformation_element = document.createElement('kanojoinformation')
    
    var description_element = document.createElement('description');
    var description_content = document.createElement('p');
    description_content.innerText = description
    description_element.appendChild(description_content)

    var name_element = document.createElement('name');
    var first_name_element = document.createElement('p');
    var second_name_element = document.createElement('p');
    first_name_element.innerText = first_name
    second_name_element.innerText = second_name
    first_name_element.id = 'firstName'
    second_name_element.id = 'secondName'
    name_element.appendChild(first_name_element)
    name_element.appendChild(second_name_element)


    var kanojobuttons_elemnt = document.createElement('kanojolinks')
    var price_button_element = document.createElement('button');
    price_button_element.innerText = '￥' + String(price) + '/hr';

    var reviews_button = document.createElement('button');
    reviews_button.innerText = 'Reviews'

    kanojobuttons_elemnt.appendChild(price_button_element)
    kanojobuttons_elemnt.appendChild(reviews_button)

    var recommendations_element = document.createElement('recommendations');
    var recommendations_title = document.createElement('p');
    recommendations_title.innerText = 'Recommendations'
    recommendations_title.id = 'recommendationTitle'
    recommendations_element.appendChild(recommendations_title)
    var recommendations_profiles = document.createElement('profiles');
    for (profile_number in recommendations_name){
        var profile_element = document.createElement('profile');
        profile_element.setAttribute('onclick', 'changeKanojo("' + recommendations_name[profile_number].split(' ')[0] + '", "'+ first_name + '")')
        var kanojoprofilepic_element = document.createElement('kanojoprofilepicture');
        kanojoprofilepic_element.id = recommendations_name[profile_number].replace(' ', '') + 'ProfilePicture'
        var profile_name_wrapper = document.createElement('profilenamewrapper')
        var profile_name = document.createElement('p');
        profile_name.id = 'profileName'
        profile_name.innerText = recommendations_name[profile_number]
        profile_name_wrapper.appendChild(profile_name)
        profile_element.appendChild(kanojoprofilepic_element)
        profile_element.appendChild(profile_name_wrapper)
        recommendations_profiles.appendChild(profile_element)
    }
    recommendations_element.appendChild(recommendations_profiles)

    kanojoinformation_element.appendChild(description_element)
    kanojoinformation_element.appendChild(name_element)
    kanojoinformation_element.appendChild(kanojobuttons_elemnt)
    kanojoinformation_element.appendChild(recommendations_element)

    kanojo_element.appendChild(kanojopicture_element)
    kanojo_element.appendChild(kanojoinformation_element)

    kanojo_element.setAttribute('kanojoname', first_name)
    kanojo_element.setAttribute('kanojonumber', counter)

    if (counter > 0){
        kanojo_element.classList.add('kanojohidden')
    }

    document.getElementsByTagName('main')[0].appendChild(kanojo_element)

    var newDot = document.createElement('span')
    newDot.classList.add('dot')
    if (counter == 0) {
        newDot.classList.add('focuseddot')
    }
    newDot.setAttribute('onclick', 'changeKanojo("' + first_name + '", "Chizuru")')
    document.getElementsByTagName('progressiondots')[0].appendChild(newDot)

    counter ++
    kanojolist.push(first_name)
}

function changeKanojo(kanojoname, currentkanojo){
    if (kanojoname == currentkanojo){
        return
    }
    clearInterval(currentInterval)
    autoSlide(10000)
    iteration = kanojolist.indexOf(kanojoname)
    //iteration = kanojolist.indexOf(currentkanojo) + 1
    listOfKanojos = document.getElementsByTagName('kanojo')
    
    //console.log('Current Kanojo: ' + kanojoname)
    switch(kanojoname){
        case 'Chizuru':
            document.getElementsByClassName('chizurucolors')[0].classList.remove('backgrounddisappear')
            document.getElementsByClassName('sumicolors')[0].classList.add('backgrounddisappear')
            document.getElementsByClassName('rukacolors')[0].classList.add('backgrounddisappear')
            var dots = document.getElementsByClassName('dot')
            for (number in dots) {
                try {
                    dots[number].setAttribute('onclick', 'changeKanojo("' + kanojolist[number] + '", "' + kanojoname + '")')
                    if (number == iteration) {
                        dots[number].classList.add('focuseddot')
                    } else {
                        dots[number].classList.remove('focuseddot')
                    }
                } catch { }
            }
            break
        case 'Sumi':
            document.getElementsByClassName('sumicolors')[0].classList.remove('backgrounddisappear')
            document.getElementsByClassName('chizurucolors')[0].classList.add('backgrounddisappear')
            document.getElementsByClassName('rukacolors')[0].classList.add('backgrounddisappear')
            var dots = document.getElementsByClassName('dot')
            for (number in dots) {
                try {
                    dots[number].setAttribute('onclick', 'changeKanojo("' + kanojolist[number] + '", "' + kanojoname + '")')
                    if (number == iteration) {
                        dots[number].classList.add('focuseddot')
                    } else {
                        dots[number].classList.remove('focuseddot')
                    }
                } catch { }
            }
            break
        case 'Ruka':
            document.getElementsByClassName('rukacolors')[0].classList.remove('backgrounddisappear')
            document.getElementsByClassName('chizurucolors')[0].classList.add('backgrounddisappear')
            document.getElementsByClassName('sumicolors')[0].classList.add('backgrounddisappear')
            var dots = document.getElementsByClassName('dot')
            for (number in dots) {
                try {
                    dots[number].setAttribute('onclick', 'changeKanojo("' + kanojolist[number] + '", "' + kanojoname + '")')
                    if (number == iteration) {
                        dots[number].classList.add('focuseddot')
                    } else {
                        dots[number].classList.remove('focuseddot')
                    }
                } catch { }
            }
            break
    }

    var disappearingKanojo = document.querySelector('kanojo[kanojoname=' + currentkanojo + ']')
    var showingKanojo = document.querySelector('kanojo[kanojoname=' + kanojoname + ']')
    disappearingKanojo.classList.add('kanojodisappear')
    showingKanojo.classList.remove('hidden')
    showingKanojo.classList.remove('kanojohidden')
    setTimeout(function(){
        //disappearingKanojo.classList.add('hidden')
        disappearingKanojo.classList.add('kanojohidden')
        disappearingKanojo.classList.remove('kanojodisappear')
    },500)
}

function goHome(){
    window.open('/', '_self')
}

function autoSlide(sleeptime){
    currentInterval = setInterval(function(){
        showingKanojoNumber = iteration + 1
        if (showingKanojoNumber >= kanojolist.length){
            showingKanojoNumber = 0
        }
        changeKanojo(kanojolist[showingKanojoNumber], kanojolist[iteration])
        //iteration ++
        if (iteration >= kanojolist.length){
            iteration = 0
        }
    },sleeptime)
}