#include <drogon/drogon.h>
#include <drogon/orm/DbConfig.h>

#include "controllers/SubmissionController.h"

int main() {
    drogon::orm::PostgresConfig dbConfig;
    dbConfig.host = "postgres";
    dbConfig.port = 5432;
    dbConfig.databaseName = "detectxr";
    dbConfig.username = "detectxr_user";
    dbConfig.password = "strongpassword";
    dbConfig.connectionNumber = 1;
    dbConfig.name = "postgresql";
    dbConfig.isFast = false;
    dbConfig.characterSet = "utf8";
    dbConfig.timeout = 1.0;
    dbConfig.autoBatch = false;

    drogon::app()
        .addDbClient(dbConfig)
        .addListener("0.0.0.0", 8080)
        .run();

    return 0;
}