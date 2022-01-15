import { ActionFunction, redirect, useActionData } from 'remix';

import { db as database } from '../../utils/db.server';
import { requireUserId } from '../../utils/session.server';

const validateJokeName = (name: string): string | undefined => {
  if (name.length < 3) {
    return 'Joke name must be at least 3 characters long.';
  }
};

const validateJokeContent = (content: string): string | undefined => {
  if (content.length < 10) {
    return 'Joke content must be at least 10 characters long.';
  }
};

type ActionResponse = {
  fieldErrors?: {
    content?: string;
    name?: string;
  };
  fields?: {
    content?: string;
    name?: string;
  };
  formError?: string;
};
export const action: ActionFunction = async ({
  request,
}): Promise<ActionResponse | Response> => {
  const userId = await requireUserId(request);

  const form = await request.formData();
  const content = form.get('content');
  const name = form.get('name');

  if (typeof content !== 'string' || typeof name !== 'string') {
    return { formError: 'Fill out both fields!' };
  }

  const fieldErrors = {
    content: validateJokeContent(content),
    name: validateJokeName(name),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return { fieldErrors, fields: { content, name } };
  }

  const joke = await database.joke.create({
    data: { content, jokesterId: userId, name },
    select: { id: true },
  });

  return redirect(`/jokes/${joke.id}`);
};

const NewJoke = (): JSX.Element => {
  const actionData = useActionData<ActionResponse>();

  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name:{' '}
            <input
              type="text"
              defaultValue={actionData?.fields?.name}
              name="name"
              aria-invalid={Boolean(actionData?.fieldErrors?.name) || undefined}
              aria-describedby={
                typeof actionData?.fieldErrors?.name === 'string'
                  ? 'name-error'
                  : undefined
              }
            />
          </label>
          {typeof actionData?.fieldErrors?.name === 'string' ? (
            <p className="form-validation-error" role="alert" id="name-error">
              {actionData.fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label>
            Content:{' '}
            <textarea
              defaultValue={actionData?.fields?.content}
              name="content"
              aria-invalid={
                Boolean(actionData?.fieldErrors?.content) || undefined
              }
              aria-describedby={
                typeof actionData?.fieldErrors?.content === 'string'
                  ? 'content-error'
                  : undefined
              }
            />
          </label>
          {typeof actionData?.fieldErrors?.content === 'string' ? (
            <p
              className="form-validation-error"
              role="alert"
              id="content-error"
            >
              {actionData.fieldErrors.content}
            </p>
          ) : null}
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
