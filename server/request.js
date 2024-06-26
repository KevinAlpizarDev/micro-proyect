const apiUrl = "http://localhost:3000/api/task/";

//GET
export const getData = async () => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en la función getData:", error);
        throw error;
    }
};

//POST
export const postData = async (user, mail, pwd) => {
    try {
        const apiUrl = 'http://localhost:3000/api/task/';

        const response = await fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: user,
                mail: mail,
                pwd: pwd,

            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Respuesta del servidor:", data);
        return data;

    } catch (error) {
        console.error("Error en la función postData:", error);
        throw error;
    }
};

//PUT
export const putData = async (obj) => {
    try {
        const apiUrl = 'http://localhost:3000/api/task/';

        const response = await fetch(apiUrl, {
            method: "PUT",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en la función putData:", error);
        throw error;
    }
};

// DELETE
export const deleteData = async (id) => {
    try {
        const apiUrl = 'http://localhost:3000/api/task/';

        const response = await fetch(apiUrl + id, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error en la función deleteData:", error);
        throw error;
    }
};
