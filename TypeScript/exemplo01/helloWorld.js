var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.mensagem = function () {
        document.write("Aprendendo TypeScript");
    };
    HelloWorld.prototype.somar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    HelloWorld.prototype.situacao = function (media) {
        return media >= 7 ? "Aprovado(a)" : "Reprovado(a)";
    };
    HelloWorld.prototype.login = function (email, senha) {
        if (email == "ralf.lima@gmail.com" && senha == "123") {
            return true;
        }
        else {
            return false;
        }
    };
    HelloWorld.prototype.funcaoAleatoria = function () { };
    return HelloWorld;
}());
