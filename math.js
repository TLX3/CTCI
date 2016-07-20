/*
 All positive integers can be decomposed into a product of primes
 y is divisible by x or x \ y or y % x === 0
 i.e. All primes in x's prime factorization must be in y's prime factorization
 let x = 2^j0 * 3^j1 * 5^j2 * 7^j3 ...
     y = 2^k0 * 3^k1 * 5^k2 * 7^k3 ...
 if x\y then for all i, j*i <= k*i
 gcd(x, y) =  2^min(j0, k0) * 3^min(j1, k1) * 5^min(j2, k2) * 7^min(j3,k3) ...
 lcm(x, y) =  2^max(j0, k0) * 3^max(j1, k1) * 5^max(j2, k2) * 7^max(j3,k3) ...
 gcd*lcm = x*y
*/

function SieveOfErastosthenes(max) {
  let flags = [], primes;
  for(let j = 0; j <= max; j++) {
    flags.push(true);
  }
  flags.splice(0,2);
  let prime = 2, next = prime + 1;
  while(prime <= Math.sqrt(max)) {
    for(let i = prime*prime; i < flags.length; i += prime) {
      flags[i] = false;
    }
    while(next < flags.length && !flags[next]) {
      next += 1;
    }
    prime = next;
  }
  flags.forEach((flag, i) => flag === true ? primes.push(i) : null );
  return primes;
}

//Independent Events: P(A and B) = P(A)*P(B)
//Dependent Events: P(A and B) = P(A given B)*P(B) = P(B given A)*P(A)  ->
//Bayes Theorem: P(A given B) = P(B given A)*P(A)/P(B)
//Mutually Exclusive Events: P(A or B) = P(A) + P(B)
//P(A or B) = P(A) + P(B) - P(A and B)
//Two events that have non-zero probabilities cannot be both independent and mutually exclusive

/*6.1
 Given sufficient pills per bottle, remove i pills from ith bottle.
 Measure all of the pills on the the scale. The fractional value of
 the measurement will refer to the ith bottle that has heavior pills
 since all other bottle have integer weight pills.
*/

/* 6.2
 Let p = probability of making one a shot
 So for game 1, P = p.
 for game 2, P = P(making 3 out of 3 shots) + P(making 2 out of 3 shots)
  = P(making 3 out of 3 shots) +
  P(making shot 1 and shot 2 missing shot 3) + P(making shot 2 and shot 3 missing shot 1) + P(making shot 1 and shot 3 missing shot 2)
  = p^3 + p^2(1 - p) + p^2(1 - p) + p^2(1 - p) = p^3 + 3p^2(1 - p) = 3p^2 - 2p^3
  if P(game 1) > P(game 2) then
  p > 3p^2 - 2p^3 -> 2p^2 - 3p + 1 > 0 -> (2p - 1)(p - 1) > 0
 Since p < 1 then p - 1 < 0.
 Since both terms must be negative 2p - 1 < 0 -> p < 0.5
 So game 1 should be played if p < 0.5 otherwise play game 2
*/

/* 6.3
  Each domino captures one white and one black space. On a nxn chessboard with opposite corners top-left bottom-right
  missing has n*n/2 - 2 white and black n*n/2 spaces.
  Given (n*n - 2)/2 dominos, we require n*n/2 - 1 black and also n*n/2 - 1 white spaces.
  Given n > 0, n*n/2 - 1 > n*n/2 - 2, there is insufficient white spaces for the dominos.
*/

/* 6.4
  2^3 different permutation of paths. (3 choose 2)*2 possible collisions. 6/8 = 3/4 chance of collision.
  2^n different permutation of paths. (n choose 2)*(n-1) possible collisions. n!*(n - 1)/(2^n+1)(n - 2)!
*/

/* 6.5
  Fill up the 5 quart jug and distribute to the 3 quart jug. Empty out the 3 quart jug and pour the 2 quarts from the 5 quarts jugs
  into the 3 quarts jug. Fill up the 5 quarts jug and fill 3 quarts jug till capacity. You now have 4 quarts left in the 5 quarts jug.
*/

/* 6.6
 if m number of people have blue eyes out of n people. It will take m days for each blue eyed person to leave.
*/

/* 6.7

*/

/* 6.8

*/

/* 6.9
 10 numbers : Perfect squares between 1-100
*/
