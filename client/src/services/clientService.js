const baseUrl = 'http://localhost:8080/clients';

export const getAll = async () => {
    const response = await fetch('http://localhost:8080/clients');
    const result = await response.json();

    return result.users;
};

export const getOne = async (clientId) => {
    const response = await fetch(`${baseUrl}/${clientId}`);
    const result = await response.json();

    return result.user;
};

export const create = async (clientData) => {
    const { firstName, secondName, lastName, idCardNumber, ...data } = clientData;


    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};

export const remove = async (clientId) => {
    const response = await fetch(`${baseUrl}/${clientId}`, {
        method: 'DELETE'
    });

    const result = await response.json();

    return result;
};

export const update = async (clientId, clientData) => {
    const { firstName, secondName, familyName, idCardNumber, ...data } = clientData;
    
    const response = await fetch(`${baseUrl}/${clientId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result.user;
};