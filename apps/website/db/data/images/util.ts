type Directory = 'blog' | 'person' | 'root' | 'school' | 'technology';

export const getImage = (directory: Directory, fileName: string): string => {
  if (directory === 'root') {
    return `/images/${fileName}`;
  }

  return `/images/${directory}/${fileName}`;
};

export const getBlogImage = (fileName: string): string => {
  return getImage('blog', fileName);
};

export const getPersonImage = (fileName: string): string => {
  return getImage('person', fileName);
};

export const getRootImage = (fileName: string): string => {
  return getImage('root', fileName);
};

export const getSchoolImage = (fileName: string): string => {
  return getImage('school', fileName);
};

export const getTechnologyImage = (fileName: string): string => {
  return getImage('technology', fileName);
};
