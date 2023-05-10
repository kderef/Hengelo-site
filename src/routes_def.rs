use rocket_dyn_templates::{context, Template};

const HOMEPAGE: &str = "index";

#[get("/")]
pub fn index() -> Template {
    Template::render(HOMEPAGE, context! {test_var:"hello world!"})
}