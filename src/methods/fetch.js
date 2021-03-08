import config from "../config.js";

export default async function fetch(methode, path, data = null, options = {}) {
    const parameters = {
        method: methode,
        mode: 'cors',
        ...options
    };

    if (data != null) {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        parameters.body = formData;
        parameters.header = {
            'Content-Type':'application/x-www-form-urlencoded'
        };
    }

    const response = await window.fetch(`${config.backendApiRoot}${path}`, parameters);

    let json;
    try {
        json = await response.json();
    } catch (e) {
        throw {
            message: 'Failed to parse JSON from response.',
        };
    }

    if (response.status < 200 || response.status >= 300) {
        throw json;
    }

    return json;
}
