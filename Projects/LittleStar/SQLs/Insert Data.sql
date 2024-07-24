Give me some example data in each table

Sure, I'll provide some example data for each table to illustrate how the schema can be populated.

User Management
Users
sql
Copy code
INSERT INTO Users (email, password_hash, user_type, registration_date, last_login)
VALUES 
('creator1@example.com', 'hashedpassword1', 'Creator', '2024-01-01 10:00:00', '2024-07-15 20:00:00'),
('viewer1@example.com', 'hashedpassword2', 'Viewer', '2024-01-02 10:00:00', '2024-07-15 21:00:00');
Profiles
sql
Copy code
INSERT INTO Profiles (user_id, profile_name, profile_picture_url)
VALUES 
(1, 'Creator One', 'https://example.com/pictures/creator1.jpg'),
(2, 'Viewer One', 'https://example.com/pictures/viewer1.jpg');
SubscriptionPlans
sql
Copy code
INSERT INTO SubscriptionPlans (plan_name, plan_description, plan_price, plan_duration, plan_active)
VALUES 
('Basic Plan', 'Basic subscription plan', 9.99, 30, TRUE),
('Premium Plan', 'Premium subscription plan with extra features', 19.99, 30, TRUE);
WatchHistory
sql
Copy code
INSERT INTO WatchHistory (user_id, content_id, watch_date)
VALUES 
(2, 1, '2024-07-15 20:30:00'),
(2, 2, '2024-07-15 21:00:00');
Favorites
sql
Copy code
INSERT INTO Favorites (user_id, content_id, added_date)
VALUES 
(2, 1, '2024-07-15 20:45:00'),
(2, 3, '2024-07-15 21:15:00');
Content Management
Content
sql
Copy code
INSERT INTO Content (user_id, title, description, release_date, content_type, is_series, genre_id, category_id)
VALUES 
(1, 'Short Video 1', 'Description of Short Video 1', '2024-01-01', 'Short Video', FALSE, 1, 1),
(1, 'Normal Video 1', 'Description of Normal Video 1', '2024-01-02', 'Normal Video', FALSE, 2, 2),
(1, 'TV Series 1', 'Description of TV Series 1', '2024-01-03', 'Normal Video', TRUE, 1, 1);
Episodes
sql
Copy code
INSERT INTO Episodes (content_id, episode_title, episode_number, season_number, release_date)
VALUES 
(3, 'Episode 1', 1, 1, '2024-01-03'),
(3, 'Episode 2', 2, 1, '2024-01-04');
Categories and Genres
sql
Copy code
INSERT INTO Categories (category_name)
VALUES 
('Entertainment'),
('Education');

INSERT INTO Genres (genre_name)
VALUES 
('Comedy'),
('Drama');
Ratings
sql
Copy code
INSERT INTO Ratings (user_id, content_id, rating, review, rating_date)
VALUES 
(2, 1, 5, 'Great short video!', '2024-07-15 21:30:00'),
(2, 2, 4, 'Interesting movie.', '2024-07-15 21:45:00');
Streaming and Playback
VideoFiles
sql
Copy code
INSERT INTO VideoFiles (content_id, video_url, quality)
VALUES 
(1, 'https://example.com/videos/shortvideo1_1080p.mp4', '1080p'),
(2, 'https://example.com/videos/normalvideo1_720p.mp4', '720p'),
(3, 'https://example.com/videos/tvseries1_ep1_480p.mp4', '480p');
PlaybackProgress
sql
Copy code
INSERT INTO PlaybackProgress (user_id, content_id, progress_time, last_watched)
VALUES 
(2, 1, '00:10:00', '2024-07-15 21:00:00'),
(2, 3, '00:05:00', '2024-07-15 21:20:00');
Devices
sql
Copy code
INSERT INTO Devices (user_id, device_name, device_type, registration_date)
VALUES 
(2, 'iPhone 12', 'Smartphone', '2024-01-02 10:30:00'),
(2, 'Samsung TV', 'Smart TV', '2024-01-02 11:00:00');
Billing and Payments
PaymentTransactions
sql
Copy code
INSERT INTO PaymentTransactions (user_id, plan_id, amount, transaction_date, status)
VALUES 
(2, 1, 9.99, '2024-07-01 10:00:00', 'Completed'),
(2, 2, 19.99, '2024-07-01 10:05:00', 'Completed');
Invoices
sql
Copy code
INSERT INTO Invoices (transaction_id, invoice_date, due_date, amount, status)
VALUES 
(1, '2024-07-01 10:00:00', '2024-08-01', 9.99, 'Paid'),
(2, '2024-07-01 10:05:00', '2024-08-01', 19.99, 'Paid');
Analytics and Reporting
ViewingStatistics
sql
Copy code
INSERT INTO ViewingStatistics (content_id, view_count, last_viewed)
VALUES 
(1, 100, '2024-07-15 21:00:00'),
(2, 150, '2024-07-15 21:30:00');
UserEngagement
sql
Copy code
INSERT INTO UserEngagement (user_id, login_count, watch_time)
VALUES 
(2, 50, 300),
(1, 20, 100);
Notifications and Communication
Notifications
sql
Copy code
INSERT INTO Notifications (user_id, message, notification_type, sent_date, status)
VALUES 
(2, 'Your subscription is about to expire.', 'Email', '2024-07-15 10:00:00', 'Sent'),
(2, 'New content is available!', 'Push', '2024-07-15 12:00:00', 'Sent');
InAppMessages
sql
Copy code
INSERT INTO InAppMessages (user_id, message, sent_date, status)
VALUES 
(2, 'Check out the new series.', '2024-07-15 13:00:00', 'Read'),
(2, 'Don\'t miss the live event.', '2024-07-15 14:00:00', 'Unread');