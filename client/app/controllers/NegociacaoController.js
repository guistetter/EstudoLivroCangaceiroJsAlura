class NegociacaoController {

  constructor(){

    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adiciona(event){
    event.preventDefault();
    console.log("nova");
    //retorn string console.log(typeof(inputData.value));
    console.log(this._inputData.value);
    console.log(parseInt(this._inputQuantidade.value));
    console.log(parseFloat(this._inputValor.value));
    console.log(typeof(this._inputData.value))

    //let data = new Date(this._inputData.value.split('-'));;
    let data = new Date(...this._inputData.value.split('-')
    .map((item, indice) => item - indice % 2)
    );
    console.log(data);

    let negociacao = new Negociacao(
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );

    console.log(negociacao);
    console.log("nova");
    console.log("nova" + negociacao.data);
  }
}