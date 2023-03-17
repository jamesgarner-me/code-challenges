fn max_score(mut nums: Vec<i32>) -> i32 {
    let mut prefix_val: i64 = 0;
    let mut prev: i64 = 0;
    let mut count = 0;

    let _ = nums.sort_by(|a, b| b.cmp(a));

    for num in nums.iter() {
        prefix_val = *num as i64 + prev;
        if (prefix_val) > 0 {
            count += 1;
        }
        // println!("num, prev: {}, {}", num, prev);
        // println!("num + prev: {}", prefix_val);
        // println!("count: {}", count);
        prev = prefix_val;
    }
    return count;
}

fn main() {}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example1() {
        let nums = vec![2, -1, 0, 1, -3, 3, -3];
        assert_eq!(max_score(nums), 6);
    }

    #[test]
    fn check_example2() {
        let nums = vec![-2, -3, 0];
        assert_eq!(max_score(nums), 0);
    }
}
