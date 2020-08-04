import express from "express";
import db from "./database/connection";
import convertHourtoMinutes from "./utils/convertHourtoMinutes";

const routes = express();
interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}
routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;
  // console.log(data)

  const trx = await db.transaction();

  try {
    const insertedUserIds = await trx("users").insert({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const user_id = insertedUserIds[0];

    const insertedClassesIds = await trx("classes").insert({
      subject,
      cost,
      user_id,
    });

    const class_id = insertedClassesIds[0];

    const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
      return {
        class_id,
        week_day: scheduleItem.week_day,
        from: convertHourtoMinutes(scheduleItem.from),
        to: convertHourtoMinutes(scheduleItem.to),
      };
    });

    await trx("class_schedule").insert(classSchedule);

    await trx.commit();

    return response.status(201).send();
  } catch (error) {
    await trx.rollback();

    console.log(error);
    return response.status(400).json({
      error: "Erro inesperado",
    });
  }
});

export default routes;
