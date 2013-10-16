create table manuals
(manualid int unsigned not null auto_increment primary key,
modelNumber char(50) not null,
category char(50) not null,
subcategory char(50) not null,
link char(100) not null
);