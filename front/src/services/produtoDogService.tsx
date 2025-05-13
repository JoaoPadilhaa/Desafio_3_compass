import axios from "axios";

const apiUrl = "http://localhost:3001/produtos-cachorro";

export async function getProdutosDog () {
    try {
        const response = await axios.get(apiUrl);
        return response;
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw error;
    }
}