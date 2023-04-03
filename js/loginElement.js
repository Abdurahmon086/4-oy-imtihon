// {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }


const elForm = document.querySelector('.login__form');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.username.value;
    const password = e.target.password.value;

    console.log(email, password);
    fetch('https://reqres.in/api/login', {
        method: 'post',
        body: JSON.stringify({
            email,
            password,
        }),
        headers: {
            'Content-type': 'Application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('token', data.token);
            window.location.href = './index.html';
        });
});
