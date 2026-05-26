FROM fedora:42

RUN dnf update -y && \
    dnf install -y \
    gcc-c++ \
    cmake \
    make \
    git \
    jsoncpp-devel \
    postgresql-devel \
    libpqxx-devel \
    openssl-devel \
    zlib-devel \
    uuid-devel

# Install Drogon
WORKDIR /opt

RUN git clone https://github.com/drogonframework/drogon.git

WORKDIR /opt/drogon

RUN git submodule update --init

RUN mkdir build && \
    cd build && \
    cmake .. && \
    make -j$(nproc) && \
    make install

# Build DetectXr
WORKDIR /app

COPY . .

RUN mkdir -p build && \
    cd build && \
    cmake .. && \
    make

EXPOSE 8080

CMD ["./build/detectxr"]