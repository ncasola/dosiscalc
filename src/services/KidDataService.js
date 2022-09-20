class KidDataService {
  getAll() {
    return new Promise(function (resolve) {
      let values = [],
        keys = Object.keys(localStorage).filter(function (str) {
          return str.startsWith("_");
        }),
        i = keys.length;
      while (i--) {
        let json_data = localStorage.getItem(keys[i]);
        values.push(JSON.parse(json_data));
      }
      resolve({ data: values });
    });
  }

  get(id) {
    return new Promise(function (resolve) {
      let result = localStorage.getItem(id);
      resolve({ data: JSON.parse(result) });
    });
  }

  create(id, data) {
    return new Promise(function (resolve) {
      localStorage.setItem(id, JSON.stringify(data));
      resolve({ data: data });
    });
  }

  update(id, data) {
    return new Promise(function (resolve) {
      localStorage.setItem(id, JSON.stringify(data));
      resolve({ data: data });
    });
  }

  delete(id) {
    return new Promise(function (resolve) {
      localStorage.removeItem(id);
      resolve({ data: "done" });
    });
  }

  deleteAll() {
    return new Promise(function (resolve) {
      localStorage.clear();
      resolve({ data: "done" });
    });
  }
}

export default new KidDataService();
