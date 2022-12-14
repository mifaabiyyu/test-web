import connection from "../../../databases/config/connection";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { id } = req.query;

  const showData = await connection("crm_labels").where({ id }).first();

  res.status(200);
  res.json({
    message: "Data fetched Successfully !",
    data: showData,
  });
}
