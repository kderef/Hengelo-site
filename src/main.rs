#[macro_use]
extern crate rocket;

mod routedefs;

use rocket_dyn_templates::Template;
use rocket::fs::{FileServer, relative};

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::fairing())
        .mount("/", routes![routedefs::index])
        .mount("/static", FileServer::from(relative!("static")))
}
