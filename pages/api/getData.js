import connection from "../../databases/config/connection";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const dataTask = await connection("crm_tasks");

  res.status(200);
  var response = [];

  await Promise.all(
    await dataTask.map(async (element) => {
      var detail = [];
      var splitDetail = element.labels.split(",");
      await Promise.all(
        splitDetail.map(async (val, index) => {
          const getDetail = await connection("crm_labels")
            .where({ id: val })
            .first();

          const resDetail = await getDetail;
          detail.push(resDetail);
        })
      );
      console.log(detail);

      response.push({
        labels: detail,
        id: element.id,
        title: element.title,
        description: element.description,
        status: element.status,
      });
    })
  );

  res.json({
    message: "Task Successfully Fetched",
    data: response,
  });
}
