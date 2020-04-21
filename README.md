# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false, unique: true, foreign_key: true|
|image|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|varchar(255)|null: false, unique: true, foreign_key: true|
|email|vrchar(255)|null: false, foreign_key: true|
## Association
- has_many :groups, through: :groups_users
- has_many :messages
- has_many :groups_users

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|vachar(255)|null: false, foreign_key: false|
|group_member|integer|null: true, foreign_key: true|
## Association
- has_many :users, through: :groups_users
- has_many :messages
- has_many :groups_users

