// Задача 1

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {
      min: 0,
      max: 0,
      avg: 0,
    };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return {
    min,
    max,
    avg,
  };
}


// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}


// Задача 3

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }

  let maxWorkerResult = func(...arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i += 1) {
    const workerResult = func(...arrOfArr[i]);

    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }

  return maxWorkerResult;
}