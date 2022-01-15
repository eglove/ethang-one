import { ActionFunction, redirect } from 'remix';

import { db as database } from '../../utils/db.server';

export const action: ActionFunction = async ({
  request,
}): Promise<Response> => {
  const form = await request.formData();
  const content = form.get('content');
  const name = form.get('name');

  if (typeof content !== 'string' || typeof name !== 'string') {
    throw new TypeError('Invalid input.');
  }

  const joke = await database.joke.create({
    data: { content, name },
  });

  return redirect(`/jokes/${joke.id}`);
};

const NewJoke = (): JSX.Element => {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewJoke;
