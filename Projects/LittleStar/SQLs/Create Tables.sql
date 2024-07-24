CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type ENUM('Creator', 'Viewer') NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE Profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    profile_name VARCHAR(100),
    profile_picture_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE SubscriptionPlans (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    plan_name VARCHAR(100),
    plan_description TEXT,
    plan_price DECIMAL(10, 2),
    plan_duration INT, -- Duration in days
    plan_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE WatchHistory (
    watch_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content_id INT,
    watch_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE Favorites (
    favorite_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content_id INT,
    added_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE Genres (
    genre_id INT AUTO_INCREMENT PRIMARY KEY,
    genre_name VARCHAR(100)
);

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100)
);

CREATE TABLE Content (
    content_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Content creator
    title VARCHAR(255),
    description TEXT,
    release_date DATE,
    content_type ENUM('Short Video', 'Normal Video'),
    is_series BOOLEAN DEFAULT FALSE,
    genre_id INT,
    category_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (genre_id) REFERENCES Genres(genre_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

CREATE TABLE Episodes (
    episode_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    episode_title VARCHAR(255),
    episode_number INT,
    season_number INT,
    release_date DATE,
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE Ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content_id INT,
    rating INT CHECK(rating BETWEEN 1 AND 5),
    review TEXT,
    rating_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE VideoFiles (
    video_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    video_url VARCHAR(255),
    quality ENUM('1080p', '720p', '480p'),
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE PlaybackProgress (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    content_id INT,
    progress_time TIME,
    last_watched TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE Devices (
    device_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    device_name VARCHAR(100),
    device_type VARCHAR(100),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE PaymentTransactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    plan_id INT,
    amount DECIMAL(10, 2),
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Completed', 'Failed'),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (plan_id) REFERENCES SubscriptionPlans(plan_id)
);

CREATE TABLE Invoices (
    invoice_id INT AUTO_INCREMENT PRIMARY KEY,
    transaction_id INT,
    invoice_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    due_date DATE,
    amount DECIMAL(10, 2),
    status ENUM('Paid', 'Unpaid'),
    FOREIGN KEY (transaction_id) REFERENCES PaymentTransactions(transaction_id)
);

CREATE TABLE ViewingStatistics (
    stat_id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT,
    view_count INT,
    last_viewed TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES Content(content_id)
);

CREATE TABLE UserEngagement (
    engagement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    login_count INT,
    watch_time INT, -- Total watch time in minutes
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT,
    notification_type ENUM('Email', 'Push'),
    sent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Sent', 'Pending'),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE InAppMessages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT,
    sent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Read', 'Unread'),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);
