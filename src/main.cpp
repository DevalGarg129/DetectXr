#include <drogon/drogon.h>

int main() {

    drogon::app().createDbClient(
        "postgresql",
        "localhost",
        5432,
        "detectxr",
        "detectxr_user",
        "password123",
        1
    );

    drogon::app()
        .addListener("0.0.0.0", 8080)
        .run();

    return 0;
}