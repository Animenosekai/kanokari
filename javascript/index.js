// MAIN PAGE SCRIPT FOR KANOKARI WEBSITE PROJECT
// 
// 
// © Anime no Sekai
// 2020


function newKanojo(first_name, second_name, description, price, recommendations_name){
    // Creates a <kanojo> DOM Element with all its informations and appends it to the page.
    // 
    // all of the arguments are strings except for
    // recommendations_name which needs to be a list of string
    
    var kanojo_element = document.createElement('kanojo')
    
    var kanojopicture_element = document.createElement('kanojopicture')
    kanojopicture_element.id = first_name.replace(' ', '') + 'MainPicture'

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
        var profile_image = document.createElement('img');
        profile_image.id = recommendations_name[profile_number].replace(' ', '') + 'ProfilePicture'
        var profile_name_wrapper = document.createElement('profilenamewrapper')
        var profile_name = document.createElement('p');
        profile_name.id = 'profileName'
        profile_name.innerText = recommendations_name[profile_number]
        profile_name_wrapper.appendChild(profile_name)
        profile_element.appendChild(profile_image)
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

    document.getElementsByTagName('main')[0].appendChild(kanojo_element)
}