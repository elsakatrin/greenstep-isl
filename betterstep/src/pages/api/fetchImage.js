// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dataService from "./dataService"
import { imageService } from "./imageService"

export default async function handler(req, res) {
  const image = await imageService.downloadImage(req.name,req.buckename)
  res.status(200).json(
    { data: image }
  )
}
