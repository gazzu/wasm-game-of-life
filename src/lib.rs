extern crate cfg_if;
extern crate wasm_bindgen;

mod utils;

use cfg_if::cfg_if;
use wasm_bindgen::prelude::*;

cfg_if! {
    // When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
    // allocator.
    if #[cfg(feature = "wee_alloc")] {
        extern crate wee_alloc;
        #[global_allocator]
        static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;
    }
}

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]

/*
pub fn greet(name: String) {
	let mut start: String = "Hello ".to_owned();
	let end: String = ", wasm-game-of-life!".to_owned();
	start.push_str(&name);
	start.push_str(&end);
    alert(&start);
}
*/

pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

