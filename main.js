import { criarGráfico, getCSS, incluirTexto} from "./common.js"

async function redesSociaisFavoritasMinhaEscola() {
    const (dadosLocaisString) = localStorage.getItem('respostaRedesSociais')
    if (dadosLocaisString) {
        const dadosLocais = JSON.parse(dadosLocaisString)
        processarDados(dadosLocais)
    } else {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=rSe23zaQC&gOvWgFJbdtPaqh7ews05hQmusYOeqdorTRN8C25vVV3'
        const res = await fetch(url)
        const dados = await res.json()
        localStorage.setItem('respostaRedasSociais', JSON.stringify(dados))
        processarDados(dados)
    }
}

function processarDados(dados) {
    const
}