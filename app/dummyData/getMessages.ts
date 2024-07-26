import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import { Messages } from "@/app/servers/[serverId]/channels/[channelId]/page";

export function getMessages(): Messages[] {
  const data = [...Array(faker.number.int({ min: 7, max: 25 }))]
    .map(() => {
      let user = faker.internet.userName();
      let avatarUrl = faker.image.avatar();

      return [...Array(faker.number.int({ min: 1, max: 4 }))].map(() => ({
        id: faker.database.mongodbObjectId(),
        user,
        avatarUrl,
        date: format(new Date(faker.date.past()), "MM/dd/yyyy"),
        text: faker.lorem.sentences(3),
      }));
    })
    .flat();

  return data;
}
