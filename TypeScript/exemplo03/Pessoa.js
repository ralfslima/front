var Pessoa = /** @class */ (function () {
    // Construtor
    function Pessoa() {
        console.log("Método construtor");
    }
    // Método
    Pessoa.prototype.metodo = function () {
        console.log("Método simples");
    };
    return Pessoa;
}());
