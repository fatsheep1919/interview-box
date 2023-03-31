function mayFailCall(fun) {
  return function(...args) {
    let sec = new Date().getSeconds();
    if (sec % 2 === 0) {
      throw new Error('Unknown Error');
    }
    return fun(...args);
  }
}

function waitToCall(fun, msec, callback) {
  if (fun && typeof fun === 'function') {
    setTimeout(() => {
      const re = fun();
      if (re && typeof re === 'object' && typeof re.then === 'function') {
        re.then(() => callback?.());
      } else {
        callback?.();
      }
    }, msec)
  }
}

export {
  mayFailCall,
  waitToCall,
}
