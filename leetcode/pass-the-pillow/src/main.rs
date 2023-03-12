/* https://leetcode.com/problems/pass-the-pillow/description/ */

fn pass_the_pillow(n: i32, time: i32) -> i32 {
    let direction = (time as f32 / (n - 1) as f32) as i32;

    // single pass
    if direction == 0 {
        return time + 1;
    }

    let remainder = time.rem_euclid(n - 1);
    // no ternary in Rust
    if direction % 2 == 0 {
        return remainder + 1;
    } else {
        return n - remainder;
    }
}
fn main() {
    println!("{:?}", pass_the_pillow(4, 5));
    println!("{:?}", pass_the_pillow(3, 2));
}
