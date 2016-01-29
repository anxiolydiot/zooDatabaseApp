create database fun_time
use fun_time

create table bars (
id INT NOT NULL AUTO_INCREMENT, 
barname VARCHAR(255) NOT NULL, 
PRIMARY KEY (id)
);

INSERT INTO bars (barname) VALUES
    ('thisone'),('thatone'),('theotherone');

UPDATE bars (barname) VALUES
    ('theotherotherone');
CREATE table drinks(
id,
bar_id,
drink_name VARCHAR(255) NOT NULL, ,
drink_price INT NOT NULL, 
);