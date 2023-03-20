fn even_odd_bit(n: i32) -> Vec<i32> {
    let even_mask = i32::from_str_radix("0101010101", 2).unwrap();
    let odd_mask = i32::from_str_radix("1010101010", 2).unwrap();

    let even_bits = n & even_mask;
    let odd_bits = n & odd_mask;

    return vec![even_bits.count_ones() as i32, odd_bits.count_ones() as i32];
}

fn main() {}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example1() {
        assert_eq!(even_odd_bit(17), [2, 0]);
    }
    #[test]
    fn check_example2() {
        assert_eq!(even_odd_bit(2), [0, 1]);
    }
}
