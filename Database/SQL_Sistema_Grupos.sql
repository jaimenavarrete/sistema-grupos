CREATE DATABASE groups_system;

USE groups_system;

CREATE TABLE faculties (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT faculties_id_pk PRIMARY KEY (id),
    CONSTRAINT faculties_name_uk UNIQUE (name)
);

CREATE TABLE schools (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    faculty_id INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT schools_id_pk PRIMARY KEY (id),
    CONSTRAINT schools_name_uk UNIQUE (name)
);

CREATE TABLE careers (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    school_id INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT careers_id_pk PRIMARY KEY (id),
    CONSTRAINT careers_name_uk UNIQUE (name)
);

CREATE TABLE subjects (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT subjects_id_pk PRIMARY KEY (id),
    CONSTRAINT subjects_name_uk UNIQUE (name)
);

CREATE TABLE groups (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(10) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT groups_id_pk PRIMARY KEY (id),
    CONSTRAINT groups_name_uk UNIQUE (name)
);

CREATE TABLE careers_subjects (
	id INT AUTO_INCREMENT NOT NULL,
    career_id INT NOT NULL,
    subject_id INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT careers_subjects_id_pk PRIMARY KEY (id),
    CONSTRAINT careers_subjects_career_id_subject_id_uk UNIQUE (career_id, subject_id),
    CONSTRAINT careers_subjects_career_id_fk FOREIGN KEY (career_id)
    	REFERENCES careers (id),
    CONSTRAINT careers_subjects_subject_id_fk FOREIGN KEY (subject_id)
    	REFERENCES subjects (id)
);

CREATE TABLE roles (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT roles_id_pk PRIMARY KEY (id),
    CONSTRAINT roles_name_uk UNIQUE (name)
);

CREATE TABLE users (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATETIME NOT NULL,
    phone VARCHAR(20),
    role_id INT NOT NULL,
    career_id INT,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(256) NOT NULL,
    verified BOOLEAN DEFAULT FALSE,
    login_attempts INT DEFAULT 0,
    time_unlock DATETIME DEFAULT now(),
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT users_id_pk PRIMARY KEY (id),
    CONSTRAINT users_username_uk UNIQUE (user_name),
    CONSTRAINT users_role_id_fk FOREIGN KEY (role_id)
    	REFERENCES roles (id),
    CONSTRAINT users_career_id_fk FOREIGN KEY (career_id)
    	REFERENCES careers (id)
);

CREATE TABLE subjects_groups (
	id INT AUTO_INCREMENT NOT NULL,
    subject_id INT NOT NULL,
    group_id INT NOT NULL,
    user_id INT,
    max_students INT DEFAULT 0 CHECK (max_students >= 0),
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT subjects_groups_id_pk PRIMARY KEY (id),
    CONSTRAINT subjects_groups_subject_id_group_id_uk UNIQUE (subject_id, group_id),
    CONSTRAINT subjects_groups_subject_id_fk FOREIGN KEY (subject_id)
    	REFERENCES subjects (id),
    CONSTRAINT subjects_groups_group_id_fk FOREIGN KEY (group_id)
    	REFERENCES groups (id)
);

CREATE TABLE users_subjects_groups (
	id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    subject_group_id INT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT users_subjects_groups_pk PRIMARY KEY (id),
    CONSTRAINT users_subjects_groups_user_id_fk FOREIGN KEY (user_id)
    	REFERENCES users (id),
    CONSTRAINT users_subjects_groups_subject_group_id_fk FOREIGN KEY (subject_group_id)
    	REFERENCES subjects_groups (id)
);

CREATE TABLE project_groups_subjects (
	id INT AUTO_INCREMENT NOT NULL,
    subject_1_id INT NOT NULL,
    subject_2_id INT,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT project_groups_subjects_pk PRIMARY KEY (id),
    CONSTRAINT project_groups_subjects_subject_1_id_fk FOREIGN KEY (subject_1_id)
    	REFERENCES subjects (id),
    CONSTRAINT project_groups_subjects_subject_2_id_fk FOREIGN KEY (subject_2_id)
    	REFERENCES subjects (id)
);

CREATE TABLE project_groups (
	id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(20) NOT NULL,
    project_group_subject_id INT,
    subject_group_id INT,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT project_groups_pk PRIMARY KEY (id),
    CONSTRAINT project_groups_project_group_subject_id_fk FOREIGN KEY (project_group_subject_id)
    	REFERENCES project_groups_subjects (id),
    CONSTRAINT project_groups_subject_group_fk FOREIGN KEY (subject_group_id)
    	REFERENCES subjects_groups (id)
);

CREATE TABLE users_project_groups (
	id INT AUTO_INCREMENT NOT NULL,
    user_id INT NOT NULL,
    project_group_id INT NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created DATETIME DEFAULT now(),
    last_modified DATETIME DEFAULT now(),
    
    CONSTRAINT users_project_groups_pk PRIMARY KEY (id),
    CONSTRAINT users_project_groups_user_fk FOREIGN KEY (user_id)
    	REFERENCES users (id),
    CONSTRAINT users_project_groups_project_group_fk FOREIGN KEY (project_group_id)
    	REFERENCES project_groups (id)
);