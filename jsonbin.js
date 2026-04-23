//mod realizado
async function cargarDatosOld(jsonbinId) {
    try {
        //const response = await fetch("https://api.jsonbin.io/v3/b/69c3ea63c3097a1dd55b9f61/latest", {
        console.log("https://api.jsonbin.io/v3/b/"+jsonbinId+"/latest");
        const response = await fetch(`/api/datos?id=${jsonbinId}`);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const data = await response.json();

        // Mostrar datos en pantalla
        document.getElementById("resultado").textContent =
            JSON.stringify(data.record, null, 2);

        console.log("Datos:", data.record);
        return data.record;

    } catch (error) {
        console.error(error);
        return {};
    }
}
async function cargarDatos(jsonbinId) {
    try {
        console.log("https://api.jsonbin.io/v3/b/"+jsonbinId+"/latest");

        const response = await fetch("https://api.jsonbin.io/v3/b/"+jsonbinId+"/latest", {
            method: "GET",
            headers: {
                "X-Access-Key": process.NEXT_PUBLIC_env.JSONBIN_KEY,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }

        const data = await response.json();

        console.log("Datos:", data.record);

        // 🔥 DEVOLVER DATOS
        return data.record;

    } catch (error) {
        console.error(error);

        // ⚠️ importante devolver algo para evitar errores
        return {};
    }
}
