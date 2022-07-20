const app = require("express")();

app.get("/", (req, res) => res.json({ message: "Docker is easy 🐳" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);

// run in docker with port forwarding to 8080
// docker run -p local_port:container_port <IMAGE_ID>
