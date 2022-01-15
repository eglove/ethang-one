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
  await Promise.all(
    getJokes().map(joke => {
      return database.joke.create({ data: joke });
    })
  );
}

seed().catch((error: Error) => {
  console.error(error);
});
