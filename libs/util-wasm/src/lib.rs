use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn capitalize_first_letter(s: &str) -> String {
  let mut c = s.chars();
  match c.next() {
    None => String::new(),
    Some(f) => f.to_uppercase().collect::<String>() + c.as_str(),
  }
}

#[wasm_bindgen]
pub fn convert_date(date: &str) -> String {
  let dt = chrono::DateTime::parse_from_str(date, "%Y-%m-%dT%H:%M:%S.%fZ");
  let dt = match dt {
    Ok(d) => d,
    Err(_) => chrono::DateTime::parse_from_str(date, "%Y-%m-%dT%H:%M:%SZ").unwrap(),
  };
  let dt = dt.with_timezone(&chrono::Local);
  let dt = dt.format("%m/%d/%Y %H:%M:%S").to_string();
  dt
}

#[wasm_bindgen]
pub fn get_local_date_time() -> String {
  let dt = chrono::Local::now();
  let dt = dt.format("%m/%d/%Y %H:%M:%S").to_string();
  dt
}

#[wasm_bindgen]
pub fn is_valid_url(url: &str) -> bool {
  url.parse::<url::Url>().is_ok()
}

#[wasm_bindgen]
pub fn schoool_url_to_name(url: &str) -> String {
  if url.contains("zerotomastery") {
    return "Zero to Mastery".to_string();
  }

  if url.contains("udemy") {
    return "Udemy".to_string();
  }

  if url.contains("flexbox.io") || url.contains("cssgrid.io") || url.contains("mastergatsby.io") || url.contains("advancedreact.com") {
    return "Wes Bos".to_string();
  }

  if url.contains("odyssey.apollographql.com") {
    return "Apollo".to_string();
  }

  if url.contains("realtoughcandy") {
    return "RTC".to_string();
  }

  if url.contains("appbrewery") {
    return "App Brewery".to_string();
  }

  url.to_string()
}

#[wasm_bindgen]
pub fn to_capitalized_words(s: &str) -> String {
  let c = s.chars();
  let mut result = String::new();
  let mut last_was_space = true;

  for f in c {
    if f == ' ' {
      last_was_space = true;
    } else {
      if last_was_space {
        result.push_str(&f.to_uppercase().to_string());
      } else {
        result.push(f);
      }
      last_was_space = false;
    }
  }
  result
}
