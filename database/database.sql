-- Create the table with the column titles
CREATE TABLE "to_do" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(200) NOT NULL ,
	"completed" BOOLEAN DEFAULT FALSE
);

INSERT INTO "to_do" ("task")
VALUES 
('Go to Office Hours'),
('Apply to jobs'),
('Learn about React!'),
('Finish this homework assignment!'),
('Go to Work')
;


SELECT * FROM "to_do";

UPDATE "to_do" SET "completed" = 'Y' WHERE "id" = 3;