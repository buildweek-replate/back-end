# Replate Backend

The backend for Lambda Build Week's `Replate`.

This backend will allow users to register for `Replate`, allow businesses to create pickup requests, and allow volunteers to choose which pickup requests they would like to fulfill.

## Getting Started (Online)

The API can be found at the following url:

```
https://back-end-3x3qcyeuw.now.sh/
```

## Getting Started (Local)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

### Users Overview

| Method | Endpoint          | Requires                                        | Description                                                                                                                           |
| ------ | ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | `/api/register/`  | `name`, `username`, `password` | Used for adding a new user (both business and volunteer) to the database.                                                              |
| POST   | `/api/login/`     | `username`, `password`                          | Used to log a user in. Returns a token, along with the user's name, and user's status as a business/volunteer. |
| GET    | `/api/users/`     | Successful Login                                | Used to show all users in the database.                                                                                               |
| GET    | `/api/users/:id/` | Successful Login                                | Used to show details of a specific user.                                                                                              |
| PUT    | `/api/users/:id/` | Successful Login                                | Used to update the information of the user currently logged in.                                                                       |
| DELETE | `/api/users/:id/` | Successful Login                                | Used to delete the user that is currently logged in.                                                                                  |
---

### User Registration

Method used: **[POST]** `/api/register`

On Success: Returns the Id of the new user.

Parameters:

| Parameter Name | Type    | Is Required | Notes                                         |
| -------------- | ------- | ----------- | --------------------------------------------- |
| name           | string  | yes         | The user's  name.                        |
| username       | string  | yes         | Must be unique.                               |
| password       | string  | yes         | Can be any length, but the longer the better. |
| business       | boolean | no          | Defaults to 0 (false) automatically.          |

Example of what to use:

```
{
    name: "Bank of Austin",
    username: "AustinBank",
    password: "testpassword",
    business: true
}
```

---

### User Login

Method used: **[POST]** `/api/login/`

On Success: Returns an object containing a token, as well as the following user information: Id, firstName, lastName, instructor status, client status.

Parameters:

| Parameter Name | Type   | Required |
| -------------- | ------ | -------- |
| username       | string | yes      |
| password       | string | yes      |

Example of what to use:

```
{
    username: "johnsmith",
    password: "testpassword"
}
```

---

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.

Parameters:

| Parameter Name | Type       | Required | Notes                             |
| -------------- | ---------- | -------- | --------------------------------- |
| Authorization  | **Header** | yes      | Acquired from a successful login. |

---
