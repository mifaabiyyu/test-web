import connection from "../../databases/config/connection";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const dataDetail = await connection("crm_labels");

  res.status(200);

  res.json({
    message: "Labels Successfully Fetched",
    data: dataDetail,
  });
}
