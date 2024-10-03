const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: A atividade é fundamental para a promoção da saúde e bem-estar, desempenhando um papel crucial na prevenção de diabetes e obesidades. Além da melhora da condição física, ela também  influência positivamente a saúde mental, reduzindo o estresse, a ansiedade e os sintomas da depressão. Como a atividade física pode impactar a saúde mental ?
        alternativas: [
            {
                texto: "Contribui para a redução do estresse e melhora o humor",
               
            {
                texto: "Ajuda a aumentar a capacidade de concentração e o bem-estar psicológico ",
                
            }
        ]
    },
    {
        enunciado: "manter-se ativo físicamente ajuda fortalecer o sistema cardiovascular, muscular e esquelético, promovent=do maior longevidade e qualidede de vida. Com qual frequência, você pratica atividedes físicas ?",
        alternativas: [
            {
                texto: "SIm, prático com frequência ",
               
            {
                texto: "Não prático.",
                
            }
        ]
    },
    {
        enunciado: "O sedentarismo é a falta de atividade física regular, caracterizado por um estilo de vida que envolve longos períodos de inatividade. Esse  comportamento pode ter sérias consequências para a saúde física e mantal. O que pode ser feito para evitar o sedentarismo ?",
        alternativas: [
            {
                texto: "Fazer atividade físicas.",
               
            },
            {
                texto: "Ficar jogando video game em casa.",
                
            }
        ]
    },
    {
        enunciado: "atividades físicas em famíla é uma ótima maneira de  promover a saúde e fortalecer os laços entre os membros. Qual atividade física em família você acha que seia mais divertida e motivadora para todos ?",
        alternativas: [
            {
                texto: "Caminhadas ou trilhas, jogos em ar livre entre outros.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Não ter atividades físicas em famílias.",
                
            }
        ]
    },
    {
        enunciado: "Incorporar atividades físicas à rotina diária traz uma série de benefícios que melhoram a qualidade de vida e promovem um estilo de vida mais saudável. A prática regular  de exercicios ajuda a aumentr a sua energia. Pode parecer contraditório, mas quanto mais você terá para enfrentar o dia a dia e não é só isso, exercícios ajudam a dormir melhor, o que significa que você acordará se sentindo mais renovado e pronto para novos desafios",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
               
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();