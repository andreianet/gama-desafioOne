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
    //var button;
    let content = document.getElementById('content');
    let spinner = `<p>carregando...<\p>`
    let pronto = `<p>Cadastro Feito!</>`
    content.innerHTML = spinner;
    spinner = spinner.firstChild    

    setTimeout(() =>{
        content.innerHTML = pronto
    }, 1000)

    //console.log(name, email)
})

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");

}