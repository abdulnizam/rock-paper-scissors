export const getRandomWeapon = (weapons) => {
  return weapons[ weapons.length * Math.random() << 0];
};

export const keys = (object) => {
  return Object.keys(object);
};

export const values = (object) => {
  return Object.values(object);
};

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};
