export const getParent = (parentString: string) => {
  const data = parentString.split('__');
  return {
    title: data[0],
    slug: data[1],
  };
};
