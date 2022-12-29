// Trim remueve los espacios innecesarios de una cadena. Sirve para validar cadenas enviadas vacias o eliminar espacios iniciales y finales
const password = "    asfs8sfy4cva4"
const passwordSinEspacios = password.trim()
// console.log(password)
// console.log(passwordSinEspacios)

const arr = [
  [2, 3, 4],
  5,
  6,
  [7, 8, [9, 10, 11], 12],
  13,
  [14, 15, [16, [17, 18], 19], 20]
]
const arrFlat1 = arr.flat(3)// flat me acomoda los arrrays en nivel 3
console.log(arrFlat1)