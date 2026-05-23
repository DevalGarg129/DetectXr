#include <drogon/drogon.h>

int main() {

    drogon::app().createDbClient(
        "postgresql",
        "127.0.0.1",
        5432,
        "detectxr",
        "detectxr_user",
        "detect123",
        1
    );

    drogon::app()
        .addListener("0.0.0.0", 8080)
        .run();

    return 0;
}