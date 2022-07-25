'strict mode';

const btn_theme = document.querySelector("#btn_theme");

btn_theme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    let theme_name = document.body.className;

    if(theme_name == 'light-theme') {
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }
});

const btn_add = document.querySelector("#btn_add");
let id = 0;

btn_add.addEventListener('click', function () {
    let nome_da_atividade = form.nome_atividade.value;
    let descricao_da_atividade = form.descricao.value;
    if(nome_da_atividade != '') {
        /*
            definindo conteúdo invisivel pop'ups
        */
    
        let div_popup = document.createElement('div');
        div_popup.classList.add('modalDialog');
        id += 1;
        div_popup.id = 'openModal' + id;

        let div_interno = document.createElement('div');

        let link_fechar = document.createElement('a');
        link_fechar.classList.add('close');
        link_fechar.setAttribute('href', '#close');
        link_fechar.setAttribute('title', 'Close');

        let texto_link = document.createTextNode('X');
        link_fechar.appendChild(texto_link);

        div_interno.appendChild(link_fechar);

        let titulo = document.createElement('h1');
        const texto_titulo = document.createTextNode(nome_da_atividade);
        titulo.appendChild(texto_titulo);

        div_interno.appendChild(titulo);

        let descricao = document.createElement('p');
        const texto_descricao = document.createTextNode(descricao_da_atividade);
        descricao.appendChild(texto_descricao);

        div_interno.appendChild(descricao);

        div_popup.appendChild(div_interno);

        document.body.appendChild(div_popup);

        /*
            definindo cards de apresentação dos pop'ups
        */
        let footer = document.createElement('footer');

        let footer_item = document.createElement('div');
        footer_item.classList.add('footer-text');
   
        let footer_titulo = document.createElement('h3');
        let footer_titulo_texto = document.createTextNode(nome_da_atividade);
        footer_titulo.appendChild(footer_titulo_texto);

        footer_item.appendChild(footer_titulo);

        let footer_link = document.createElement('a');
        footer_link.setAttribute('href', '#' + div_popup.id);

        let footer_link_texto = document.createTextNode('descrição');
        footer_link.appendChild(footer_link_texto);

        let footer_paragrafo = document.createElement('p');
        footer_paragrafo.appendChild(footer_link);

        footer_item.appendChild(footer_paragrafo);

        let footer_btn_remove = document.createElement('img');
        footer_btn_remove.setAttribute('src', 'images/icon_remove.ico');
        footer_btn_remove.setAttribute('title', 'Remove');

        footer_item.appendChild(footer_btn_remove);

        footer.appendChild(footer_item);

        document.body.appendChild(footer);

        footer_btn_remove.addEventListener('click', function() {
            const deletar = window.confirm("Deseja mesmo excluir esta atividade?");
            if(deletar) {
                document.body.removeChild(div_popup);
                document.body.removeChild(footer);
            }
        });
    } else {
        window.alert("Digite um nome para a atividade");
    }
});