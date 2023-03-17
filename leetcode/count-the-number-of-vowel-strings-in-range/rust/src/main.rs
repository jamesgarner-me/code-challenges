pub fn vowel_strings(words: Vec<String>, left: i32, right: i32) -> i32 {
    let mut count = 0;
    let sliced_words = &words[(left as usize)..=(right as usize)];
    for word in sliced_words.iter() {
        let start_char = word.chars().nth(0).unwrap();
        let end_char = word.chars().last().unwrap();
        if "aeiou".contains(start_char) && "aeiou".contains(end_char) {
            count += 1;
        }
    }
    count
}

fn main() {}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn check_example1() {
        let example1 = vec!["are".to_string(), "amy".to_string(), "u".to_string()];
        assert_eq!(vowel_strings(example1, 0, 2), 2)
    }

    #[test]
    fn check_example2() {
        let example2 = vec![
            "hey".to_string(),
            "aeo".to_string(),
            "mu".to_string(),
            "ooo".to_string(),
            "artro".to_string(),
        ];
        assert_eq!(vowel_strings(example2, 1, 4), 3);
    }
}
