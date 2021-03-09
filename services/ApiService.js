const url = 'http://localhost:3002/api/';

export const ApiService = {
    async get(endPoint){
        return fetch(`${url}${endPoint}`).then(response => response.json())
    },
    async post(endPoint, data){
        return fetch(`${url}${endPoint}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json());
    },
    async delete(endPoint){
        return fetch(`${url}${endPoint}`, {
            method: 'DELETE',
        }).then(response => response.json());
    }
}