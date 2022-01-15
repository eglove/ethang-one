import { PrismaClient } from '@prisma/client';
const database = new PrismaClient();

const getJokes = (): Array<{ content: string; name: string }> => {
  // shout-out to https://icanhazdadjoke.com/

  return [
    {
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
      name: 'Road worker',
    },
    {
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
      name: 'Frisbee',
    },
    {
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
      name: 'Trees',
    },
    {
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
      name: 'Skeletons',
    },
    {
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
      name: 'Hippos',
    },
    {
      content: `What did one plate say to the other plate? Dinner is on me!`,
      name: 'Dinner',
    },
    {
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
      name: 'Elevator',
    },
  ];
};

async function seed(): Promise<void> {
  const kody = await database.user.create({
    data: {
      // this is a hashed version of "twixrox"
      passwordHash:
        '$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u',
      username: 'kody',
    },
  });

  await Promise.all(
    getJokes().map(joke => {
      const data = { jokesterId: kody.id, ...joke };
      return database.joke.create({ data });
    })
  );
}

seed().catch((error: Error) => {
  console.error(error);
});
