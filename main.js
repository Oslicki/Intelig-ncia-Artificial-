const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a importância da água para a vida na Terra?",
        alternativas: [
            {
                texto: "A água é essencial para todos os organismos vivos, pois é fundamental para processos biológicos, como a digestão, o transporte de nutrientes e a regulação da temperatura.",
                afirmacao: "Correto!"
            },
            {
                texto: " A água não é importante para a vida na Terra; a maioria dos organismos pode viver sem ela.",
                afirmacao: "incorreto!"
            }
        ]
    },
    {
        enunciado: "Como a água é distribuída no planeta?",
        alternativas: [
            {
                texto: "A água está distribuída principalmente em oceanos, com pequenas quantidades em lagos, rios, geleiras e águas subterrâneas.",
                afirmacao: "Correto!"
            },
            {
                texto: "A água está distribuída igualmente em todos os lugares do planeta e é encontrada principalmente em desertos e montanhas.",
                afirmacao: "Incorreto!"
            }
        ]
    },
    {
        enunciado: "Como as mudanças climáticas estão impactando os recursos hídricos?",
        alternativas: [
            {
                texto: "As mudanças climáticas não têm impacto significativo sobre os recursos hídricos e apenas afetam o clima.",
                afirmacao: "Incorreto!"
            },
            {
                texto: "As mudanças climáticas podem causar alterações nos padrões de precipitação, aumentar a frequência de eventos extremos e afetar a disponibilidade de água em várias regiões.",
                afirmacao: "Correto!"
            }
        ]
    },
    {
        enunciado: "Como a tecnologia de dessalinização funciona e quais são suas vantagens e desvantagens?",
        alternativas: [
            {
                texto: " A dessalinização remove o sal da água do mar através de processos como a osmose reversa. Vantagens incluem a criação de água potável a partir de água do mar, e desvantagens incluem o alto custo e impacto ambiental dos resíduos.",
                afirmacao: "Correto!"
            },
            {
                texto: "Dessalinização adiciona sal à água doce para torná-la mais saborosa e acessível. É uma tecnologia barata e não tem desvantagens.",
                afirmacao: "Incorreto!"
            }
        ]
    },
    {
        enunciado: "Qual é o impacto das atividades agrícolas sobre os recursos hídricos?",
        alternativas: [
            {
                texto: "Atividades agrícolas podem causar poluição de águas superficiais e subterrâneas por meio de escoamento de fertilizantes e pesticidas, além de exaurir os recursos hídricos devido ao uso intensivo de água para irrigação, afetando a sustentabilidade e a qualidade dos recursos hídricos.",
                afirmacao: "Correto!"
            },
            {
                texto: "As atividades agrícolas geralmente melhoram a qualidade dos recursos hídricos e não têm efeitos negativos significativos sobre a disponibilidade ou a pureza da água.",
                afirmacao: "Incorreto!"
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
    caixaPerguntas.textContent = "RESPOSTAS";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();