const data = [
    {
        name: 'John Doe',
        age: '23',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
        name: 'Musa Doe',
        age: '23',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        name: 'young Doe',
        age: '23',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        name: 'joel Doe',
        age: '23',
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
];

const profiles = profileIterator(data);


nextProfile();
// next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display


function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile != undefined){

        document.getElementById("profileDisplay").innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name} </li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
                <li class="list-group-item">Preference: ${currentProfile.gender} looking for: ${currentProfile.lookingFor} </li>
            </ul>
        `
        document.getElementById('imageDisplay').innerHTML= `
            <img width= 100% src = "${currentProfile.image}">
        `;
    } else{
        window.location.reload();
    }
}

// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next : function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false }:
            { done: true}

        }
    }
}
