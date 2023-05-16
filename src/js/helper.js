//
import { TIME_OUT_SECOND } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJSon = async function (url) {
  try {
    const fetchPromise = fetch(url);

    const res = await Promise.race([fetchPromise, timeout(TIME_OUT_SECOND)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};
