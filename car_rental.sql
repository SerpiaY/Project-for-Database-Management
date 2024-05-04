-- Database: car_rental

-- DROP DATABASE IF EXISTS car_rental;

CREATE DATABASE car_rental
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
	DROP INDEX IF EXISTS IX_Rent;
DROP TABLE IF EXISTS PAYMENT;
DROP TABLE IF EXISTS RENT_BILL;
DROP TABLE IF EXISTS VEHICLE;
DROP TABLE IF EXISTS BRANCH;
DROP TABLE IF EXISTS CUSTOMER;
DROP PROCEDURE IF EXISTS rent_vehicle ();
DROP FUNCTION IF EXISTS vehicle_returned ();
DROP TRIGGER IF EXISTS vehicle_returned ON RENT_BILL;


CREATE TABLE CUSTOMER (
    customer_id serial UNIQUE NOT NULL,
    first_name varchar(128) NOT NULL,
    last_name varchar(128) NOT NULL,
    date_of_birth date NOT NULL,
	acc_name varchar(20) NOT NULL,
	acc_password varchar(20) NOT NULL,
    license_number varchar(128) NOT NULL,
    PRIMARY KEY (customer_id)
);

CREATE TABLE BRANCH (
    branch_id serial UNIQUE NOT NULL,
    available_car int,
    address varchar(2000),
    PRIMARY KEY (branch_id)
);

CREATE TABLE VEHICLE (
    vehicle_id serial UNIQUE NOT NULL,
    brand varchar(13),
    date_bought date,
    branch_id int NOT NULL,
    is_available bool NOT NULL,
	cost_per_day numeric(15, 2),
    PRIMARY KEY (vehicle_id),
    FOREIGN KEY (branch_id) REFERENCES BRANCH (branch_id)
);

CREATE TABLE RENT_BILL (
    rent_id serial UNIQUE NOT NULL,
    vehicle_id int NOT NULL,
    trip_duration int NOT NULL,
    customer_id int NOT NULL,
    is_returned bool DEFAULT FALSE,
    date_rented date NOT NULL DEFAULT CURRENT_DATE,
    date_returned date,
    PRIMARY KEY (rent_id),
    FOREIGN KEY (vehicle_id) REFERENCES VEHICLE (vehicle_id),
    FOREIGN KEY (customer_id) REFERENCES CUSTOMER (customer_id)
);

CREATE TABLE PAYMENT (
    rent_id int NOT NULL,
    payment_amount numeric(15, 2) NOT NULL,
    payment_date date NOT NULL,
    PRIMARY KEY (rent_id, payment_date),
    FOREIGN KEY (rent_id) REFERENCES RENT_BILL (rent_id)
);

CREATE UNIQUE INDEX IX_Rent
ON RENT_BILL (customer_id, is_returned)
WHERE
    is_returned = FALSE;


/*
PROCEDURE rent_vehicle()
*/
CREATE OR REPLACE PROCEDURE rent_vehicle (vehicleID int, customerID int, duration int, rentdate date)
LANGUAGE plpgsql
AS $$
BEGIN
  /* Check vehicle availability and customer active rentals */
  IF (
      SELECT is_available
      FROM VEHICLE
      WHERE vehicle_id = vehicleID
    ) AND NOT (
      SELECT count(*)
      FROM RENT_BILL
      WHERE customer_id = customerID AND is_returned = FALSE
    ) > 0 THEN

    /* Update vehicle availability and branch parking spaces */
    UPDATE VEHICLE
    SET is_available = FALSE
    WHERE vehicle_id = vehicleID;

    UPDATE BRANCH
    SET available_car = available_car - 1  -- Adjust if car leaves branch
    WHERE branch_id = (
      SELECT branch_id
      FROM VEHICLE
      WHERE vehicle_id = vehicleID
    );

    /* Insert new rental record */
    INSERT INTO RENT_BILL (vehicle_id, trip_duration, customer_id, is_returned, date_rented)
    VALUES (vehicleID, duration, customerID, FALSE, rentdate);

    /* Success message */
    RAISE NOTICE 'Vehicle rented successfully!';

  ELSE
    /* Raise exception with informative message */
    RAISE EXCEPTION 'Vehicle unavailable or customer already has an active rental.';
  END IF;
END;
$$;

/*
FUNCTION: vehicle_returned()
*/
CREATE OR REPLACE FUNCTION vehicle_returned ()
  RETURNS TRIGGER
  LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.is_returned AND NEW.trip_duration > 0 THEN
    -- Update payment (if rental duration > 0)
    INSERT INTO PAYMENT (rent_id, payment_amount, payment_date)
    VALUES 
	(NEW.rent_id, (
      SELECT (NEW.trip_duration) * cost_per_day
      FROM VEHICLE
      WHERE vehicle_id = NEW.vehicle_id),
	 NEW.date_returned);  -- Check for valid duration

    -- Update vehicle availability and branch parking spaces
    UPDATE VEHICLE
    SET is_available = TRUE
    WHERE vehicle_id = NEW.vehicle_id;
	
	UPDATE BRANCH
	SET available_car = available_car + 1
	WHERE branch_id = (
		SELECT branch_id
		FROM VEHICLE
		WHERE vehicle_id = NEW.vehicle_id);
  END IF;

  RETURN NEW;
END;
$$;


/*
TRIGGER:
This trigger calls the function car_returned() for each row that gets updated in the table RENT.
*/
CREATE TRIGGER vehicle_returned
    AFTER UPDATE ON RENT_BILL
    FOR EACH ROW
    EXECUTE FUNCTION vehicle_returned ();