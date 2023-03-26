pub fn k_items_with_maximum_sum(num_ones: i32, num_zeros: i32, num_neg_ones: i32, k: i32) -> i32 {
    let first_bag_items_used = num_ones - k;

    // scenario 1: take all from first bag
    if first_bag_items_used >= 0 {
        return k;
    }

    // scenario 2: take all from first and second bag
    let mut k_remaining = first_bag_items_used.abs();
    let second_bag_items_used = num_zeros - k_remaining;
    if second_bag_items_used >= 0 {
        return num_ones;
    }

    // scenario 3: take from all bags
    k_remaining = second_bag_items_used.abs();
    return num_ones + k_remaining * -1;
}

fn main() {
    println!("{:?}", k_items_with_maximum_sum(3, 2, 0, 2));
    println!("{:?}", k_items_with_maximum_sum(3, 2, 0, 4));
    println!("{:?}", k_items_with_maximum_sum(4, 0, 1, 2));
    println!("{:?}", k_items_with_maximum_sum(6, 6, 6, 13));
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn check_example1() {
        assert_eq!(k_items_with_maximum_sum(3, 2, 0, 2), 2);
    }
    fn check_example2() {
        assert_eq!(k_items_with_maximum_sum(3, 2, 0, 4), 3);
    }
    fn check_example3() {
        assert_eq!(k_items_with_maximum_sum(4, 0, 1, 2), 2);
    }
    fn check_example4() {
        assert_eq!(k_items_with_maximum_sum(6, 6, 6, 13), 5);
    }
}
