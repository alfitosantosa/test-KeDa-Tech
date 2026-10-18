# Soal Test 1 — KeDa Tech

Jawaban tiga soal logika JavaScript beserta unit test, tanpa dependency eksternal.

| Soal | Fungsi | Teknik | Kompleksitas |
|------|--------|--------|--------------|
| 1 | `sortDescending` | Bubble sort manual | O(n²), best O(n) |
| 2 | `maxSubarraySum` | Sliding window (jendela tetap) | O(n) waktu, O(1) ruang |
| 3 | `sumEvenNumbers` | Rekursi | O(n) node, O(d) stack |

## Struktur

```
.
├── solution.js        # implementasi ketiga fungsi
├── solution.test.js   # 19 unit test (node:test)
├── package.json
└── README.md
```

## Cara menjalankan

Node.js 18+ (test runner bawaan, tanpa `npm install`):

```bash
npm test
# atau
node --test
```

Bun juga bisa:

```bash
bun test
```

Output yang diharapkan:

```
19 pass
0 fail
```

---

## Soal 1 — Urutkan angka dari terbesar ke terkecil (manual)

**Input:** `[1, 2, 4, 3, 5, 3, 2, 1]`
**Output:** `[5, 4, 3, 3, 2, 2, 1, 1]`

```js
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

    if (!swapped) break;
  }

  return result;
}
```

### Cara kerja (bubble sort)

1. Bandingkan dua elemen bersebelahan.
2. Kalau elemen kiri **lebih kecil** dari kanan, tukar — sehingga nilai besar "menggelembung" ke depan (kiri).
3. Satu putaran luar menempatkan satu nilai terbesar berikutnya pada posisi finalnya.
4. Putaran dalam dipersingkat `- i` karena `i` elemen terdepan sudah pasti benar.
5. Kalau satu putaran penuh tidak ada pertukaran (`swapped === false`), array sudah terurut → berhenti lebih awal.

Contoh satu putaran pertama pada `[1, 2, 4, 3, 5, 3, 2, 1]`:

```
1<2 tukar -> [2,1,4,3,5,3,2,1]
1<4 tukar -> [2,4,1,3,5,3,2,1]
1<3 tukar -> [2,4,3,1,5,3,2,1]
1<5 tukar -> [2,4,3,5,1,3,2,1]
1<3 tukar -> [2,4,3,5,3,1,2,1]
1<2 tukar -> [2,4,3,5,3,2,1,1]
1<1 tidak -> [2,4,3,5,3,2,1,1]  (5 sudah di posisi final)
```

### Fundamental yang diuji

- **Perbandingan & pertukaran (swap)** memakai variabel sementara. Ini fundamental manipulasi array.
- **Loop bersarang** dan hubungan indeks `j` dengan `j + 1`.
- **Kompleksitas:** putaran dalam ± n, putaran luar ± n → O(n²). Dengan flag `swapped`, array yang sudah terurut hanya butuh satu putaran → O(n).
- **Stability:** bubble sort stabil (nilai sama tidak ditukar).
- **Immutability:** `[...numbers]` menyalin array agar input tidak berubah — praktik fungsi murni.
- Larangan soal adalah **fungsi sort bawaan** (`Array.prototype.sort`), bukan larangan memakai operator/method array lain.

---

## Soal 2 — Jumlah maksimum subarray dengan panjang tertentu

**Input:** `([100, 200, 300, 400], 2)` → **700** (`300 + 400`)
**Input:** `([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)` → **39** (`4 + 2 + 10 + 23`)
**Input:** `([-3, 4, 0, -2, 6, -1], 2)` → **5** (`6 + -1`)

```js
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
    windowSum += numbers[i] - numbers[i - length];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return maxSum;
}
```

### Cara kerja (sliding window)

1. Hitung jumlah jendela pertama: elemen indeks `0..length-1`.
2. Simpan sebagai `maxSum`.
3. Geser jendela satu langkah: **tambah** elemen baru di kanan, **kurangi** elemen lama di kiri.
4. Bandingkan jumlah jendela baru dengan `maxSum`.

Ilustrasi `([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)`:

| Jendela | Elemen | Jumlah | Max |
|---------|--------|--------|-----|
| awal | 1, 4, 2, 10 | 17 | 17 |
| geser | 4, 2, 10, 23 | 39 | 39 |
| geser | 2, 10, 23, 3 | 38 | 39 |
| geser | 10, 23, 3, 1 | 37 | 39 |
| geser | 23, 3, 1, 0 | 27 | 39 |
| geser | 3, 1, 0, 20 | 24 | 39 |

### Kenapa sliding window, bukan dua loop?

Brute force menjumlahkan ulang setiap jendela → O(n · k). Sliding window hanya menambah dan mengurangi satu elemen per geseran → **O(n)**. Ini pola interview yang sangat sering muncul: *"fixed-size sliding window"*.

### Detail penting

- **Inisialisasi `maxSum` dari jendela pertama, bukan `0`.** Kalau semua angka negatif, memulai dari `0` akan salah (contoh `[-5, -2, -8, -1]`, k=2 → jawaban `-7`, bukan `0`).
- **Validasi:** `length > numbers.length` → `null`; `length <= 0` atau bukan integer → `null`.
- Jendela hanya bergeser selama `i < numbers.length`, jadi tidak ada indeks keluar batas.
- **Kompleksitas:** O(n) waktu, O(1) ruang tambahan.

---

## Soal 3 — Jumlah semua bilangan genap dalam nested object

**Input 1** → **6** (`2 + 2 + 2`)
**Input 2** → **12** (`2 + 2 + 2 + 2 + 4`)

```js
function sumEvenNumbers(value) {
  if (typeof value === 'number') {
    return Number.isInteger(value) && value % 2 === 0 ? value : 0;
  }

  if (value === null || typeof value !== 'object') {
    return 0;
  }

  let total = 0;
  for (const child of Object.values(value)) {
    total += sumEvenNumbers(child);
  }
  return total;
}
```

### Cara kerja (rekursi / DFS)

1. **Base case angka:** kalau `typeof value === 'number'`, cek genap dengan `value % 2 === 0`, lalu kembalikan nilainya atau `0`.
2. **Base case non-object:** string, boolean, `undefined` → `0`.
3. **Recursive case:** untuk object/array, ambil semua value dengan `Object.values`, lalu jumlahkan hasil rekursi tiap anak.

Penelusuran input 1:

```
outer: 2                    -> 2
obj.inner: 2                -> 2
obj.otherObj.superInner: 2  -> 2
obj.otherObj.notANumber     -> true   -> 0
obj.otherObj.alsoNotANumber -> "yup"  -> 0
total = 6
```

### Fundamental yang diuji

- **Rekursi:** base case + langkah rekurens. Tanpa base case → stack overflow.
- **`typeof` pitfalls:**
  - `typeof null === 'object'` → harus dicek `value === null` lebih dulu.
  - `typeof true === 'boolean'` dan `typeof '2' === 'string'` → otomatis diabaikan.
  - `typeof NaN === 'number'`, tapi `Number.isInteger(NaN)` false → tidak ikut dijumlahkan.
- **`Object.values`** menelusuri nilai, bukan key; dipakai agar kode tidak bergantung pada nama key.
- **Bilangan genap negatif** (`-4 % 2 === 0`) juga dihitung; `-4` adalah bilangan genap.
- **Array** bertipe `object` dan `Object.values([2, 4])` menghasilkan `[2, 4]`, sehingga array di dalam object otomatis tertelusuri.
- **Kompleksitas:** O(n) terhadap jumlah node; O(d) ruang stack rekursi (d = kedalaman nesting).

---

## Ringkasan fundamental

| Konsep | Dipakai di |
|--------|-----------|
| Loop bersarang, swap, kompleksitas O(n²) | Soal 1 |
| Sliding window, O(n), edge case nilai negatif | Soal 2 |
| Rekursi, base case, `typeof` pitfalls, DFS | Soal 3 |
| Fungsi murni, validasi input, unit test | Semua |
