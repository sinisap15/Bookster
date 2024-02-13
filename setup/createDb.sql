CREATE SCHEMA IF NOT EXISTS appointments;

CREATE TABLE appointments.users
(
    "id"                   SERIAL        NOT NULL PRIMARY KEY ,
    inserted             TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_active            boolean     NOT NULL DEFAULT TRUE,
    first_name           VARCHAR(255) NOT NULL,
    last_name            VARCHAR(255) NOT NULL,
    date_of_birth        VARCHAR(30) NOT NULL,
    gender               VARCHAR(1)  NOT NULL
);