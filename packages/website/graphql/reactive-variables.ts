import {makeVariablePersisted} from '@ethang-one/apollo';

export const isUserAdminVariable = makeVariablePersisted<boolean>(
  false,
  'isUserAdmin',
);
export const userIdVariable = makeVariablePersisted<string | undefined>(
  null,
  'userId',
);

export const reactiveVariableFields = {
  isLoggedIn: {
    merge: true,
    read(): string | undefined {
      return userIdVariable();
    },
  },
  isUserAdmin: {
    merge: true,
    read(): boolean {
      return isUserAdminVariable();
    },
  },
};
