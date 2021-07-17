const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); //não deixa a página ser recarregada    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    //LocalStorage
    let dataStorage = {
        name,
        email,
    }
    let data = JSON.stringify(dataStorage);
    localStorage.setItem('lead', data)

    //loader
    let content = document.getElementById('content');
    let spinner = document.createElement('spinner')//`<p>carregando...<\p>`
    let pronto = `<p>pronto</>`
    content.innerHTML = spinner;
    setTimeout(() =>{
        content.innerHTML = pronto
    }, 1000)

    //console.log(name, email)
})