const { test, describe } = require("node:test");
const assert = require("node:assert/strict");

const {
  sortDescending,
  maxSubarraySum,
  sumEvenNumbers,
} = require("./solution");

describe("sortDescending (Q1)", () => {
  test("mengurutkan contoh soal dari terbesar ke terkecil", () => {
    assert.deepEqual(
      sortDescending([1, 2, 4, 3, 5, 3, 2, 1]),
      [5, 4, 3, 3, 2, 2, 1, 1],
    );
  });

  test("array kosong tetap kosong", () => {
    assert.deepEqual(sortDescending([]), []);
  });

  test("satu elemen tetap sama", () => {
    assert.deepEqual(sortDescending([7]), [7]);
  });

  test("array yang sudah terurut tidak berubah", () => {
    assert.deepEqual(sortDescending([9, 5, 3, 1]), [9, 5, 3, 1]);
  });

  test("tidak memutasi array input", () => {
    const input = [1, 2, 3];
    sortDescending(input);
    assert.deepEqual(input, [1, 2, 3]);
  });
});

describe("maxSubarraySum (Q2)", () => {
  test("contoh 1: [100, 200, 300, 400], k=2 -> 700", () => {
    assert.equal(maxSubarraySum([100, 200, 300, 400], 2), 700);
  });

  test("contoh 2: [1, 4, 2, 10, 23, 3, 1, 0, 20], k=4 -> 39", () => {
    assert.equal(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
  });

  test("contoh 3: [-3, 4, 0, -2, 6, -1], k=2 -> 5", () => {
    assert.equal(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), 5);
  });

  test("k sama dengan panjang array menjumlahkan semua elemen", () => {
    assert.equal(maxSubarraySum([1, 2, 3, 4], 4), 10);
  });

  test("k lebih besar dari panjang array mengembalikan null", () => {
    assert.equal(maxSubarraySum([1, 2], 3), null);
  });

  test("semua nilai negatif tetap menghasilkan nilai maksimum yang benar", () => {
    assert.equal(maxSubarraySum([-5, -2, -8, -1], 2), -7);
  });

  test("k = 1 mengembalikan elemen terbesar", () => {
    assert.equal(maxSubarraySum([-3, 7, 2], 1), 7);
  });

  test("k <= 0 atau array kosong mengembalikan null", () => {
    assert.equal(maxSubarraySum([1, 2], 0), null);
    assert.equal(maxSubarraySum([], 1), null);
  });
});

describe("sumEvenNumbers (Q3)", () => {
  test("contoh 1 menghasilkan 6", () => {
    const input = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup",
        },
      },
    };
    assert.equal(sumEvenNumbers(input), 6);
  });

  test("contoh 2 menghasilkan 12", () => {
    const input = {
      a: 2,
      b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
      c: { c: { c: 2 }, cc: "ball", ccc: 5 },
      d: 1,
      e: { e: { e: 4 }, ee: "car", aa: "kuda" },
    };
    assert.equal(sumEvenNumbers(input), 12);
  });

  test("objek kosong menghasilkan 0", () => {
    assert.equal(sumEvenNumbers({}), 0);
  });

  test("mengabaikan string, boolean, null, dan angka ganjil", () => {
    assert.equal(sumEvenNumbers({ a: 3, b: true, c: "8", d: null, e: 4 }), 4);
  });

  test("bilangan genap negatif ikut dijumlahkan", () => {
    assert.equal(sumEvenNumbers({ a: -4, b: 3, c: { d: -2 } }), -6);
  });

  test("array di dalam objek ikut ditelusuri", () => {
    assert.equal(sumEvenNumbers({ a: [2, [4, "x", { n: 6 }]], b: 8 }), 20);
  });
});
