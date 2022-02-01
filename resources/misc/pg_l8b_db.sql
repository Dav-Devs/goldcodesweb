--

    -- PostgreSQL database dump
    --

    -- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
    -- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
SET
    statement_timeout = 0;
SET
    lock_timeout = 0;
SET
    idle_in_transaction_session_timeout = 0;
SET
    client_encoding = 'UTF8';
SET
    standard_conforming_strings =
ON
    ;
SELECT
    pg_catalog.set_config('search_path', '', FALSE);
SET
    check_function_bodies = FALSE;
SET
    xmloption = content;
SET
    client_min_messages = warning;
SET
    row_security = off;
    --

    -- Name: l8b_db; Type: SCHEMA; Schema: -; Owner: david
    --

CREATE SCHEMA l8b_db; ALTER
    SCHEMA l8b_db OWNER TO david;
SET
    default_tablespace = '';
SET
    default_table_access_method = heap;
    --

    -- Name: cache; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.cache(
    KEY CHARACTER VARYING(255) NOT NULL,
    VALUE TEXT NOT NULL
        ,
        expiration INTEGER NOT NULL
);
ALTER TABLE
    l8b_db.cache OWNER TO david;
    --

    -- Name: cache_locks; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.cache_locks(
    KEY CHARACTER VARYING(255) NOT NULL,
    OWNER CHARACTER VARYING(255) NOT NULL,
    expiration INTEGER NOT NULL
); ALTER TABLE
    l8b_db.cache_locks OWNER TO david;
    --

    -- Name: failed_jobs; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.failed_jobs(
    id BIGINT NOT NULL,
    UUID CHARACTER VARYING(255) NOT NULL,
    CONNECTION TEXT NOT NULL,
    queue TEXT NOT NULL,
    payload TEXT NOT NULL,
    exception TEXT NOT NULL,
    failed_at TIMESTAMP(0) without TIME zone DEFAULT CURRENT_TIMESTAMP NOT NULL
); ALTER TABLE
    l8b_db.failed_jobs OWNER TO david;
    --

    -- Name: failed_jobs_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.failed_jobs_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.failed_jobs_id_seq OWNER TO david;
    --

    -- Name: failed_jobs_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.failed_jobs_id_seq OWNED BY l8b_db.failed_jobs.id;
    --

    -- Name: migrations; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.migrations(
    id INTEGER NOT NULL,
    migration CHARACTER VARYING(255) NOT NULL,
    batch INTEGER NOT NULL
); ALTER TABLE
    l8b_db.migrations OWNER TO david;
    --

    -- Name: migrations_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.migrations_id_seq AS INTEGER START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.migrations_id_seq OWNER TO david;
    --

    -- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.migrations_id_seq OWNED BY l8b_db.migrations.id;
    --

    -- Name: password_resets; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.password_resets(
    email CHARACTER VARYING(255) NOT NULL,
    token CHARACTER VARYING(255) NOT NULL,
    created_at TIMESTAMP(0) without TIME zone
); ALTER TABLE
    l8b_db.password_resets OWNER TO david;
    --

    -- Name: personal_access_tokens; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.personal_access_tokens(
    id BIGINT NOT NULL,
    tokenable_type CHARACTER VARYING(255) NOT NULL,
    tokenable_id BIGINT NOT NULL,
    NAME CHARACTER VARYING(255) NOT NULL,
    token CHARACTER VARYING(64) NOT NULL,
    abilities TEXT,
    last_used_at TIMESTAMP(0) without TIME zone,
    created_at TIMESTAMP(0) without TIME zone,
    updated_at TIMESTAMP(0) without TIME zone
); ALTER TABLE
    l8b_db.personal_access_tokens OWNER TO david;
    --

    -- Name: personal_access_tokens_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.personal_access_tokens_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.personal_access_tokens_id_seq OWNER TO david;
    --

    -- Name: personal_access_tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.personal_access_tokens_id_seq OWNED BY l8b_db.personal_access_tokens.id;
    --

    -- Name: posts; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.posts(
    id INTEGER NOT NULL,
    slug CHARACTER VARYING(255) NOT NULL,
    title CHARACTER VARYING(255) NOT NULL,
    description TEXT NOT NULL,
    image_path CHARACTER VARYING(255) NOT NULL,
    created_at TIMESTAMP(0) without TIME zone,
    updated_at TIMESTAMP(0) without TIME zone,
    user_id BIGINT NOT NULL
); ALTER TABLE
    l8b_db.posts OWNER TO david;
    --

    -- Name: posts_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.posts_id_seq AS INTEGER START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.posts_id_seq OWNER TO david;
    --

    -- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.posts_id_seq OWNED BY l8b_db.posts.id;
    --

    -- Name: products; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.products(
    id BIGINT NOT NULL,
    product_name CHARACTER VARYING(255) NOT NULL,
    product_description CHARACTER VARYING(255) NOT NULL,
    created_at TIMESTAMP(0) without TIME zone,
    updated_at TIMESTAMP(0) without TIME zone
); ALTER TABLE
    l8b_db.products OWNER TO david;
    --

    -- Name: products_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.products_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.products_id_seq OWNER TO david;
    --

    -- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.products_id_seq OWNED BY l8b_db.products.id;
    --

    -- Name: sessions; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.sessions(
    id CHARACTER VARYING(255) NOT NULL,
    user_id BIGINT,
    ip_address CHARACTER VARYING(45),
    user_agent TEXT,
    payload TEXT NOT NULL,
    last_activity INTEGER NOT NULL
); ALTER TABLE
    l8b_db.sessions OWNER TO david;
    --

    -- Name: users; Type: TABLE; Schema: l8b_db; Owner: david
    --

CREATE TABLE l8b_db.users(
    id BIGINT NOT NULL,
    NAME CHARACTER VARYING(255) NOT NULL,
    email CHARACTER VARYING(255) NOT NULL,
    email_verified_at TIMESTAMP(0) without TIME zone,
    PASSWORD CHARACTER VARYING(255) NOT NULL,
    remember_token CHARACTER VARYING(100),
    created_at TIMESTAMP(0) without TIME zone,
    updated_at TIMESTAMP(0) without TIME zone
); ALTER TABLE
    l8b_db.users OWNER TO david;
    --

    -- Name: users_id_seq; Type: SEQUENCE; Schema: l8b_db; Owner: david
    --

CREATE SEQUENCE l8b_db.users_id_seq START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1; ALTER TABLE
    l8b_db.users_id_seq OWNER TO david;
    --

    -- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: l8b_db; Owner: david
    --

ALTER
    SEQUENCE l8b_db.users_id_seq OWNED BY l8b_db.users.id;
    --

    -- Name: failed_jobs id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.failed_jobs
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'l8b_db.failed_jobs_id_seq' : regclass
    );
    --

    -- Name: migrations id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.migrations
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'l8b_db.migrations_id_seq' : regclass
    );
    --

    -- Name: personal_access_tokens id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.personal_access_tokens
ALTER COLUMN
    id
SET
    DEFAULT nextval(
        'l8b_db.personal_access_tokens_id_seq' : regclass
    );
    --

    -- Name: posts id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.posts
ALTER COLUMN
    id
SET
    DEFAULT nextval('l8b_db.posts_id_seq' : regclass);
    --

    -- Name: products id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.products
ALTER COLUMN
    id
SET
    DEFAULT nextval('l8b_db.products_id_seq' : regclass);
    --

    -- Name: users id; Type: DEFAULT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.users
ALTER COLUMN
    id
SET
    DEFAULT nextval('l8b_db.users_id_seq' : regclass);
    --

    -- Data for Name: cache; Type: TABLE DATA; Schema: l8b_db; Owner: david
    --

    --

    -- Data for Name: cache_locks; Type: TABLE DATA; Schema: l8b_db; Owner: david
    --

    --

    -- Data for Name: failed_jobs; Type: TABLE DATA; Schema: l8b_db; Owner: david
    --

    --

    -- Data for Name: migrations; Type: TABLE DATA; Schema: l8b_db; Owner: david
    --

INSERT INTO l8b_db.migrations
VALUES(
    1,
    '2014_10_12_000000_create_users_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(
    2,
    '2014_10_12_100000_create_password_resets_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(
    3,
    '2019_08_19_000000_create_failed_jobs_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(
    4,
    '2019_12_14_000001_create_personal_access_tokens_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(
    5,
    '2021_12_11_204153_create_sessions_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(6, '2021_12_25_013440_posts', 1);
INSERT INTO l8b_db.migrations
VALUES(
    7,
    '2022_01_04_221605_create_products_table',
    1
);
INSERT INTO l8b_db.migrations
VALUES(
    8,
    '2022_01_31_160810_create_cache_table',
    2
);
--

-- Data for Name: password_resets; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

--

-- Data for Name: personal_access_tokens; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

--

-- Data for Name: posts; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

INSERT INTO l8b_db.posts
VALUES(
    1,
    'marinettepostslug',
    'marinetteposts',
    'marinettepostdesc',
    'marinettepostimgpath',
    NULL,
    NULL,
    3
);
INSERT INTO l8b_db.posts
VALUES(
    2,
    'ijsxdz',
    'zjxjZ',
    'izhiKJCkx',
    'uhxchlxcjx',
    NULL,
    NULL,
    2
);
INSERT INTO l8b_db.posts
VALUES(
    3,
    'davslug',
    'davidtitle',
    'haxuchjxzn;vlclvnlxvncnzvncnxv,nc,zvncx,nv,cnx',
    'djovjxzk',
    NULL,
    NULL,
    1
);
--

-- Data for Name: products; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

--

-- Data for Name: sessions; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

--

-- Data for Name: users; Type: TABLE DATA; Schema: l8b_db; Owner: david
--

INSERT INTO l8b_db.users
VALUES(
    1,
    'David Gold',
    'davidgoldcodes@gmail.com',
    NULL,
    '$2y$10$gTXfSNFxk4k/4K5MX83yiOU/o87mR7JGBqvRytei0gi20aBRIL0AO',
    NULL,
    '2022-01-31 13:46:08',
    '2022-01-31 13:46:08'
);
INSERT INTO l8b_db.users
VALUES(
    3,
    'mari',
    'marinette@mdc.com',
    NULL,
    '$2y$10$ZkMtu4QRcaMZpihdFw9SaebBzE.pe4BDzuqx3hMnCxIy.ekqQcgrC',
    NULL,
    '2022-01-31 16:29:47',
    '2022-01-31 16:29:47'
);
INSERT INTO l8b_db.users
VALUES(
    2,
    'wangfu',
    'master@wang.fu',
    NULL,
    '$2y$10$CS.v3Uc0sburdqEoiC1sO.FWSF4.biyh8LA45ct24BAogJGUAKhNm',
    'ZPlYYlVW4vviudM4IFvDrdcRgDq4x0QhnjAdVmYr54tYVX4gzncZmxOL61Cn',
    '2022-01-31 16:28:58',
    '2022-01-31 16:28:58'
);
--

-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
--

SELECT
    pg_catalog.setval('l8b_db.failed_jobs_id_seq', 1, FALSE);
    --

    -- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
    --

SELECT
    pg_catalog.setval('l8b_db.migrations_id_seq', 8, TRUE);
    --

    -- Name: personal_access_tokens_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
    --

SELECT
    pg_catalog.setval(
        'l8b_db.personal_access_tokens_id_seq',
        1,
        FALSE
    );
    --

    -- Name: posts_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
    --

SELECT
    pg_catalog.setval('l8b_db.posts_id_seq', 3, TRUE);
    --

    -- Name: products_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
    --

SELECT
    pg_catalog.setval('l8b_db.products_id_seq', 1, FALSE);
    --

    -- Name: users_id_seq; Type: SEQUENCE SET; Schema: l8b_db; Owner: david
    --

SELECT
    pg_catalog.setval('l8b_db.users_id_seq', 3, TRUE);
    --

    -- Name: cache_locks cache_locks_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.cache_locks ADD CONSTRAINT cache_locks_pkey PRIMARY KEY(KEY);
    --

    -- Name: cache cache_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.cache ADD CONSTRAINT cache_pkey PRIMARY KEY(KEY);
    --

    -- Name: failed_jobs failed_jobs_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.failed_jobs ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY(id);
    --

    -- Name: failed_jobs failed_jobs_uuid_unique; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.failed_jobs ADD CONSTRAINT failed_jobs_uuid_unique UNIQUE(UUID);
    --

    -- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.migrations ADD CONSTRAINT migrations_pkey PRIMARY KEY(id);
    --

    -- Name: personal_access_tokens personal_access_tokens_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.personal_access_tokens ADD CONSTRAINT personal_access_tokens_pkey PRIMARY KEY(id);
    --

    -- Name: personal_access_tokens personal_access_tokens_token_unique; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.personal_access_tokens ADD CONSTRAINT personal_access_tokens_token_unique UNIQUE(token);
    --

    -- Name: posts posts_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.posts ADD CONSTRAINT posts_pkey PRIMARY KEY(id);
    --

    -- Name: products products_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.products ADD CONSTRAINT products_pkey PRIMARY KEY(id);
    --

    -- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.sessions ADD CONSTRAINT sessions_pkey PRIMARY KEY(id);
    --

    -- Name: users users_email_unique; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.users ADD CONSTRAINT users_email_unique UNIQUE(email);
    --

    -- Name: users users_pkey; Type: CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.users ADD CONSTRAINT users_pkey PRIMARY KEY(id);
    --

    -- Name: password_resets_email_index; Type: INDEX; Schema: l8b_db; Owner: david
    --

CREATE INDEX password_resets_email_index ON
    l8b_db.password_resets USING BTREE(email);
    --

    -- Name: personal_access_tokens_tokenable_type_tokenable_id_index; Type: INDEX; Schema: l8b_db; Owner: david
    --

CREATE INDEX personal_access_tokens_tokenable_type_tokenable_id_index ON
    l8b_db.personal_access_tokens USING BTREE(tokenable_type, tokenable_id);
    --

    -- Name: sessions_last_activity_index; Type: INDEX; Schema: l8b_db; Owner: david
    --

CREATE INDEX sessions_last_activity_index ON
    l8b_db.sessions USING BTREE(last_activity);
    --

    -- Name: sessions_user_id_index; Type: INDEX; Schema: l8b_db; Owner: david
    --

CREATE INDEX sessions_user_id_index ON
    l8b_db.sessions USING BTREE(user_id);
    --

    -- Name: posts posts_user_id_foreign; Type: FK CONSTRAINT; Schema: l8b_db; Owner: david
    --

ALTER TABLE
    ONLY l8b_db.posts ADD CONSTRAINT posts_user_id_foreign FOREIGN KEY(user_id) REFERENCES l8b_db.users(id);
    --

    -- PostgreSQL database dump complete
    --

    