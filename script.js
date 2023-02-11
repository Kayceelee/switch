const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('btn');



button.addEventListener('mouseover', () => {
    console.log(username.value, password.value.length)
    if (username.innerText == "" && password.value.length < 7) {
        if (button.classList.contains('middle')) {
            button.classList.toggle('left');
            button.classList.remove('middle')
        } else if (button.classList.contains('left')) {
            button.classList.remove('left');
            button.classList.add('right')
        } else if (button.classList.contains('right')) {
            button.classList.remove('right');
            button.classList.add('left')
        }
    } else {
        if (button.classList.contains('left')) {
            button.classList.remove('left');
            button.classList.add('middle');

        } else if (button.classList.contains('right')) {
            button.classList.remove('right');
            button.classList.add('middle');
        }
    }
});




const getUserInfo = (firstName, lastName, country, title, skills) => {
        return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join( ' ' )} `
    }
    // When we call this function we need parameters
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(
    getUserInfo('Esionye', 'Onyekachi', 'Nigeria', 'FullStack Developer', skills)
)