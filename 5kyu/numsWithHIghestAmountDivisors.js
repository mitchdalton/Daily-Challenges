// Examples

// arr1 = [66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
//        20, 85, 22, 24, 68, 26, 59, 92, 93, 30]

// proc_arrInt(arr1) ------> [21, 2, [9, [36]]

// # 21 integers in the array
// # 2 primes: 73 and 97
// # 36 is the number that has the highest amount of divisors:
// # 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 divisors, including 1 and 36)

// Another case:

// arr2 = [267, 273, 271, 145, 275, 150, 487, 169, 428, 50, 314, 444, 445,
//         67, 458, 211, 58, 95, 357, 486, 359, 491, 108, 493, 247, 379]

// proc_arrInt(arr2) ------> [26, 7, [12, [108, 150, 444, 486]]]

// # 26 integers in the array
// # 7 primes: 271, 487, 67, 211, 359, 491, 379
// # 108, 150, 444 and 486 have the highest amount of divisors:
// # 108: [1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 108] (12 divisors)
// # 150: [1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150] (12 divisors)
// # 444: [1, 2, 3, 4, 6, 12, 37, 74, 111, 148, 222, 444] (12 divisors)
// # 486: [1, 2, 3, 6, 9, 18, 27, 54, 81, 162, 243, 486] (12 divisors)


function procArrInt(listNum) {
    let primes = 0, mostDivisors = 2, nums = []
    
    for (const n of listNum) {
      let divisors = 1
      for (let i = Math.floor(n/2); i > 0; i--) {
        if (n % i === 0) divisors++
      }    
      if (divisors === 2) primes++
      if (divisors === mostDivisors) nums.push(n)
      if (divisors > mostDivisors) {
        mostDivisors = divisors
        nums = [n]
      }
    }
    
    return [listNum.length, primes, [mostDivisors, nums.sort((a,b) => a-b)]]
  }