#[macro_use]
extern crate rocket;

use rocket_dyn_templates::Template;
use rocket::fs::{FileServer, relative};

mod routes_def;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::fairing())
        .mount("/", routes![routes_def::index])
        .mount("/static", FileServer::from(relative!("static")))
}
