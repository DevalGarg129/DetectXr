cmake_minimum_required(VERSION 3.5)

project(detectxr)

set(CMAKE_CXX_STANDARD 20)

find_package(Drogon CONFIG REQUIRED)

add_executable(

    detectxr

    src/main.cpp
)

target_include_directories(

    detectxr

    PRIVATE src
)

target_link_libraries(

    detectxr

    PRIVATE Drogon::Drogon
)