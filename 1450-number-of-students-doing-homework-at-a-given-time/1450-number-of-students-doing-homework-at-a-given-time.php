class Solution {

    /**
     * @param Integer[] $startTime
     * @param Integer[] $endTime
     * @param Integer $queryTime
     * @return Integer
     */
    function busyStudent($startTime, $endTime, $queryTime) {
        $students = 0;
        for($x = 0; $x < count($startTime); $x++) {
            if($queryTime >= $startTime[$x] && $queryTime <= $endTime[$x]) {
                $students++;
            }
        }
        return $students;
    }
}