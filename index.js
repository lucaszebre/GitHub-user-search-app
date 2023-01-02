window.onload = function(){
const button = document.querySelector(".search");
const mouse = document.querySelector(".block2");
mouse.addEventListener('click',function(){
    const search = document.querySelector('#icon');
    search.style.visibillity="hidden";
})
button.addEventListener('click',function(){
    const avatar = document.querySelector('#avatar');
    const tag = document.querySelector('.tag');
    const join = document.querySelector('#join')
    const tag2 = document.querySelector('#tag2');
    const bio = document.querySelector(".bio");
    const repo = document.querySelector("#repos");
    const follower = document.querySelector("#follower");
    const following = document.querySelector('#following');
    const twitter = document.querySelector('.twitter');
    const location = document.querySelector('.location');
    const website = document.querySelector('.website');
    const company = document.querySelector('.company');
    const input = document.querySelector('.block2');
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('fr-FR', options);
        }
function formatBio(bio){
    if(bio == null){
        return "This profile has no bio ";
    }else{
            return bio;
        }
    }

    async function getData(username) {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data.login);
        tag.innerHTML=data.login;
        avatar.src=data.avatar_url;
        tag2.innerHTML=data.login;
        tag2.href=data.html_url;
        bio.innerHTML=formatBio(data.bio);
        repo.innerHTML=data.public_repos;
        follower.innerHTML=data.followers;
        following.innerHTML=data.following;
        twitter.innerHTML=notAvailibe(data.twitter_username);
        location.innerHTML=notAvailibe(data.location);
        website.innerHTML=notAvailibe(data.blog);
        company.innerHTML=notAvailibe(data.company);
        join.innerHTML=formatDate(data.created_at);

        }

        getData(input.value);
})

function notAvailibe(input){
    if (input == null){
        return "Not availabe";
    }
    else{
        return input;
    }
}
const light = document.querySelector("#sun");
light.addEventListener('click',function(){
    changeCouleur(1);
})
const light2 = document.querySelector('#dark');
light2.addEventListener('click',function(){
    changeCouleur(1);
})
const dark = document.querySelector('#light');
dark.addEventListener('click',function(){
    changeCouleur(2);
})

const dark2 = document.querySelector('#moon');
dark2.addEventListener('click',function(){
    changeCouleur(2);
})
function changeCouleur(input){
    const body =    document.querySelector('body');
    const block2 = document.querySelector('.block2');
    const block3 = document.querySelector('.block3');
    const c3 = document.querySelector('.c3');
    const repos = document.querySelector('#repos');
    const follower = document.querySelector('#follower');
    const following = document.querySelector('#following');
    const tag2 = document.querySelector('.tag2');
    const tag = document.querySelector('.tag');
    const table1 = document.querySelector('.tr-1');
    const table2 = document.querySelector('.tr-2');
    if (input == 1){
        body.style.backgroundColor ="#f5f8ff";
        block2.style.backgroundColor ="#fefefe";
        block3.style.backgroundColor = "#fefefe";
        c3.style.backgroundColor="#f5f8ff";
        repos.style.color="#6e7179";
        follower.style.color="#6e7179";
        following.style.color="#6e7179";
        tag2.style.color="#0179fd";
        tag.style.color="#6e7179";
        table1.style.display="flex";
        table2.style.display="none";
    }
    else{
        body.style.backgroundColor ="#141c2f";
        block2.style.backgroundColor ="#1f2a48";
        block3.style.backgroundColor = "#1f2a48";
        c3.style.backgroundColor="#141c2f";
        repos.style.color="#fefefe";
        follower.style.color="#fefefe";
        following.style.color="#fefefe";
        tag2.style.color="#0179fd";
        tag.style.color="#fefefe";
        table1.style.display="none";
        table2.style.display="flex";
    }
}


}