-- Create the table with the column titles
CREATE TABLE "to_do" (
	"id" SERIAL PRIMARY KEY,
	"task" varchar(200),
	"completed" varchar(2)
);

INSERT INTO "to_do" ("task", "completed")
VALUES 
('Go to Office Hours', 'N'),
('Apply to jobs', 'N'),
('Learn about React!', 'N'),
('Finish this homework assignment!','N'),
('Go to Work', 'Y')
;


SELECT * FROM "to_do";

UPDATE "to_do" SET "completed" = 'Y' WHERE "id" = 3;