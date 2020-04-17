import axios from 'axios'

export async function location(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        return response.data
    }
    catch(error) {
        console.log(error)
        return false
    }
}