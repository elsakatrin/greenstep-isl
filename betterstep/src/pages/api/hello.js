// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dataService from "./dataService"

export default async function handler(req, res) {
  const siteData = await dataService.getAllSites()
  res.status(200).json(
    { data: siteData }
  )
}
