export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false });
  }

  const { user, pass } = req.body;

  try {
    const response = await fetch("https://api.jsonbin.io/v3/b/69c63c46aa77b81da924fc59/latest", {
      headers: {
        "X-Access-Key": process.env.JSONBIN_KEY
      }
    });

    const data = await response.json();
    const usuarios = data.record.usuarios;

    const encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if (encontrado) {
      return res.status(200).json({ ok: true });
    } else {
      return res.status(401).json({ ok: false });
    }

  } catch (error) {
    return res.status(500).json({ ok: false });
  }
}
