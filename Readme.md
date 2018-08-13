# REST API ADMIN

|Route                               |HTTP     |Description                  |
|------------------------------------|---------|-----------------------------|
|/api/admin/signup                   |POST     |Sign up with new user info   |
|/api/admin/signin                   |POST     |Sign in                      |
|/api/admin/adduser                  |POST     |add user                     |
|/api/admin/alluser                  |GET      |find all user                |
|/api/admin/oneuser/:id              |GET      |find one user with id        |
|/api/admin/addschedule/user/:id     |POST     |add schedule for user        |
|/api/admin/removeschedule/user/:id  |POST     |remove schedule for user     |


# REST API USER

|Route                               |HTTP     |Description                  |
|------------------------------------|---------|-----------------------------|
|/api/user/signin                    |POST     |Sign in with                 |
|/api/user/signupform                |POST     |Sign in with                 |



# REST API AGAMA

|Route                             |HTTP     |Description                  |
|----------------------------------|---------|-----------------------------|
|/api/agama/all                    |GET      |FIND ALL                     |
|/api/agama/:id                    |GET      |FIND one                     |
|/api/agama/add                    |POST     |ADD ONE                      |
|/api/agama/:id                    |PUT      |UPDATE ALL                   |
|/api/agama/:id                    |DELETE   |DELETE ONE                   |

# REST API AKOMODASI

|Route                                 |HTTP      |Description                  |
|--------------------------------------|----------|-----------------------------|
|/api/akomodasi/add                    |POST      |Add akomodasi                |
|/api/akomodasi/akomodasi-saya         |GET       |get user akomodasi           |
|/api/akomodasi/:id                    |PUT       |get user akomodasi           |


# REST API ALIRAN

|Route                                 |HTTP      |Description                  |
|--------------------------------------|----------|-----------------------------|
|/api/aliran/add                       |POST      |Add aliran                   |
|/api/aliran/all                       |GET       |FIND ALL aliran              |
|/api/aliran/:id                       |GET       |FIND one aliran              |
|/api/aliran/:id                       |PUT       |update one aliran            |
|/api/aliran/:id                       |DELETE    |delete one aliran            |

# REST API HOMESTAY

|Route                                   |HTTP      |Description                    |
|----------------------------------------|----------|-------------------------------|
|/api/homestay/add                       |POST      |Add homestay                   |
|/api/homestay/all                       |GET       |FIND ALL homestay              |
|/api/homestay/:id                       |GET       |FIND one homestay              |
|/api/homestay/:id                       |PUT       |update one homestay            |
|/api/homestay/:id                       |DELETE    |delete one homestay            |

# REST API RUMAHSAKIT

|Route                                       |HTTP      |Description                    |
|--------------------------------------------|----------|-------------------------------|
|/api/runahsakit/add                         |POST      |Add runahsakit                 |
|/api/runahsakit/all                         |GET       |FIND ALL runahsakit            |
|/api/runahsakit/:id                         |GET       |FIND one runahsakit            |
|/api/runahsakit/:id                         |PUT       |update one runahsakit          |
|/api/runahsakit/:id                         |DELETE    |delete one runahsakit          |

# REST API SCHEDULE

|Route                                       |HTTP      |Description                    |
|--------------------------------------------|----------|-------------------------------|
|/api/schedule/add                           |POST      |Add schedule                   |
|/api/schedule/all                           |GET       |find all schedule              |
|/api/schedule/updateSchedule/:id            |PUT       |update user schedule           |
|/api/schedule/scheduleStatus/:id            |PUT       |update user schedule status    |
|/api/schedule/userSchedule                  |GET       |find user schedule             |