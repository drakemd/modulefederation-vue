import data from './mockData.json'

const mock = (success, timeout = 1000) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(data);
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    });
  }
  
export const getData = async () => {
    try {
        let res = await mock(true, 1000);
        return res;
    } catch (e) {
        console.log(e.message);
    }
}

export const getDataError = async () => {
  try {
      let res = await mock(false, 1000);
      return res;
  } catch (e) {
      console.log(e.message);
  }
}