export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${id}/latest`, {
            method: "GET",
            headers: {
                "X-Access-Key": process.env.JSONBIN_KEY,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        res.status(200).json(data.record);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener datos" });
    }
}
