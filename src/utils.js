export const fetchLocalStorage = (item) => {
  let listObject = [];
  if (
    localStorage.getItem(item) !== null
      && localStorage.getItem(item) !== 'undefined'
  ) {
    listObject = JSON.parse(localStorage.getItem(item));
  } else if (item === 'Projects') {
    listObject = ['Default Project'];
  } else {
    listObject = [];
  }
  return listObject;
};

export const saveLocalStorage = (key, itemsList) => {
  localStorage.setItem(key, JSON.stringify(itemsList));
};

export function urlDashedName(name) {
  return name.split(/\s+/).join('-');
}

export function urlUndashedName(name) {
  return name.split(/-+/).join(' ');
}
