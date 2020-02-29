$(document).ready(function(){
    
    //Variável
    var _container = new Object();
    var _fileReader = new FileReader();

    //Objetos
    _container = {
        formulario : $(' [data-container-upload="formulario"] '),
        inputfile :  $(' [data-container-upload="inputfile"] '),
        inputbtn : $(' [data-container-upload="inputbtn"] '),
        miniatura : $(' [data-container-upload="miniatura"] ')
    };

    //Função
    function inputAlterado(callback){
        _container.inputfile.on("change", function(){
            callback();
        });
    }

    function pegaArquivo(){
        return _container.inputfile.prop('files');
    }

    function carregaFim(callback){
        _fileReader.onload = function (e) {
            callback(e.target);
        };

    }

    //Execução
    inputAlterado (function(){

        //Variável
        var _imagem = pegaArquivo();

        //Modelo
        if(_imagem.length > 0){
            carregaFim(function(e){
                _container.miniatura.attr('src', e.result).fadeIn(0)
            });
            _fileReader.readAsDataURL (_imagem[0]);
        }

    });
});
