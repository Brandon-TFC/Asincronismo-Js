export function delay(time, message) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(message);
      }, time);
    });
  }