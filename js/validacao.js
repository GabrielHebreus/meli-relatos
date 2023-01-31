    const form = document.getElementById("form");
    const campos =document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.requerimento');

    function toggleButton(){
        const nome = document.getElementsByTagName('input')[0].value;
        const cpf = document.getElementsByTagName('input')[1].value;
        const placoDoVeiculo = document.getElementsByTagName('input')[2].value;
        const rotas = document.getElementsByTagName('input')[3].value;
        const trasportadora = document.getElementsByTagName('input')[4].value;
        const idPacote = document.getElementsByTagName('input')[5].value;
        const datetime = document.getElementsByTagName('input')[6].value;


        if (nome && cpf && placoDoVeiculo && rotas && trasportadora && idPacote && datetime) {
            document.querySelector('#enviar').disabled = false;
            return
    
        }
        document.querySelector('#enviar').disabled = true;
    }

    form.addEventListener('submit',(Event) => {
        Event.preventDefault();
        namevalidate();
        placa();
        rota();
        trasport();
        id_pacote();
        inicio();
        
    })

    function setError(index){
        campos[index].style.border ='2px solid #e63636';
        spans[index].style.display = 'block';
    }

    function removeError(index){
        campos[index].style.border ='2px solid #008000';
        spans[index].style.display = 'none';
    }

    function namevalidate(){
        if(campos[0].value.length < 4)
        {
            setError(0);
        }
        else
        {
            removeError(0);
        }
    }


    function placa(){
        if(campos[2].value.length < 7)
        {
            setError(2);
        }
        else
        {
            removeError(2);
            
        }
    }

    function rota(){
        if(campos[3].value.length < 3)
        {
            setError(3);
        }
        else
        {
            removeError(3);
            
        }
    }

    function trasport(){
        if(campos[4].value.length < 3)
        {
            setError(4);
        }
        else
        {
            removeError(4);
            
        }
    }

    function id_pacote(){
        if(campos[5].value.length < 11)
        {
            setError(5);
        }
        else
        {
            removeError(5);
            
        }
    }

    function inicio(){
        if(campos[6].value.length < 12)
        {
            setError(6);
        }
        else
        {
            removeError(6);
            
        }
    }
    
$("#cpf").mask("999.999.999-99");



