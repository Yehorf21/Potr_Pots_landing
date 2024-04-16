export const simplifyClasses = (component: string, name: string, i: number) => {
  const initialName = component + name;

  return initialName + ' ' + initialName + '--' + (i + 1);
};

export const initialInput = {
  name: '',
  email: '',
  message: '',
}
