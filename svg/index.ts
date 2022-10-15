import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.get("/" , (req , res) => {
    res.setHeader("Content-Type", "image/svg+xml")
    res.send(
        `
        <svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
            <text y="15" text-rendering="geometricPrecision">Geometric precision</text>
        </svg>
        `
    )
})

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Successfully started the express server on port ${PORT}`)
})
