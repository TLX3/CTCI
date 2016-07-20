//5.1 O(1) time
function bitInsertion(n, m, j, i) {
  let left = n >> i << i;
  let right = n << (32 - j) >>> (32 - j);
  return left | (m << j) | right;
}
