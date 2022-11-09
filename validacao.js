    const form = document.getElementById("form");
    const campos =document.querySelectorAll('.required');
    const spans = document.querySelectorAll('.requerimento');

    form.addEventListener('submit',(Event) => {
        Event.preventDefault();
        namevalidate();
        placa();
        rota();
        trasport();
        id_pacote();
        inicio();
        termino();
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

    function termino(){
        if(campos[7].value.length < 12)
        {
            setError(7);
        }
        else
        {
            removeError(7);
            
        }
    }
$("#cpf").mask("999.999.999-99");



