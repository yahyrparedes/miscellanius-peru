const fetch = require('node-fetch');

const commonRepository = {
    async getEndpoint(url, number) {
        const response = await fetch(url + number)
        return await response.json()
    }
}

module.exports = commonRepository
