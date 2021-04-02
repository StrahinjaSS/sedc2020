export async function getEndpoint(url) {
    const response = await fetch(url, ({ method: 'GET' }));
    const data = await response.json();
    console.log(data);
    console.log(url);
    return data;
};

