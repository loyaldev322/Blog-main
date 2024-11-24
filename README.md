# Bloggify

-   This is a REST API for Blog Application Where User can See All the blogs posted by users.
-   User can also post their own Blogs.
-   User Can Perform CRUD operation on the blogs posted by them.
-   User Can Seach Other Users and see their Profile By username or email.
-   User Can Filter Blogs by Category.

## Install

    npm install

## Run the app

    npm run start

# API Endpoints

## Get list of All Blogs

### Request

`GET /api/blogs/?cat="6198bd633e59225d6bbef84d"`

### Response

    {
        "status": 1,
        "message": "Blogs Found Success.",
        "data": [
            {
                "_id": "6197d41950d3cfb6e44feda5",
                "category_id": "6198bd633e59225d6bbef84d",
                "image": "https://bloggify.s3.amazonaws.com/cdfe9408-b688-4521-83f0-a1da6a41e4fd.png",
                "image_alt": "immune-system",
                "title": "Make your immune system more strong | Boost your Immunity",
                "author_id": "6197d24dabb407fc6a11b1aa",
                "content": "How does the Immune System Work?\nWhen the body senses foreign substances (called antigens), the system works to acknowledge the antigens and acquire to eliminate them.\n\nLymphocytes are triggered to make antibodies. These specialized proteins lock onto specific antigens. The antibodies stay in a person's body. That way, if the system encounters that antigen again, the antibodies are ready to do their job. That's why someone who gets sick with a disease, like chickenpox, usually won't get sick from it again.\n\nAntibodies can neutralize toxins (poisonous or damaging substances) created by totally different organisms and activate a bunch of proteins referred to as complement that is a section of the system. Complement helps kill microorganisms, viruses, or infected cells. These specialized cells and components of the system offer body protection against disease. This protection is termed as immunity.\nFever is an immune system response\n\nHumans have 3 forms of immunity — innate, adaptive, and passive.\n\nInnate immunity :\nEveryone seems to be born with innate (or natural) immunity, a kind of general protection.\n\nAdaptive immunity :\nAdaptive (or active) immunity develops throughout our lives. We tend to develop adaptive immunity once we're exposed to diseases or once we're immunized against them with vaccines.\n\nPassive immunity :\nPassive immunity is \"borrowed\" from another source and it lasts for a quick time.",
                "status": "published",
                "date": "2021-11-19T16:43:05.545Z",
                "createdAt": "2021-11-19T16:43:05.570Z",
                "updatedAt": "2021-11-20T12:12:52.209Z"
            }
        ]
    }

## Search User

### Request

`GET /api/user/find-user`

### Response

    {
        "status": 1,
        "message": "User Found Success.",
        "data": {
            "email": "hkanani191@gmail.com",
            "usernmae": "harikanani",
            "full_name": "hari kanani"
        }
    }

## User Signup

### Request

`POST /api/auth/signup`

### Response

    {
        "status": 1,
        "message": "Registration Success.",
        "data": {
            "full_name": "John Doe",
            "username": "john01",
            "email": "john01@gmail.com",
            "password": "password_here",
            "_id": "6199039f2b88fabc684ab32f",
            "createdAt": "2021-11-20T14:18:07.781Z",
            "updatedAt": "2021-11-20T14:18:07.781Z"
        }
    }

## User Login

### Request

`POST /api/auth/login`

### Response

    {
        "status": 1,
        "message": "Login Success.",
        "data": {
            "username": "john01",
            "email": "john01@gmail.com",
            "full_name": "John Doe",
            "token": "token"
        }
    }

## Add New Blog

### Request

`POST /api/user/new-blog`

### Response

    {
        "status": 1,
        "message": "Blog Published Successfully.",
        "data": {
            "category_id": "6197cd59e28a5eb64301b2c8",
            "image": "https://bloggify.s3.amazonaws.com/90dee1de-9a03-493a-90b2-c37cd4079306.jpeg",
            "image_alt": "90dee1de-9a03-493a-90b2-c37cd4079306",
            "title": "Why should you become a full stack developer?",
            "author_id": "6199039f2b88fabc684ab32f",
            "content": "Let’s get this cleared first. Here are the top 3 reasons why you should consider becoming a full stack developer -\n\n1. Building unique proprietary software products\nEvery company/developer follows their own tech stack while building a product (as every product has its own requirements and the best set of technology is chosen accordingly).\n\nThe use of such diverse technologies makes the code base of the project complex and this eventually creates a unique code for a particular product. Companies adopting full stack development will have this edge.",
            "status": "published",
            "date": "2021-11-20T14:23:37.117Z",
            "_id": "619904e92b88fabc684ab332",
            "createdAt": "2021-11-20T14:23:37.130Z",
            "updatedAt": "2021-11-20T14:23:37.130Z"
        }
    }

## Update Blog

### Request

`GET /api/user/update-blog`

### Response

    {
        "status": 0,
        "message": "You are not Authorized!",
        "data": null
    }

## Delete Blog

### Request

`PUT /api/user/delete-blog?id=blog_id`

### Response

    {
        "status": 0,
        "message": "Blog Not Found!",
        "data": null
    }

## Get Users Blog

### Request

`GET /api/user/my-blog`

### Response

    {
        "status": 1,
        "message": "Blogs Found Succesfully.",
        "data": [
            {
                "_id": "619906372b88fabc684ab33d",
                "category_id": "6197cd59e28a5eb64301b2c8",
                "image": "https://bloggify.s3.us-east-2.amazonaws.com/e092fc74-1cfc-4ce3-bdd6-8a7d564b5bd1.jpeg",
                "image_alt": "e092fc74-1cfc-4ce3-bdd6-8a7d564b5bd1",
                "title": "Why should you become a full stack developer?",
                "author_id": "6199039f2b88fabc684ab32f",
                "content": "Let’s get this cleared first. Here are the top 3 reasons why you should consider becoming a full stack developer -\n\n1. Building unique proprietary software products\nEvery company/developer follows their own tech stack while building a product (as every product has its own requirements and the best set of technology is chosen accordingly).\n\nThe use of such diverse technologies makes the code base of the project complex and this eventually creates a unique code for a particular product. Companies adopting full stack development will have this edge.",
                "status": "published",
                "date": "2021-11-20T14:29:11.676Z",
                "createdAt": "2021-11-20T14:29:11.682Z",
                "updatedAt": "2021-11-20T14:29:11.682Z"
            }
        ]
    }
