async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();

    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.dir(response);
        document.location.replace('/');
      } else {
        alert(`User or password incorrect\n ${response.statusText}`);
      }
    }
  }
  

  async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#user-signup').value.trim();

    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  
  document
    .querySelector('.login-form')

    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')

    .addEventListener('submit', signupFormHandler);
  