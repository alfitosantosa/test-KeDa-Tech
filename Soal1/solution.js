"use strict";

/**
 * Q1. Mengurutkan array angka dari terbesar ke terkecil secara manual
 * (bubble sort, tanpa Array.prototype.sort).
 *
 * Kompleksitas: O(n^2) worst/average, O(n) best (array sudah terurut).
 * Tidak memutasi array input.
 *
 * @param {number[]} numbers
 * @returns {number[]}
 */
function sortDescending(numbers) {
  const result = [...numbers];

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] < result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        swapped = true;
      }
    }

    // Sudah tidak ada pertukaran: array pasti terurut, hentikan lebih awal.
    if (!swapped) break;
  }

  return result;
}

function sortAscending(numbers) {
  const result = [...numbers];

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
}

/**
 * Q2. Jumlah maksimum subarray dengan panjang tetap `length`
 * menggunakan sliding window.
 *
 * Kompleksitas: O(n) waktu, O(1) ruang tambahan.
 *
 * @param {number[]} numbers
 * @param {number} length
 * @returns {number|null} null jika length tidak valid
 */
function maxSubarraySum(numbers, length) {
  if (!Number.isInteger(length) || length <= 0 || length > numbers.length) {
    return null;
  }

  let windowSum = 0;
  for (let i = 0; i < length; i++) {
    windowSum += numbers[i];
  }

  let maxSum = windowSum;

  for (let i = length; i < numbers.length; i++) {
    // Geser jendela: buang elemen paling kiri, tambahkan elemen baru.
    windowSum += numbers[i] - numbers[i - length];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum;
}

/**
 * Q3. Menjumlahkan semua bilangan genap pada nested object
 * (array di dalam object juga ditelusuri).
 *
 * Kompleksitas: O(n) terhadap jumlah node, O(d) ruang stack rekursi.
 *
 * @param {unknown} value
 * @returns {number}
 */
function sumEvenNumbers(value) {
  if (typeof value === "number") {
    return Number.isInteger(value) && value % 2 === 0 ? value : 0;
  }

  // null juga bertipe 'object', jadi harus dicek lebih dulu.
  if (value === null || typeof value !== "object") {
    return 0;
  }

  let total = 0;
  for (const child of Object.values(value)) {
    total += sumEvenNumbers(child);
  }
  return total;
}

module.exports = { sortDescending, maxSubarraySum, sumEvenNumbers };
