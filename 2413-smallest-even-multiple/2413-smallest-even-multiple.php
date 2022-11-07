class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function smallestEvenMultiple($n) {
        if ($n % 2 == 0) {
            return $n;
        } else return $n * 2;
    }
}