pub fn util_wasm() -> String {
    "util_wasm".into()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(util_wasm(), "util_wasm".to_string());
    }
}
