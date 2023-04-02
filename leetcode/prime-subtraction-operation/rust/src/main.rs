fn prime_sub_operation(mut nums: Vec<i32>) -> bool {
    let mut lower_num: i32 = 0;
    let mut highest_prime = -1;
    for i in 0..nums.len() {
        if is_in_ascending_order(&nums) {
            return true;
        }
        if i == 0 {
            lower_num = 0;
        } else {
            lower_num = nums[i - 1];
        }
        highest_prime = find_highest_useful_prime(&lower_num, &nums[i]);
        println!(
            "vector[{}]: {}, highest_prime: {}",
            i, nums[i], highest_prime
        );
        if (highest_prime != -1) {
            nums[i] = nums[i] - highest_prime;
        }
    }
    return false;
}

fn is_in_ascending_order(nums: &Vec<i32>) -> bool {
    let mut prev: i32 = 0;
    for num in nums {
        if num > &prev {
            prev = *num;
        } else {
            return false;
        }
    }
    return true;
}

fn is_prime(num: &i32) -> bool {
    let upper_num: i32 = ((*num as f32).sqrt()).floor() as i32;
    let mut is_prime: bool = true;
    if *num == 0 || *num == 1 as i32 {
        is_prime = false
    };
    for n in 2..=upper_num {
        if *num % n == 0 {
            is_prime = false;
        }
    }
    return is_prime;
}

fn find_highest_useful_prime(lower_num: &i32, upper_num: &i32) -> i32 {
    for n in (2..*upper_num).rev() {
        if is_prime(&n) {
            // find a prime when subtracted keeps us higher than lower bounds
            if *upper_num - n > *lower_num {
                return n;
            }
        }
    }
    return -1;
}

fn main() {
    prime_sub_operation(vec![4, 9, 6, 10]);
    //prime_sub_operation(vec![6, 8, 11, 12]);
    //prime_sub_operation(vec![5, 8, 3]);
    //prime_sub_operation(vec![3, 1, 6]);
    //prime_sub_operation(vec![38, 39, 52, 16, 67, 96, 69, 44, 63, 29]);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example1_true() {
        let ex = vec![4, 9, 6, 10];
        assert_eq!(prime_sub_operation(ex), true);
    }
    #[test]
    fn check_example2_false() {
        let ex = vec![6, 8, 11, 12];
        assert_eq!(prime_sub_operation(ex), true);
    }
    #[test]
    fn check_example3_false() {
        let ex = vec![5, 8, 3];
        assert_eq!(prime_sub_operation(ex), false);
    }
    #[test]
    fn check_example4_false() {
        let ex = vec![3, 1, 6];
        assert_eq!(prime_sub_operation(ex), false);
    }
    #[test]
    fn check_example5_false() {
        let ex = vec![38, 39, 52, 16, 67, 96, 69, 44, 63, 29];
        assert_eq!(prime_sub_operation(ex), true);
    }
    #[test]
    fn check_primes() {
        assert_eq!(is_prime(&2), true);
        assert_eq!(is_prime(&3), true);
        assert_eq!(is_prime(&163), true);
        assert_eq!(is_prime(&271), true);
        assert_eq!(is_prime(&999983), true);
    }
    #[test]
    fn check_not_primes() {
        assert_eq!(is_prime(&1), false);
        assert_eq!(is_prime(&4), false);
        assert_eq!(is_prime(&120), false);
        assert_eq!(is_prime(&1000), false);
        assert_eq!(is_prime(&200000), false);
    }
    #[test]
    fn test_find_highest_useful_prime() {
        assert_eq!(find_highest_useful_prime(&0, &4), 3);
        assert_eq!(find_highest_useful_prime(&1, &7), 5);
        assert_eq!(find_highest_useful_prime(&10, &30), 19);
        assert_eq!(find_highest_useful_prime(&20, &90), 67);
        assert_eq!(find_highest_useful_prime(&90, &96), 5);
        assert_eq!(find_highest_useful_prime(&1, &3), -1);
    }
}
