const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button =>{
    button.addEventListener('click', funcio(){

     const atual = document.querySelector('.ativo')   
     const proximopasso = 'passo-' + this.getatribute('data-proximo');


    atual.classlist.remove('ativo');
    document.getelementbyId(proximopasso).classlist.add('ativo');


    })

})