CREATE TABLE bookings (
    CustomerId INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(100),
    LastName NVARCHAR(100),
    Services NVARCHAR(100),
    BookingDate DATE,
    BookingStatus NVARCHAR(50) DEFAULT 'Pending'
);
-- CREATE TABLE services (
--     ServiceId INT IDENTITY(1,1) PRIMARY KEY,
--     ServiceName NVARCHAR(100),
--     ServiceDescription NVARCHAR(255),
--     ServicePrice DECIMAL(10, 2)
--     FOREIGN KEY (ServiceId) REFERENCES bookings(CustomerId)
-- );