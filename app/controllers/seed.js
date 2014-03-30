'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.seed = function(req, res) {
    console.log("Inserting data");


//Migi's Data
User.create(
{
  "location": 'Phillippines',
  "relocate": true,
  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "hiyN8jWqPW",
    }
  ],
  "email" : "migi_72@yahoo.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 1500,
    "owned_private_repos" : 0,
    "total_private_repos" : 9,
    "private_gists" : 0,
    "updated_at" : "2014-03-25T03:15:53Z",
    "created_at" : "2013-06-29T08:17:38Z",
    "following" : 5,
    "followers" : 1,
    "public_gists" : 4,
    "public_repos" : 7,
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/migidomingo/received_events",
    "events_url" : "https://api.github.com/users/migidomingo/events{/privacy}",
    "repos_url" : "https://api.github.com/users/migidomingo/repos",
    "organizations_url" : "https://api.github.com/users/migidomingo/orgs",
    "subscriptions_url" : "https://api.github.com/users/migidomingo/subscriptions",
    "starred_url" : "https://api.github.com/users/migidomingo/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/migidomingo/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/migidomingo/following{/other_user}",
    "followers_url" : "https://api.github.com/users/migidomingo/followers",
    "html_url" : "https://github.com/migidomingo",
    "url" : "https://api.github.com/users/migidomingo",
    "gravatar_id" : "7cd6ddde82a4bc27c41b211909c75116",
    "avatar_url" : "https://avatars.githubusercontent.com/u/4880315?",
    "id" : 4880315,
    "login" : "migidomingo"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "Web Development"
          },
          "id" : 30
        },
        {
          "skill" : {
            "name" : "Social Media Marketing"
          },
          "id" : 31
        },
        {
          "skill" : {
            "name" : "Team Leadership"
          },
          "id" : 32
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 33
        },
        {
          "skill" : {
            "name" : "Public Speaking"
          },
          "id" : 34
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 35
        },
        {
          "skill" : {
            "name" : "Social Media"
          },
          "id" : 36
        },
        {
          "skill" : {
            "name" : "Entertainment"
          },
          "id" : 37
        },
        {
          "skill" : {
            "name" : "Ruby"
          },
          "id" : 38
        },
        {
          "skill" : {
            "name" : "Express.js"
          },
          "id" : 39
        },
        {
          "skill" : {
            "name" : "Angular.js"
          },
          "id" : 40
        },
        {
          "skill" : {
            "name" : "Ruby on Rails"
          },
          "id" : 41
        },
        {
          "skill" : {
            "name" : "Music"
          },
          "id" : 42
        }
      ],
      "_total" : 13
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=238483169&authType=name&authToken=X4Qw&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Zaman",
          "id" : "PvmfqY724t",
          "firstName" : "Jisan"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        },
        {
          "lastName" : "Cook",
          "id" : "AjEGjDYQLv",
          "firstName" : "Eric"
        },
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Drury",
          "id" : "hne4Az6W6H",
          "firstName" : "James"
        },
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        },
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        },
        {
          "lastName" : "Buchanan",
          "id" : "fGnvXFc51n",
          "firstName" : "Hannah Jane"
        },
        {
          "lastName" : "Bayogos",
          "id" : "RQSP6Wm6m7",
          "firstName" : "Sammie"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "primaryTwitterAccount" : {
      "providerAccountName" : "finch899",
      "providerAccountId" : "24293957"
    },
    "positions" : {
      "values" : [
        {
          "title" : "Student",
          "startDate" : {
            "year" : 2014,
            "month" : 1
          },
          "isCurrent" : true,
          "id" : 514054384,
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Radio DJ",
          "summary" : "I play music and entertain people. I manage the content on my the second half of my Sunday show called Positive Note, aimed at helping people feel good through good music and inspirational stories.",
          "startDate" : {
            "year" : 2012,
            "month" : 10
          },
          "isCurrent" : false,
          "id" : 373551161,
          "endDate" : {
            "year" : 2013,
            "month" : 5
          },
          "company" : {
            "name" : "Magic 89.9",
            "industry" : "Broadcast Media"
          }
        },
        {
          "title" : "Cashier",
          "summary" : "I handled the front end of the store by dealing with customers and their purchases. I also added to customers' experiences by talking with them to make sure that everything went great!",
          "startDate" : {
            "year" : 2009,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 373557304,
          "endDate" : {
            "year" : 2009,
            "month" : 8
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "BBBY",
            "size" : "10,001+ employees",
            "name" : "Bed Bath & Beyond",
            "industry" : "Retail",
            "id" : 7174
          }
        }
      ],
      "_total" : 3
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_-zC9rqnKf9N-Ppk0rrhLrB3p7qCPlVL0rBnWrBAuKAnCmY-xY1tVYc5CTsGS-jX1198H0rfQQfkS",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Domingo",
    "languages" : {
      "values" : [
        {
          "language" : {
            "name" : "English"
          },
          "id" : 5
        },
        {
          "language" : {
            "name" : "Filipino"
          },
          "id" : 16
        }
      ],
      "_total" : 2
    },
    "id" : "hiyN8jWqPW",
    "headline" : "Web Developer",
    "firstName" : "Migi",
    "emailAddress" : "migi_72@yahoo.com",
    "educations" : {
      "_total" : 0
    }
  },
  "name" : "Migi Domingo",
  "roles" : [
    "developer",
    "admin"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Educational Institution",
        "size" : "1-10 employees",
        "name" : "Fullstack Academy",
        "industry" : "Internet",
        "id" : 4985867
      },
      "id" : 514054384,
      "isCurrent" : true,
      "title" : "Student",
      "startDate" : {
        "month" : 1,
        "year" : 2014
      }
    },
    {
      "company" : {
        "name" : "Magic 89.9",
        "industry" : "Broadcast Media"
      },
      "id" : 373551161,
      "isCurrent" : false,
      "title" : "Radio DJ",
      "endDate" : {
        "month" : 5,
        "year" : 2013
      },
      "startDate" : {
        "month" : 10,
        "year" : 2012
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "BBBY",
        "size" : "10,001+ employees",
        "name" : "Bed Bath & Beyond",
        "industry" : "Retail",
        "id" : 7174
      },
      "id" : 373557304,
      "isCurrent" : false,
      "title" : "Cashier",
      "endDate" : {
        "month" : 8,
        "year" : 2009
      },
      "startDate" : {
        "month" : 6,
        "year" : 2009
      }
    }
  ]
});


//Max Giraldo
User.create({
  "location": 'New York',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "2qKGhmTNbZ",
    }
  ],
  "educations" : [
    {
      "id" : 199155650,
      "notes" : "Intensive, 12-week web development/software engineering immersive course.",
      "schoolName" : "Fullstack Academy",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2014
      }
    },
    {
      "degree" : "BFA",
      "fieldOfStudy" : "Advertising",
      "id" : 62842653,
      "schoolName" : "Art Center College of Design",
      "endDate" : {
        "year" : 2013
      },
      "startDate" : {
        "year" : 2011
      }
    }
  ],
  "email" : "hi@maxgiraldo.com",
  "github" : {
    "plan" : {
      "private_repos" : 5,
      "collaborators" : 1,
      "space" : 614400,
      "name" : "micro"
    },
    "collaborators" : 3,
    "disk_usage" : 1587,
    "owned_private_repos" : 3,
    "total_private_repos" : 9,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T01:58:48Z",
    "created_at" : "2013-07-01T23:21:12Z",
    "following" : 7,
    "followers" : 6,
    "public_gists" : 0,
    "public_repos" : 2,
    "bio" : null,
    "hireable" : false,
    "email" : "",
    "location" : "nyc",
    "blog" : "maxgiraldo.com",
    "company" : "",
    "name" : "Max",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/maxgiraldo/received_events",
    "events_url" : "https://api.github.com/users/maxgiraldo/events{/privacy}",
    "repos_url" : "https://api.github.com/users/maxgiraldo/repos",
    "organizations_url" : "https://api.github.com/users/maxgiraldo/orgs",
    "subscriptions_url" : "https://api.github.com/users/maxgiraldo/subscriptions",
    "starred_url" : "https://api.github.com/users/maxgiraldo/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/maxgiraldo/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/maxgiraldo/following{/other_user}",
    "followers_url" : "https://api.github.com/users/maxgiraldo/followers",
    "html_url" : "https://github.com/maxgiraldo",
    "url" : "https://api.github.com/users/maxgiraldo",
    "gravatar_id" : "4b1bd19834c6b4adfcf3286d880bba0a",
    "avatar_url" : "https://avatars.githubusercontent.com/u/4913413?",
    "id" : 4913413,
    "login" : "maxgiraldo"
  },
  "linkedin" : {
    "summary" : "maxgiraldo.com",
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=63020039&authType=name&authToken=JuKE&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Koo",
          "id" : "CSRTpH9PMC",
          "firstName" : "Ji Ho"
        },
        {
          "lastName" : "Pazmiño",
          "id" : "En1mNn2tQC",
          "firstName" : "Luis"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        },
        {
          "lastName" : "Xiang",
          "id" : "0CbQxKE7yn",
          "firstName" : "Tong"
        },
        {
          "lastName" : "D'Alessandro",
          "id" : "WkMxcboGNL",
          "firstName" : "Scott"
        },
        {
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Buchanan",
          "id" : "fGnvXFc51n",
          "firstName" : "Hannah Jane"
        },
        {
          "lastName" : "Dorman",
          "id" : "RA_dFGEbz-",
          "firstName" : "Kyle"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "primaryTwitterAccount" : {
      "providerAccountName" : "maxgiraldo",
      "providerAccountId" : "34191752"
    },
    "positions" : {
      "values" : [
        {

          "title" : "Creative",
          "startDate" : {
            "year" : 2013,
            "month" : 10
          },
          "isCurrent" : false,
          "id" : 489641674,
          "endDate" : {
            "year" : 2013,
            "month" : 12
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "IPG",
            "size" : "501-1000 employees",
            "name" : "Deutsch",
            "industry" : "Marketing and Advertising",
            "id" : 6043
          }
        }
      ],
      "_total" : 1
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0__NWrbZruZEcF-XZsDKEfbVruVeC9OXds3Pg7bRlpLSnF38OVftMpdUL-q6GHgiHnCBwaey7qhEA0",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Giraldo",
    "id" : "2qKGhmTNbZ",
    "headline" : "Student at Fullstack Academy",
    "firstName" : "Max",
    "emailAddress" : "hi@maxgiraldo.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2014
          },
          "schoolName" : "Fullstack Academy",
          "notes" : "Intensive, 12-week web development/software engineering immersive course.",
          "id" : 199155650,
          "endDate" : {
            "year" : 2014
          }
        },
        {
          "startDate" : {
            "year" : 2011
          },
          "schoolName" : "Art Center College of Design",
          "id" : 62842653,
          "fieldOfStudy" : "Advertising",
          "endDate" : {
            "year" : 2013
          },
          "degree" : "BFA"
        }
      ],
      "_total" : 2
    },
    "courses" : {
      "_total" : 0
    },
    "certifications" : {
      "_total" : 0
    }
  },
  "name" : "Max Giraldo",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "IPG",
        "size" : "501-1000 employees",
        "name" : "Deutsch",
        "industry" : "Marketing and Advertising",
        "id" : 6043
      },
      "id" : 489641674,
      "isCurrent" : false,
      "title" : "Creative",
      "endDate" : {
        "month" : 12,
        "year" : 2013
      },
      "startDate" : {
        "month" : 10,
        "year" : 2013
      }
    }
  ]
})

//Nathan Grotticelli
User.create({
  "location": 'New York',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "diAmJFCENs",
    }
  ],
  "educations" : [
    {
      "id" : 199548544,
      "notes" : "Making great people into great developers. Y Combinator backed.",
      "schoolName" : "Fullstack Academy of Code",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2013
      }
    },
    {
      "activities" : "Zeta Psi Fraternity, BU Poker Society Vice President, Entrepreneurship Club",
      "id" : 156420782,
      "schoolName" : "SUNY Binghamton",
      "endDate" : {
        "year" : 2013
      },
      "startDate" : {
        "year" : 2012
      }
    }
  ],
  "email" : "nmg2225@Yahoo.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 14632,
    "owned_private_repos" : 0,
    "total_private_repos" : 6,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T14:50:32Z",
    "created_at" : "2013-12-26T21:21:33Z",
    "following" : 0,
    "followers" : 4,
    "public_gists" : 0,
    "public_repos" : 7,
    "bio" : null,
    "hireable" : false,
    "email" : "NathanGrotticelli@gmail.com",
    "location" : null,
    "blog" : null,
    "company" : null,
    "name" : "Nathan Grotticelli",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/nathangrotticelli/received_events",
    "events_url" : "https://api.github.com/users/nathangrotticelli/events{/privacy}",
    "repos_url" : "https://api.github.com/users/nathangrotticelli/repos",
    "organizations_url" : "https://api.github.com/users/nathangrotticelli/orgs",
    "subscriptions_url" : "https://api.github.com/users/nathangrotticelli/subscriptions",
    "starred_url" : "https://api.github.com/users/nathangrotticelli/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/nathangrotticelli/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/nathangrotticelli/following{/other_user}",
    "followers_url" : "https://api.github.com/users/nathangrotticelli/followers",
    "html_url" : "https://github.com/nathangrotticelli",
    "url" : "https://api.github.com/users/nathangrotticelli",
    "gravatar_id" : "dfb9aa0ec31a18c26e59abc9be8c3aab",
    "avatar_url" : "https://avatars.githubusercontent.com/u/6266959?",
    "id" : 6266959,
    "login" : "nathangrotticelli"
  },
  "linkedin" : {
    "summary" : "With a passion for creation, design and growth, my goal is to affect and alter the world.",
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "Social Media"
          },
          "id" : 67
        },
        {
          "skill" : {
            "name" : "Entrepreneurship"
          },
          "id" : 68
        },
        {
          "skill" : {
            "name" : "Strategy"
          },
          "id" : 69
        },
        {
          "skill" : {
            "name" : "Analytics"
          },
          "id" : 70
        },
        {
          "skill" : {
            "name" : "Social Entrepreneurship"
          },
          "id" : 71
        },
        {
          "skill" : {
            "name" : "Leadership"
          },
          "id" : 72
        },
        {
          "skill" : {
            "name" : "Facebook"
          },
          "id" : 73
        },
        {
          "skill" : {
            "name" : "Social Networking"
          },
          "id" : 74
        },
        {
          "skill" : {
            "name" : "Marketing"
          },
          "id" : 75
        },
        {
          "skill" : {
            "name" : "Thought Leadership"
          },
          "id" : 76
        },
        {
          "skill" : {
            "name" : "Marketing Strategy"
          },
          "id" : 77
        },
        {
          "skill" : {
            "name" : "Social Media Marketing"
          },
          "id" : 78
        },
        {
          "skill" : {
            "name" : "Advertising"
          },
          "id" : 79
        },
        {
          "skill" : {
            "name" : "Online Marketing"
          },
          "id" : 80
        },
        {
          "skill" : {
            "name" : "Innovation"
          },
          "id" : 81
        },
        {
          "skill" : {
            "name" : "B2C marketing"
          },
          "id" : 82
        },
        {
          "skill" : {
            "name" : "Online Advertising"
          },
          "id" : 83
        },
        {
          "skill" : {
            "name" : "Google Analytics"
          },
          "id" : 84
        },
        {
          "skill" : {
            "name" : "Blogging"
          },
          "id" : 85
        },
        {
          "skill" : {
            "name" : "SEO"
          },
          "id" : 86
        },
        {
          "skill" : {
            "name" : "Brand Development"
          },
          "id" : 87
        },
        {
          "skill" : {
            "name" : "Social Media Measurement"
          },
          "id" : 88
        },
        {
          "skill" : {
            "name" : "Public Relations"
          },
          "id" : 89
        },
        {
          "skill" : {
            "name" : "Digital Media"
          },
          "id" : 90
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 91
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 92
        },
        {
          "skill" : {
            "name" : "HTML 5"
          },
          "id" : 93
        },
        {
          "skill" : {
            "name" : "CSS3"
          },
          "id" : 94
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 95
        },
        {
          "skill" : {
            "name" : "Test Driven Development"
          },
          "id" : 96
        },
        {
          "skill" : {
            "name" : "Git"
          },
          "id" : 97
        }
      ],
      "_total" : 31
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=249776017&authType=name&authToken=8bdA&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Taylor",
          "id" : "H1LOPF8vq2",
          "firstName" : "Brittany Star"
        },
        {
          "lastName" : "Hoffmann",
          "id" : "RY2E3_yats",
          "firstName" : "Lucas"
        },
        {
          "lastName" : "Macin",
          "id" : "DOaxdYzfAF",
          "firstName" : "Brooke"
        },
        {
          "lastName" : "Graves",
          "id" : "6u4XERdQxE",
          "firstName" : "Shanice"
        },
        {
          "lastName" : "Gotleib",
          "id" : "WZwpDiKbV9",
          "firstName" : "Melissa"
        },
        {
          "lastName" : "Hitt",
          "id" : "mmRZqBa8On",
          "firstName" : "Aidan"
        },
        {
          "lastName" : "Lipman",
          "id" : "5ryED0p3Nw",
          "firstName" : "Brogan"
        },
        {
          "lastName" : "Zhao",
          "id" : "63iIbrsyUU",
          "firstName" : "Tommy"
        },
        {
          "lastName" : "Clarke",
          "id" : "UBFG4oqt8u",
          "firstName" : "Erik"
        },
        {
          "lastName" : "Alvarado",
          "id" : "CfBtZ9RUYA",
          "firstName" : "Natalie"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "College Market Strategist",
          "summary" : "Responsible for driving awareness, engagement, and excitement for Spotify within the college community through strategic partnerships, sponsored events and word-of-mouth.",
          "startDate" : {
            "year" : 2013,
            "month" : 4
          },
          "isCurrent" : true,
          "id" : 389704318,
          "company" : {
            "type" : "Privately Held",
            "size" : "1001-5000 employees",
            "name" : "Spotify",
            "industry" : "Computer Software",
            "id" : 207470
          }
        },
        {
          "title" : "CEO/Founder",
          "summary" : "Leading an innovative tech start up obsessed with improving college nightlife through the mobile experience.",
          "startDate" : {
            "year" : 2012,
            "month" : 9
          },
          "isCurrent" : true,
          "id" : 389703968,
          "company" : {
            "type" : "Privately Held",
            "size" : "11-50 employees",
            "name" : "U Nightlife",
            "industry" : "Utilities",
            "id" : 3515937
          }
        },
        {
          "title" : "Mr. Youth Community Manager",
          "summary" : "The Mr Youth Network is a global team of motivated and entrepreneurial students that focus on using creative, strategic and analytic intell to inspire and fuel advocacy and action on campus.\n\nMembers learn critical business skills related to social media and word-of-mouth marketing while developing a powerful network of executives and peers that will last them throughout their professional career. Most importantly the Mr Youth Network provides top-notch experience helping global brands pioneer the future of youth marketing.",
          "startDate" : {
            "year" : 2012,
            "month" : 1
          },
          "isCurrent" : true,
          "id" : 389705005,
          "company" : {
            "type" : "Public Company",
            "size" : "501-1000 employees",
            "name" : "MRY",
            "industry" : "Marketing and Advertising",
            "id" : 29473
          }
        },
        {
          "title" : "Customer Funnel/Website Architect",
          "summary" : "Providing strength, through insights, techniques and services, to students looking to use social media professionally.",
          "startDate" : {
            "year" : 2013,
            "month" : 8
          },
          "isCurrent" : false,
          "id" : 473782211,
          "endDate" : {
            "year" : 2014,
            "month" : 2
          },
          "company" : {
            "name" : "SocialMediaSpinach.com",
            "industry" : "-1"
          }
        },
        {
          "title" : "Contributor",
          "summary" : "Active article writer/contributor to the online publication.",
          "startDate" : {
            "year" : 2013,
            "month" : 5
          },
          "isCurrent" : false,
          "id" : 399787099,
          "endDate" : {
            "year" : 2014,
            "month" : 2
          },
          "company" : {
            "type" : "Privately Held",
            "size" : "1-10 employees",
            "name" : "YoungEntrepreneur.com",
            "industry" : "Online Media",
            "id" : 1150400
          }
        },
        {
          "title" : "#MRYintern",
          "summary" : "MRY is a new type of agency that specializes in blending creativity and technology to make brands remarkable. We harness the power of strategic analytic intelligence to create remarkable content that sparks emotion, adds value, inspires action and changes behavior. We work with some of the world's biggest brands, including Coca-Cola, Adobe, Spotify, and Neutrogena. The #MRYintern program was named the \"Top Advertising Agency Internship\" of 2012.",
          "startDate" : {
            "year" : 2013,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 410702598,
          "endDate" : {
            "year" : 2013,
            "month" : 8
          },
          "company" : {
            "type" : "Public Company",
            "size" : "501-1000 employees",
            "name" : "MRY",
            "industry" : "Marketing and Advertising",
            "id" : 29473
          }
        },
        {
          "title" : "Lead Social Media/Concept Design",
          "startDate" : {
            "year" : 2012,
            "month" : 3
          },
          "isCurrent" : false,
          "id" : 389705726,
          "endDate" : {
            "year" : 2012,
            "month" : 6
          },
          "company" : {
            "name" : "www.VideoJournalistToday.com",
            "industry" : "Computer Software"
          }
        }
      ],
      "_total" : 7
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_goVSNvyqshnDobSjgaEONcEHniTiEGpjxma-N9sqW6v-vQIgA2oTVnaVZS3jdLjAyd4PUlX32aed",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Grotticelli",
    "interests" : "Growth Hacking,\nEntrepreneurship,\nSocial Media,\nDesign,\nSports,\nSnowboarding,\nInnovation\nAwesomeness",
    "id" : "diAmJFCENs",
    "honorsAwards" : {
      "values" : [
        {
          "name" : "Startup Weekend Competition Finalist/Winner",
          "id" : 10
        }
      ],
      "_total" : 1
    },
    "headline" : "Entrepreneur/Developer",
    "firstName" : "Nathan",
    "emailAddress" : "nmg2225@Yahoo.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2013
          },
          "schoolName" : "Fullstack Academy of Code",
          "notes" : "Making great people into great developers. Y Combinator backed.",
          "id" : 199548544,
          "endDate" : {
            "year" : 2014
          }
        },
        {
          "startDate" : {
            "year" : 2012
          },
          "schoolName" : "SUNY Binghamton",
          "id" : 156420782,
          "endDate" : {
            "year" : 2013
          },
          "activities" : "Zeta Psi Fraternity, BU Poker Society Vice President, Entrepreneurship Club"
        }
      ],
      "_total" : 2
    }
  },
  "name" : "Nathan Grotticelli",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Privately Held",
        "size" : "1001-5000 employees",
        "name" : "Spotify",
        "industry" : "Computer Software",
        "id" : 207470
      },
      "id" : 389704318,
      "isCurrent" : true,
      "title" : "College Market Strategist",
      "startDate" : {
        "month" : 4,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Privately Held",
        "size" : "11-50 employees",
        "name" : "U Nightlife",
        "industry" : "Utilities",
        "id" : 3515937
      },
      "id" : 389703968,
      "isCurrent" : true,
      "title" : "CEO/Founder",
      "startDate" : {
        "month" : 9,
        "year" : 2012
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "size" : "501-1000 employees",
        "name" : "MRY",
        "industry" : "Marketing and Advertising",
        "id" : 29473
      },
      "id" : 389705005,
      "isCurrent" : true,
      "title" : "Mr. Youth Community Manager",
      "startDate" : {
        "month" : 1,
        "year" : 2012
      }
    },
    {
      "company" : {
        "name" : "SocialMediaSpinach.com",
        "industry" : "-1"
      },
      "id" : 473782211,
      "isCurrent" : false,
      "title" : "Customer Funnel/Website Architect",
      "endDate" : {
        "month" : 2,
        "year" : 2014
      },
      "startDate" : {
        "month" : 8,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Privately Held",
        "size" : "1-10 employees",
        "name" : "YoungEntrepreneur.com",
        "industry" : "Online Media",
        "id" : 1150400
      },
      "id" : 399787099,
      "isCurrent" : false,
      "title" : "Contributor",
      "endDate" : {
        "month" : 2,
        "year" : 2014
      },
      "startDate" : {
        "month" : 5,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "size" : "501-1000 employees",
        "name" : "MRY",
        "industry" : "Marketing and Advertising",
        "id" : 29473
      },
      "id" : 410702598,
      "isCurrent" : false,
      "title" : "#MRYintern",
      "endDate" : {
        "month" : 8,
        "year" : 2013
      },
      "startDate" : {
        "month" : 6,
        "year" : 2013
      }
    },
    {
      "company" : {
        "name" : "www.VideoJournalistToday.com",
        "industry" : "Computer Software"
      },
      "id" : 389705726,
      "isCurrent" : false,
      "title" : "Lead Social Media/Concept Design",
      "endDate" : {
        "month" : 6,
        "year" : 2012
      },
      "startDate" : {
        "month" : 3,
        "year" : 2012
      }
    }
  ]
});

//Eric Cook
User.create({
  "location": 'New York',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "AjEGjDYQLv",
    }
  ],
  "educations" : [
    {
      "degree" : "Master of Science in Teaching",
      "fieldOfStudy" : "Adolescence Education",
      "id" : 103278384,
      "schoolName" : "State University of New York College at Plattsburgh",
      "endDate" : {
        "year" : 2013
      },
      "startDate" : {
        "year" : 2011
      }
    },
    {
      "activities" : "Zeta Beta tau",
      "degree" : "Bachelor of Arts (B.A.)",
      "fieldOfStudy" : "Mathematics",
      "id" : 45405222,
      "schoolName" : "State University of New York College at Plattsburgh",
      "endDate" : {
        "year" : 2011
      },
      "startDate" : {
        "year" : 2008
      }
    }
  ],
  "email" : "ejcook111@gmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 32746,
    "owned_private_repos" : 0,
    "total_private_repos" : 7,
    "private_gists" : 1,
    "updated_at" : "2014-03-26T16:19:44Z",
    "created_at" : "2013-11-18T00:26:30Z",
    "following" : 17,
    "followers" : 6,
    "public_gists" : 1,
    "public_repos" : 9,
    "bio" : null,
    "hireable" : true,
    "email" : null,
    "location" : null,
    "blog" : null,
    "company" : null,
    "name" : null,
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/CoderCookE/received_events",
    "events_url" : "https://api.github.com/users/CoderCookE/events{/privacy}",
    "repos_url" : "https://api.github.com/users/CoderCookE/repos",
    "organizations_url" : "https://api.github.com/users/CoderCookE/orgs",
    "subscriptions_url" : "https://api.github.com/users/CoderCookE/subscriptions",
    "starred_url" : "https://api.github.com/users/CoderCookE/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/CoderCookE/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/CoderCookE/following{/other_user}",
    "followers_url" : "https://api.github.com/users/CoderCookE/followers",
    "html_url" : "https://github.com/CoderCookE",
    "url" : "https://api.github.com/users/CoderCookE",
    "gravatar_id" : "f6e326617b186e967d2aebc673bf3fa9",
    "avatar_url" : "https://avatars.githubusercontent.com/u/5964112?",
    "id" : 5964112,
    "login" : "CoderCookE"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "OS X"
          },
          "id" : 27
        },
        {
          "skill" : {
            "name" : "Facebook"
          },
          "id" : 26
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 20
        },
        {
          "skill" : {
            "name" : "HTML 5"
          },
          "id" : 21
        },
        {
          "skill" : {
            "name" : "CSS"
          },
          "id" : 22
        },
        {
          "skill" : {
            "name" : "Mac OS X"
          },
          "id" : 16
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 29
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 30
        }
      ],
      "_total" : 8
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=67450652&authType=name&authToken=XEz5&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        },
        {
          "lastName" : "Drury",
          "id" : "hne4Az6W6H",
          "firstName" : "James"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        },
        {
          "lastName" : "Xiang",
          "id" : "0CbQxKE7yn",
          "firstName" : "Tong"
        },
        {
          "lastName" : "Zaman",
          "id" : "PvmfqY724t",
          "firstName" : "Jisan"
        },
        {
          "lastName" : "Leasia",
          "id" : "wWHDhWIVhD",
          "firstName" : "Charlotte"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "Student",
          "startDate" : {
            "year" : 2014,
            "month" : 1
          },
          "isCurrent" : true,
          "id" : 504577579,
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Customer Experience Associate",
          "summary" : "",
          "startDate" : {
            "year" : 2009,
            "month" : 6
          },
          "isCurrent" : true,
          "id" : 110125471,
          "company" : {
            "type" : "Public Company",
            "name" : "Gap Inc./Old Navy",
            "industry" : "Retail",
            "id" : 165295
          }
        },
        {
          "title" : "Mathematics Teacher",
          "startDate" : {
            "year" : 2013,
            "month" : 9
          },
          "isCurrent" : false,
          "id" : 414011451,
          "endDate" : {
            "year" : 2014,
            "month" : 1
          },
          "company" : {
            "type" : "Government Agency",
            "size" : "10,001+ employees",
            "name" : "NYC Department of Education",
            "industry" : "Education Management",
            "id" : 2905
          }
        },
        {
          "title" : "Tutor",
          "startDate" : {
            "year" : 2013,
            "month" : 4
          },
          "isCurrent" : false,
          "id" : 414010812,
          "endDate" : {
            "year" : 2013,
            "month" : 6
          },
          "company" : {
            "type" : "Privately Held",
            "size" : "201-500 employees",
            "name" : "Huntington Learning Center",
            "industry" : "Education Management",
            "id" : 164244
          }
        },
        {
          "title" : "Electronics Sales Associate",
          "summary" : "",
          "startDate" : {
            "year" : 2007,
            "month" : 11
          },
          "isCurrent" : false,
          "id" : 110125683,
          "endDate" : {
            "year" : 2008,
            "month" : 7
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "SHLD",
            "name" : "Sears, Roebuck and Co.",
            "industry" : "Retail",
            "id" : 1942
          }
        },
        {
          "title" : "Crew Coach",
          "summary" : "",
          "startDate" : {
            "year" : 2005,
            "month" : 7
          },
          "isCurrent" : false,
          "id" : 110125555,
          "endDate" : {
            "year" : 2007,
            "month" : 11
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "MCD",
            "name" : "McDonald's",
            "industry" : "Restaurants",
            "id" : 2677
          }
        }
      ],
      "_total" : 6
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_UZgaG6KvBpw-GkhVJyslG5rncy7CC3rVMpWlG5BFHVUtg5FscYSGuLidJlfg36A9sUxrDGdd4_F8",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Cook",
    "id" : "AjEGjDYQLv",
    "headline" : "Student at Fullstack Academy",
    "firstName" : "Eric",
    "emailAddress" : "ejcook111@gmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2011
          },
          "schoolName" : "State University of New York College at Plattsburgh",
          "id" : 103278384,
          "fieldOfStudy" : "Adolescence Education",
          "endDate" : {
            "year" : 2013
          },
          "degree" : "Master of Science in Teaching"
        },
        {
          "startDate" : {
            "year" : 2008
          },
          "schoolName" : "State University of New York College at Plattsburgh",
          "id" : 45405222,
          "fieldOfStudy" : "Mathematics",
          "endDate" : {
            "year" : 2011
          },
          "degree" : "Bachelor of Arts (B.A.)",
          "activities" : "Zeta Beta tau"
        }
      ],
      "_total" : 2
    },
    "dateOfBirth" : {
      "year" : 1990,
      "month" : 11,
      "day" : 1
    }
  },
  "name" : "Eric Cook",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Educational Institution",
        "size" : "1-10 employees",
        "name" : "Fullstack Academy",
        "industry" : "Internet",
        "id" : 4985867
      },
      "id" : 504577579,
      "isCurrent" : true,
      "title" : "Student",
      "startDate" : {
        "month" : 1,
        "year" : 2014
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "name" : "Gap Inc./Old Navy",
        "industry" : "Retail",
        "id" : 165295
      },
      "id" : 110125471,
      "isCurrent" : true,
      "title" : "Customer Experience Associate",
      "startDate" : {
        "month" : 6,
        "year" : 2009
      }
    },
    {
      "company" : {
        "type" : "Government Agency",
        "size" : "10,001+ employees",
        "name" : "NYC Department of Education",
        "industry" : "Education Management",
        "id" : 2905
      },
      "id" : 414011451,
      "isCurrent" : false,
      "title" : "Mathematics Teacher",
      "endDate" : {
        "month" : 1,
        "year" : 2014
      },
      "startDate" : {
        "month" : 9,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Privately Held",
        "size" : "201-500 employees",
        "name" : "Huntington Learning Center",
        "industry" : "Education Management",
        "id" : 164244
      },
      "id" : 414010812,
      "isCurrent" : false,
      "title" : "Tutor",
      "endDate" : {
        "month" : 6,
        "year" : 2013
      },
      "startDate" : {
        "month" : 4,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "SHLD",
        "name" : "Sears, Roebuck and Co.",
        "industry" : "Retail",
        "id" : 1942
      },
      "id" : 110125683,
      "isCurrent" : false,
      "title" : "Electronics Sales Associate",
      "endDate" : {
        "month" : 7,
        "year" : 2008
      },
      "startDate" : {
        "month" : 11,
        "year" : 2007
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "MCD",
        "name" : "McDonald's",
        "industry" : "Restaurants",
        "id" : 2677
      },
      "id" : 110125555,
      "isCurrent" : false,
      "title" : "Crew Coach",
      "endDate" : {
        "month" : 11,
        "year" : 2007
      },
      "startDate" : {
        "month" : 7,
        "year" : 2005
      }
    }
  ]
})

//Kelvin Yu
User.create({
  "location": 'New York',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "GDSYjeKb_Q",
    }
  ],
  "educations" : [
    {
      "degree" : "Bachelor of Business Administration (BBA)",
      "fieldOfStudy" : "Finance, General",
      "id" : 176306523,
      "schoolName" : "Boston University",
      "endDate" : {
        "year" : 2010
      },
      "startDate" : {
        "year" : 2006
      }
    },
    {
      "activities" : "Alpha Kappa Psi Professional Business Fraternity, Chinese Student Association, Boston University Mixed Martial Arts",
      "degree" : "BS",
      "fieldOfStudy" : "Finance",
      "id" : 22346625,
      "notes" : "",
      "schoolName" : "Boston University - School of Management",
      "endDate" : {
        "year" : 2010
      },
      "startDate" : {
        "year" : 2006
      }
    },
    {
      "id" : 204603991,
      "schoolName" : "Fullstack Academy",
    },
    {
      "id" : 204605358,
      "schoolName" : "Fullstack Academy",
    }
  ],
  "email" : "kyu1012@gmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 7704,
    "owned_private_repos" : 0,
    "total_private_repos" : 9,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T17:40:41Z",
    "created_at" : "2013-06-29T21:31:48Z",
    "following" : 8,
    "followers" : 4,
    "public_gists" : 0,
    "public_repos" : 12,
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/kyu1012/received_events",
    "events_url" : "https://api.github.com/users/kyu1012/events{/privacy}",
    "repos_url" : "https://api.github.com/users/kyu1012/repos",
    "organizations_url" : "https://api.github.com/users/kyu1012/orgs",
    "subscriptions_url" : "https://api.github.com/users/kyu1012/subscriptions",
    "starred_url" : "https://api.github.com/users/kyu1012/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/kyu1012/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/kyu1012/following{/other_user}",
    "followers_url" : "https://api.github.com/users/kyu1012/followers",
    "html_url" : "https://github.com/kyu1012",
    "url" : "https://api.github.com/users/kyu1012",
    "gravatar_id" : "a9e27b6a86cf2c5a869b19304f97bb73",
    "avatar_url" : "https://avatars.githubusercontent.com/u/4886387?",
    "id" : 4886387,
    "login" : "kyu1012"
  },
  "linkedin" : {
    "summary" : "Self-starter at the leading Digital Demand Side Platform, MediaMath, and enhancing the supply product suite. Learning ROR on the side!\n\nSpecialties: Comparative analysis, Company Valuation, Research Analysis, Business Development, Product Management",
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "Business Development"
          },
          "id" : 30
        },
        {
          "skill" : {
            "name" : "Product Management"
          },
          "id" : 31
        },
        {
          "skill" : {
            "name" : "Analytics"
          },
          "id" : 32
        },
        {
          "skill" : {
            "name" : "Financial Modeling"
          },
          "id" : 33
        },
        {
          "skill" : {
            "name" : "Strategic Partnerships"
          },
          "id" : 34
        },
        {
          "skill" : {
            "name" : "Research"
          },
          "id" : 35
        },
        {
          "skill" : {
            "name" : "Online Advertising"
          },
          "id" : 36
        },
        {
          "skill" : {
            "name" : "Project Management"
          },
          "id" : 37
        },
        {
          "skill" : {
            "name" : "Digital Media"
          },
          "id" : 38
        },
        {
          "skill" : {
            "name" : "Digital Strategy"
          },
          "id" : 39
        },
        {
          "skill" : {
            "name" : "Web Analytics"
          },
          "id" : 40
        },
        {
          "skill" : {
            "name" : "Start-ups"
          },
          "id" : 41
        },
        {
          "skill" : {
            "name" : "Valuation"
          },
          "id" : 42
        },
        {
          "skill" : {
            "name" : "Financial Analysis"
          },
          "id" : 43
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 44
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 45
        },
        {
          "skill" : {
            "name" : "Angularjs"
          },
          "id" : 46
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 47
        },
        {
          "skill" : {
            "name" : "Express"
          },
          "id" : 48
        },
        {
          "skill" : {
            "name" : "Ruby"
          },
          "id" : 49
        },
        {
          "skill" : {
            "name" : "Ruby on Rails"
          },
          "id" : 50
        },
        {
          "skill" : {
            "name" : "ActiveRecord"
          },
          "id" : 51
        },
        {
          "skill" : {
            "name" : "SQL"
          },
          "id" : 52
        },
        {
          "skill" : {
            "name" : "Github"
          },
          "id" : 53
        },
        {
          "skill" : {
            "name" : "Test Driven Development"
          },
          "id" : 54
        },
        {
          "skill" : {
            "name" : "Sinatra"
          },
          "id" : 55
        }
      ],
      "_total" : 26
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=25815921&authType=name&authToken=FBW2&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Cook",
          "id" : "AjEGjDYQLv",
          "firstName" : "Eric"
        },
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Maru",
          "id" : "7xiZaujHrb",
          "firstName" : "Nimit"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        },
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        },
        {
          "lastName" : "D'Alessandro",
          "id" : "WkMxcboGNL",
          "firstName" : "Scott"
        },
        {
          "lastName" : "Buchanan",
          "id" : "fGnvXFc51n",
          "firstName" : "Hannah Jane"
        },
        {
          "lastName" : "Leasia",
          "id" : "wWHDhWIVhD",
          "firstName" : "Charlotte"
        },
        {
          "lastName" : "Koo",
          "id" : "CSRTpH9PMC",
          "firstName" : "Ji Ho"
        },
        {
          "lastName" : "Dorman",
          "id" : "RA_dFGEbz-",
          "firstName" : "Kyle"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "Student",
          "summary" : "Learning to become a web developer in 3 months - HTML, CSS, JavaScript, jQuery, Ruby, Ruby on Rails.",
          "startDate" : {
            "year" : 2014,
            "month" : 1
          },
          "isCurrent" : true,
          "id" : 498640375,
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Platform Partner Operations",
          "summary" : "Account Management of supply vendors such as Google AdExchange, MSFT funded AppNexus, Rubicon, Pubmatic, among other hot media supply exchanges/platforms. \n\nProduct Management of new media tech innovations from said vendors with focus on Google AdExchange and AppNexus. Mostly, reading technical specifications, designing & project managing technical solutions/build.",
          "startDate" : {
            "year" : 2012,
            "month" : 8
          },
          "isCurrent" : true,
          "id" : 368287068,
          "company" : {
            "type" : "Privately Held",
            "size" : "51-200 employees",
            "name" : "MediaMath",
            "industry" : "Internet",
            "id" : 239341
          }
        },
        {
          "title" : "Analyst, Business Development",
          "summary" : "",
          "startDate" : {
            "year" : 2011,
            "month" : 5
          },
          "isCurrent" : false,
          "id" : 187711026,
          "endDate" : {
            "year" : 2012,
            "month" : 8
          },
          "company" : {
            "name" : "MediaMath",
            "industry" : "Internet"
          }
        },
        {
          "title" : "Analyst, Supply Operations and Data",
          "summary" : "Relationship management of RTB supply partners and data vendors.",
          "startDate" : {
            "year" : 2010,
            "month" : 7
          },
          "isCurrent" : false,
          "id" : 138774492,
          "endDate" : {
            "year" : 2011,
            "month" : 5
          },
          "company" : {
            "type" : "Privately Held",
            "name" : "MediaMath",
            "industry" : "Internet",
            "id" : 239341
          }
        },
        {
          "title" : "Business Development Analyst",
          "summary" : "•Researched the requirements of over 600 scholarships to increase the functionality of ScholarPro’s software\n•Conceptualized the ‘Non-Profit Sector’ with the CEO of ScholarPro to help organizations and individuals either create scholarships or make anonymous donations to qualified students\n•Sourced four qualified universities whose student populations in total exceeded 130,000 students",
          "startDate" : {
            "year" : 2009,
            "month" : 5
          },
          "isCurrent" : false,
          "id" : 118484800,
          "endDate" : {
            "year" : 2009,
            "month" : 7
          },
          "company" : {
            "name" : "Scholar Pro",
            "industry" : "Education Management"
          }
        }
      ],
      "_total" : 5
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_oCf8SHsPv0YW451EeTxPSEHuvZHIq5CEe5R0SEw2EOpRI3voQk0uio0GUveqBC_QITDYCDv3M--m",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Yu",
    "interests" : "Psychology/Strategy Books: 48 Laws of Power, Art of War, Telling Lies. Hip-hop choreography, Mixed Martial Arts, Boxing, Brazilian Jiu Jitsu, Chess.",
    "id" : "GDSYjeKb_Q",
    "headline" : "Student at Fullstack Academy",
    "firstName" : "Kelvin",
    "emailAddress" : "kyu1012@gmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2006
          },
          "schoolName" : "Boston University",
          "id" : 176306523,
          "fieldOfStudy" : "Finance, General",
          "endDate" : {
            "year" : 2010
          },
          "degree" : "Bachelor of Business Administration (BBA)"
        },
        {
          "startDate" : {
            "year" : 2006
          },
          "schoolName" : "Boston University - School of Management",
          "notes" : "",
          "id" : 22346625,
          "fieldOfStudy" : "Finance",
          "endDate" : {
            "year" : 2010
          },
          "degree" : "BS",
          "activities" : "Alpha Kappa Psi Professional Business Fraternity, Chinese Student Association, Boston University Mixed Martial Arts"
        },
        {
          "schoolName" : "Fullstack Academy",
          "id" : 204603991
        },
        {
          "schoolName" : "Fullstack Academy",
          "id" : 204605358
        }
      ],
      "_total" : 4
    },
    "dateOfBirth" : {
      "year" : 1988,
      "month" : 10,
      "day" : 12
    }
  },
  "name" : "Kelvin Yu",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Educational Institution",
        "size" : "1-10 employees",
        "name" : "Fullstack Academy",
        "industry" : "Internet",
        "id" : 4985867
      },
      "id" : 498640375,
      "isCurrent" : true,
      "title" : "Student",
      "startDate" : {
        "month" : 1,
        "year" : 2014
      }
    },
    {
      "company" : {
        "type" : "Privately Held",
        "size" : "51-200 employees",
        "name" : "MediaMath",
        "industry" : "Internet",
        "id" : 239341
      },
      "id" : 368287068,
      "isCurrent" : true,
      "title" : "Platform Partner Operations",
      "startDate" : {
        "month" : 8,
        "year" : 2012
      }
    },
    {
      "company" : {
        "name" : "MediaMath",
        "industry" : "Internet"
      },
      "id" : 187711026,
      "isCurrent" : false,
      "title" : "Analyst, Business Development",
      "endDate" : {
        "month" : 8,
        "year" : 2012
      },
      "startDate" : {
        "month" : 5,
        "year" : 2011
      }
    },
    {
      "company" : {
        "type" : "Privately Held",
        "name" : "MediaMath",
        "industry" : "Internet",
        "id" : 239341
      },
      "id" : 138774492,
      "isCurrent" : false,
      "title" : "Analyst, Supply Operations and Data",
      "endDate" : {
        "month" : 5,
        "year" : 2011
      },
      "startDate" : {
        "month" : 7,
        "year" : 2010
      }
    },
    {
      "company" : {
        "name" : "Scholar Pro",
        "industry" : "Education Management"
      },
      "id" : 118484800,
      "isCurrent" : false,
      "title" : "Business Development Analyst",
      "endDate" : {
        "month" : 7,
        "year" : 2009
      },
      "startDate" : {
        "month" : 5,
        "year" : 2009
      }
    }
  ]
})

//Lauren Ashpole
User.create({
  "location": 'New York',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "G_psXT4Atc",
    }
  ],
  "educations" : [
    {
      "degree" : "Bachelor of Arts (B.A.)",
      "fieldOfStudy" : "English Literature (British and Commonwealth)",
      "id" : 165058454,
      "schoolName" : "UC Irvine",
      "endDate" : {
        "year" : 2007
      }
    }
  ],
  "email" : "lauren@laurenashpole.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 12518,
    "owned_private_repos" : 0,
    "total_private_repos" : 10,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T19:42:09Z",
    "created_at" : "2013-09-16T17:31:55Z",
    "following" : 2,
    "followers" : 3,
    "public_gists" : 0,
    "public_repos" : 10,
    "bio" : null,
    "hireable" : false,
    "email" : "lauren@laurenashpole.com",
    "location" : "",
    "blog" : "",
    "company" : "",
    "name" : "Lauren Ashpole",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/laurenashpole/received_events",
    "events_url" : "https://api.github.com/users/laurenashpole/events{/privacy}",
    "repos_url" : "https://api.github.com/users/laurenashpole/repos",
    "organizations_url" : "https://api.github.com/users/laurenashpole/orgs",
    "subscriptions_url" : "https://api.github.com/users/laurenashpole/subscriptions",
    "starred_url" : "https://api.github.com/users/laurenashpole/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/laurenashpole/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/laurenashpole/following{/other_user}",
    "followers_url" : "https://api.github.com/users/laurenashpole/followers",
    "html_url" : "https://github.com/laurenashpole",
    "url" : "https://api.github.com/users/laurenashpole",
    "gravatar_id" : "58387d0119271e2c6c25940ec208c595",
    "avatar_url" : "https://avatars.githubusercontent.com/u/5471778?",
    "id" : 5471778,
    "login" : "laurenashpole"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "HTML 5"
          },
          "id" : 18
        },
        {
          "skill" : {
            "name" : "jQuery"
          },
          "id" : 19
        },
        {
          "skill" : {
            "name" : "Photoshop"
          },
          "id" : 20
        },
        {
          "skill" : {
            "name" : "Illustrator"
          },
          "id" : 21
        },
        {
          "skill" : {
            "name" : "CSS3"
          },
          "id" : 22
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 23
        }
      ],
      "_total" : 6
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=242600319&authType=name&authToken=sRXz&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Brennan",
          "id" : "jneLfIxkN_",
          "firstName" : "Jackie"
        },
        {
          "lastName" : "Hendricks Jr.",
          "id" : "nN37FpN-Q4",
          "firstName" : "Patricio"
        },
        {
          "lastName" : "Tan",
          "id" : "Mp9tRyZgp4",
          "firstName" : "Neil"
        },
        {
          "lastName" : "D.",
          "id" : "hftGLM3MU8",
          "firstName" : "Brian"
        },
        {
          "lastName" : "Jordan",
          "id" : "g2odq2njhO",
          "firstName" : "Clif"
        },
        {
          "lastName" : "A.",
          "id" : "1zSVx3R3xl",
          "firstName" : "Eric"
        },
        {
          "lastName" : "Shans",
          "id" : "EBqfoGeXZG",
          "firstName" : "Eric"
        },
        {
          "lastName" : "Vega",
          "id" : "yKnKBU4PB2",
          "firstName" : "Durlan"
        },
        {
          "lastName" : "Flynn",
          "id" : "-omUKw6ijh",
          "firstName" : "Brandon"
        },
        {
          "lastName" : "W.",
          "id" : "ID8ZPegqsD",
          "firstName" : "Jeffrey"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "Freelance Front-End Web Developer",
          "summary" : "PSD Conversion\nCreating handcoded themes for Tumblr utilizing HTML5, CSS3, and jQuery • Integration of social networking widgets including Facebook and Twitter • Testing for cross-broswer compatibility\n\nWordPress Customization\nProducing page templates consistent with existing styles and functionality • Setting up, editing, and styling plugins and widgets\n\nMobile Compatibility\nUpdating existing themes using media queries to ensure responsive, mobile friendly design",
          "startDate" : {
            "year" : 2009,
            "month" : 2
          },
          "isCurrent" : true,
          "id" : 379444641,
          "company" : {
            "name" : "Self Employed",
            "industry" : "Financial Services"
          }
        },
        {
          "title" : "Font Designer & Retailer",
          "summary" : "Creating hand illustrated and computer generated lettering • Designing and maintaining responsive e-commerce site • Customer technical and licensing support",
          "startDate" : {
            "year" : 2008,
            "month" : 7
          },
          "isCurrent" : true,
          "id" : 379444802,
          "company" : {
            "name" : "laurenashpole.com",
            "industry" : "Financial Services"
          }
        },
        {
          "title" : "Administrative Assistant",
          "summary" : "Assistant to Managing Directors and Accountants at boutique financial management firm • Payment processing and contract preparation • Ordering and accounts payable reconciliation",
          "startDate" : {
            "year" : 2009,
            "month" : 3
          },
          "isCurrent" : false,
          "id" : 379444504,
          "endDate" : {
            "year" : 2013,
            "month" : 8
          },
          "company" : {
            "name" : "KLS Professional Advisors",
            "industry" : "Financial Services"
          }
        }
      ],
      "_total" : 3
    },
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Ashpole",
    "id" : "G_psXT4Atc",
    "headline" : "Student Fullstack Academy",
    "firstName" : "Lauren",
    "emailAddress" : "lauren@laurenashpole.com",
    "educations" : {
      "values" : [
        {
          "schoolName" : "UC Irvine",
          "id" : 165058454,
          "fieldOfStudy" : "English Literature (British and Commonwealth)",
          "endDate" : {
            "year" : 2007
          },
          "degree" : "Bachelor of Arts (B.A.)"
        }
      ],
      "_total" : 1
    }
  },
  "name" : "Lauren Ashpole",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "name" : "Self Employed",
        "industry" : "Financial Services"
      },
      "id" : 379444641,
      "isCurrent" : true,
      "title" : "Freelance Front-End Web Developer",
      "startDate" : {
        "month" : 2,
        "year" : 2009
      }
    },
    {
      "company" : {
        "name" : "laurenashpole.com",
        "industry" : "Financial Services"
      },
      "id" : 379444802,
      "isCurrent" : true,
      "title" : "Font Designer & Retailer",
      "startDate" : {
        "month" : 7,
        "year" : 2008
      }
    },
    {
      "company" : {
        "name" : "KLS Professional Advisors",
        "industry" : "Financial Services"
      },
      "id" : 379444504,
      "isCurrent" : false,
      "title" : "Administrative Assistant",
      "endDate" : {
        "month" : 8,
        "year" : 2013
      },
      "startDate" : {
        "month" : 3,
        "year" : 2009
      }
    }
  ]
})


//Jaclyn Tsui
User.create({
  "location": 'Hong Kong',
  "relocate": true,

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "JmCfHALEkj",
    }
  ],
  "educations" : [
    {
      "degree" : "",
      "fieldOfStudy" : "Software Development",
      "id" : 203997702,
      "schoolName" : "Fullstack Academy",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2014
      }
    },
    {
      "degree" : "Master of Science (MSc)",
      "fieldOfStudy" : "Real Estate",
      "id" : 206782944,
      "schoolName" : "The University of Hong Kong",
      "endDate" : {
        "year" : 2011
      },
      "startDate" : {
        "year" : 2010
      }
    },
    {
      "activities" : "SIFE",
      "degree" : "BSc",
      "fieldOfStudy" : "Joint Honors Biology and Management",
      "id" : 47405908,
      "schoolName" : "Imperial College London",
      "endDate" : {
        "year" : 2008
      },
      "startDate" : {
        "year" : 2005
      }
    }
  ],
  "email" : "jac_2685@hotmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 49812,
    "owned_private_repos" : 0,
    "total_private_repos" : 8,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T21:55:48Z",
    "created_at" : "2013-02-24T20:48:01Z",
    "following" : 5,
    "followers" : 3,
    "public_gists" : 0,
    "public_repos" : 9,
    "bio" : null,
    "hireable" : false,
    "email" : null,
    "location" : "Hong Kong",
    "blog" : null,
    "company" : null,
    "name" : null,
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/jaclyntsui/received_events",
    "events_url" : "https://api.github.com/users/jaclyntsui/events{/privacy}",
    "repos_url" : "https://api.github.com/users/jaclyntsui/repos",
    "organizations_url" : "https://api.github.com/users/jaclyntsui/orgs",
    "subscriptions_url" : "https://api.github.com/users/jaclyntsui/subscriptions",
    "starred_url" : "https://api.github.com/users/jaclyntsui/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/jaclyntsui/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/jaclyntsui/following{/other_user}",
    "followers_url" : "https://api.github.com/users/jaclyntsui/followers",
    "html_url" : "https://github.com/jaclyntsui",
    "url" : "https://api.github.com/users/jaclyntsui",
    "gravatar_id" : "8fa69cbf3b09e19a870dfdfbe9b8ecc3",
    "avatar_url" : "https://avatars.githubusercontent.com/u/3687874?",
    "id" : 3687874,
    "login" : "jaclyntsui"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "HTML"
          },
          "id" : 47
        },
        {
          "skill" : {
            "name" : "CSS"
          },
          "id" : 48
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 49
        },
        {
          "skill" : {
            "name" : "MySQL"
          },
          "id" : 50
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 51
        },
        {
          "skill" : {
            "name" : "AngularJS"
          },
          "id" : 52
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 53
        },
        {
          "skill" : {
            "name" : "SASS"
          },
          "id" : 54
        },
        {
          "skill" : {
            "name" : "Ruby on Rails"
          },
          "id" : 55
        },
        {
          "skill" : {
            "name" : "Microsoft Excel"
          },
          "id" : 56
        },
        {
          "skill" : {
            "name" : "Illustrator"
          },
          "id" : 57
        },
        {
          "skill" : {
            "name" : "Photoshop"
          },
          "id" : 58
        }
      ],
      "_total" : 12
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=53366181&authType=name&authToken=_k3i&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        },
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Koo",
          "id" : "CSRTpH9PMC",
          "firstName" : "Ji Ho"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        },
        {
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Pazmiño",
          "id" : "En1mNn2tQC",
          "firstName" : "Luis"
        },
        {
          "lastName" : "D'Alessandro",
          "id" : "WkMxcboGNL",
          "firstName" : "Scott"
        },
        {
          "lastName" : "Zaman",
          "id" : "PvmfqY724t",
          "firstName" : "Jisan"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "Managing Director",
          "summary" : "Private family office investment company based in Hong Kong. Main investment focus include oil exploration, real estate, education, healthcare, consumer brands and early stage tech companies based in US, UK, Europe, Canada and Asia.",
          "startDate" : {
            "year" : 2011,
            "month" : 6
          },
          "isCurrent" : true,
          "id" : 213653463,
          "company" : {
            "name" : "Arbutus Capital Partners Ltd",
            "industry" : "Investment Management"
          }
        },
        {
          "title" : "Product Manager",
          "summary" : "Techstars Nike+ Accelerator attendee",
          "startDate" : {
            "year" : 2013,
            "month" : 3
          },
          "isCurrent" : false,
          "id" : 393214943,
          "endDate" : {
            "year" : 2013,
            "month" : 6
          },
          "company" : {
            "name" : "Coachbase",
            "industry" : "Computer Software"
          }
        },
        {
          "title" : "Associate",
          "summary" : "Private equity residential and commercial real estate investments in Mainland China.",
          "startDate" : {
            "year" : 2008
          },
          "isCurrent" : false,
          "id" : 213653775,
          "endDate" : {
            "year" : 2010
          },
          "company" : {
            "name" : "Landsdown Investment Ltd",
            "industry" : "Investment Management"
          }
        }
      ],
      "_total" : 3
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_FfbQYouw2v4dw4GS5mFvYWdEhKoJIUGSLaPJYWmR0POdq0zDwdBErdVza4E6eyiT625ZlayoOG2R",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Tsui",
    "languages" : {
      "values" : [
        {
          "language" : {
            "name" : "English"
          },
          "id" : 16
        },
        {
          "language" : {
            "name" : "Mandarin"
          },
          "id" : 17
        },
        {
          "language" : {
            "name" : "Cantonese"
          },
          "id" : 39
        },
        {
          "language" : {
            "name" : "French"
          },
          "id" : 42
        }
      ],
      "_total" : 4
    },
    "interests" : "Design, photography, technology, typography, business operations, product management",
    "id" : "JmCfHALEkj",
    "headline" : "Student at Fullstack Academy",
    "firstName" : "Jaclyn",
    "emailAddress" : "jac_2685@hotmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2014
          },
          "schoolName" : "Fullstack Academy",
          "id" : 203997702,
          "fieldOfStudy" : "Software Development",
          "endDate" : {
            "year" : 2014
          },
          "degree" : ""
        },
        {
          "startDate" : {
            "year" : 2010
          },
          "schoolName" : "The University of Hong Kong",
          "id" : 206782944,
          "fieldOfStudy" : "Real Estate",
          "endDate" : {
            "year" : 2011
          },
          "degree" : "Master of Science (MSc)"
        },
        {
          "startDate" : {
            "year" : 2005
          },
          "schoolName" : "Imperial College London",
          "id" : 47405908,
          "fieldOfStudy" : "Joint Honors Biology and Management",
          "endDate" : {
            "year" : 2008
          },
          "degree" : "BSc",
          "activities" : "SIFE"
        }
      ],
      "_total" : 3
    },
    "dateOfBirth" : {
      "year" : 1985
    }
  },
  "name" : "Jaclyn Tsui",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "name" : "Arbutus Capital Partners Ltd",
        "industry" : "Investment Management"
      },
      "id" : 213653463,
      "isCurrent" : true,
      "title" : "Managing Director",
      "startDate" : {
        "month" : 6,
        "year" : 2011
      }
    },
    {
      "company" : {
        "name" : "Coachbase",
        "industry" : "Computer Software"
      },
      "id" : 393214943,
      "isCurrent" : false,
      "title" : "Product Manager",
      "endDate" : {
        "month" : 6,
        "year" : 2013
      },
      "startDate" : {
        "month" : 3,
        "year" : 2013
      }
    },
    {
      "company" : {
        "name" : "Landsdown Investment Ltd",
        "industry" : "Investment Management"
      },
      "id" : 213653775,
      "isCurrent" : false,
      "title" : "Associate",
      "endDate" : {
        "year" : 2010
      },
      "startDate" : {
        "year" : 2008
      }
    }
  ]
})

//James Drury
User.create({
  "location": 'New York',
  "relocate": true,
  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "hne4Az6W6H",
    }
  ],
  "educations" : [
    {
      "id" : 208852519,
      "notes" : "Fullstack Academy is an immersive, full-time course in web development offered in New York City.",
      "schoolName" : "Fullstack Academy of Code",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2014
      }
    },
    {
      "fieldOfStudy" : "Web Developer Apprenticeship",
      "id" : 208854254,
      "notes" : "Twelve-week crash course in web development. Focused on Ruby and Ruby on Rails. Also covered version control (Git) and deployment with Heroku.",
      "schoolName" : "Bloc.io",
      "endDate" : {
        "year" : 2013
      },
      "startDate" : {
        "year" : 2013
      }
    },
    {
      "activities" : "Graduate Assistant at Providence College Center for Catholic and Dominican Studies. Member of Phi Alpha Theta History Honor Society. Graduated Summa Cum Laude.",
      "degree" : "Master of Arts (M.A.)",
      "fieldOfStudy" : "Modern European History",
      "id" : 208852395,
      "schoolName" : "Providence College",
      "endDate" : {
        "year" : 2011
      },
      "startDate" : {
        "year" : 2009
      }
    },
    {
      "degree" : "Bachelor of Arts (B.A.)",
      "fieldOfStudy" : "History",
      "id" : 208852404,
      "schoolName" : "Providence College",
      "endDate" : {
        "year" : 2009
      },
      "startDate" : {
        "year" : 2005
      }
    }
  ],
  "email" : "jdrury86@gmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 131208,
    "owned_private_repos" : 0,
    "total_private_repos" : 4,
    "private_gists" : 2,
    "updated_at" : "2014-03-27T13:24:16Z",
    "created_at" : "2013-09-10T22:30:17Z",
    "following" : 20,
    "followers" : 7,
    "public_gists" : 0,
    "public_repos" : 12,
    "bio" : null,
    "hireable" : false,
    "email" : "jdrury86@gmail.com",
    "location" : "NYC",
    "blog" : "http://jdrur.com",
    "company" : "",
    "name" : "James Drury",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/jamesdrury/received_events",
    "events_url" : "https://api.github.com/users/jamesdrury/events{/privacy}",
    "repos_url" : "https://api.github.com/users/jamesdrury/repos",
    "organizations_url" : "https://api.github.com/users/jamesdrury/orgs",
    "subscriptions_url" : "https://api.github.com/users/jamesdrury/subscriptions",
    "starred_url" : "https://api.github.com/users/jamesdrury/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/jamesdrury/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/jamesdrury/following{/other_user}",
    "followers_url" : "https://api.github.com/users/jamesdrury/followers",
    "html_url" : "https://github.com/jamesdrury",
    "url" : "https://api.github.com/users/jamesdrury",
    "gravatar_id" : "c0168c2ceec4e5fa35a8268cec6d4d2b",
    "avatar_url" : "https://avatars.githubusercontent.com/u/5431100?",
    "id" : 5431100,
    "login" : "jamesdrury"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 21
        },
        {
          "skill" : {
            "name" : "Web Developers"
          },
          "id" : 22
        },
        {
          "skill" : {
            "name" : "Creative Writing"
          },
          "id" : 23
        },
        {
          "skill" : {
            "name" : "Ruby"
          },
          "id" : 24
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 25
        },
        {
          "skill" : {
            "name" : "Ruby on Rails"
          },
          "id" : 26
        },
        {
          "skill" : {
            "name" : "Teaching"
          },
          "id" : 27
        },
        {
          "skill" : {
            "name" : "Social Media"
          },
          "id" : 28
        }
      ],
      "_total" : 8
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=277252314&authType=name&authToken=caKV&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Cook",
          "id" : "AjEGjDYQLv",
          "firstName" : "Eric"
        },
        {
          "lastName" : "Xiang",
          "id" : "0CbQxKE7yn",
          "firstName" : "Tong"
        },
        {
          "lastName" : "Pazmiño",
          "id" : "En1mNn2tQC",
          "firstName" : "Luis"
        },
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        },
        {
          "lastName" : "Buchanan",
          "id" : "fGnvXFc51n",
          "firstName" : "Hannah Jane"
        },
        {
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "values" : [
        {
          "title" : "Student",
          "isCurrent" : true,
          "id" : 514073362,
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Co-Director of Education Program",
          "summary" : "• Designed and deployed remedial education program for two hundred plus underprivileged children from Greater New York area.\n• Developed and implemented creative writing comic book curriculum for 10 year olds.\n• Organized and facilitated leadership seminar for rising ninth graders, SAT prep for rising eleventh graders and remedial literacy program for children ages ten to sixteen.",
          "startDate" : {
            "year" : 2013,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 427716125,
          "endDate" : {
            "year" : 2013,
            "month" : 8
          },
          "company" : {
            "name" : "Morry's Camp, Project Morry",
            "industry" : "Nonprofit Organization Management",
            "id" : 1989443
          }
        },
        {
          "title" : "Dairyhand",
          "summary" : "• Responsible for milking, setting up feed breaks, feeding out with tractor and monitoring cow health.\n• Mastered the four main cycles of dairy farming: calving, artificial insemination, once-a-day milking, drying off.",
          "startDate" : {
            "year" : 2012,
            "month" : 9
          },
          "isCurrent" : false,
          "id" : 514089961,
          "endDate" : {
            "year" : 2013,
            "month" : 4
          },
          "company" : {
            "name" : "Glencairn",
            "industry" : "Computer Software"
          }
        },
        {
          "title" : "Shepherd",
          "summary" : "• Worked full time at an iconic sheep station in the high country of Central Otago.\n• Assisted head shepherd in mustering and maintenance of livestock, including sheep, deer and cattle beasts.",
          "startDate" : {
            "year" : 2012,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 514092290,
          "endDate" : {
            "year" : 2012,
            "month" : 9
          },
          "company" : {
            "name" : "Glen Dene Station",
            "industry" : "Computer Software"
          }
        },
        {
          "title" : "Communications Coordinator",
          "summary" : "• Primary media contact for the nation’s largest nonprofit for new war veterans. Directly assisted Communications Director with messaging and media pitches.\n• Crafted social media messaging for multiple Twitter and Facebook accounts. Drafted a “Daily News Brief” for 4,000 member audience.\n• Excelled at transforming complicated policy points into concise, creative messaging.",
          "startDate" : {
            "year" : 2011,
            "month" : 9
          },
          "isCurrent" : false,
          "id" : 439331927,
          "endDate" : {
            "year" : 2012,
            "month" : 6
          },
          "company" : {
            "type" : "Nonprofit",
            "size" : "11-50 employees",
            "name" : "Iraq and Afghanistan Veterans of America (IAVA)",
            "industry" : "Nonprofit Organization Management",
            "id" : 394616
          }
        },
        {
          "title" : "Communications Intern",
          "startDate" : {
            "year" : 2011,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 514821971,
          "endDate" : {
            "year" : 2011,
            "month" : 9
          },
          "company" : {
            "type" : "Nonprofit",
            "size" : "11-50 employees",
            "name" : "Iraq and Afghanistan Veterans of America (IAVA)",
            "industry" : "Nonprofit Organization Management",
            "id" : 394616
          }
        }
      ],
      "_total" : 6
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_FfbQYoDRCra4WU-SFWnvYWyEhno4IUGS5HPJYWmR0POdq0zDwdBErdVza4E6eyiT625ZlaKoXLHR",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Drury",
    "interests" : "Software development, version control, web development, web design, literature, history, international affairs, teaching",
    "id" : "hne4Az6W6H",
    "headline" : "Student at Fullstack Academy, Journeyman Web Developer",
    "firstName" : "James",
    "emailAddress" : "jdrury86@gmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2014
          },
          "schoolName" : "Fullstack Academy of Code",
          "notes" : "Fullstack Academy is an immersive, full-time course in web development offered in New York City.",
          "id" : 208852519,
          "endDate" : {
            "year" : 2014
          }
        },
        {
          "startDate" : {
            "year" : 2013
          },
          "schoolName" : "Bloc.io",
          "notes" : "Twelve-week crash course in web development. Focused on Ruby and Ruby on Rails. Also covered version control (Git) and deployment with Heroku.",
          "id" : 208854254,
          "fieldOfStudy" : "Web Developer Apprenticeship",
          "endDate" : {
            "year" : 2013
          }
        },
        {
          "startDate" : {
            "year" : 2009
          },
          "schoolName" : "Providence College",
          "id" : 208852395,
          "fieldOfStudy" : "Modern European History",
          "endDate" : {
            "year" : 2011
          },
          "degree" : "Master of Arts (M.A.)",
          "activities" : "Graduate Assistant at Providence College Center for Catholic and Dominican Studies. Member of Phi Alpha Theta History Honor Society. Graduated Summa Cum Laude."
        },
        {
          "startDate" : {
            "year" : 2005
          },
          "schoolName" : "Providence College",
          "id" : 208852404,
          "fieldOfStudy" : "History",
          "endDate" : {
            "year" : 2009
          },
          "degree" : "Bachelor of Arts (B.A.)"
        }
      ],
      "_total" : 4
    }
  },
  "name" : "James Drury",
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Educational Institution",
        "size" : "1-10 employees",
        "name" : "Fullstack Academy",
        "industry" : "Internet",
        "id" : 4985867
      },
      "id" : 514073362,
      "isCurrent" : true,
      "title" : "Student",
    },
    {
      "company" : {
        "name" : "Morry's Camp, Project Morry",
        "industry" : "Nonprofit Organization Management",
        "id" : 1989443
      },
      "id" : 427716125,
      "isCurrent" : false,
      "title" : "Co-Director of Education Program",
      "endDate" : {
        "month" : 8,
        "year" : 2013
      },
      "startDate" : {
        "month" : 6,
        "year" : 2013
      }
    },
    {
      "company" : {
        "name" : "Glencairn",
        "industry" : "Computer Software"
      },
      "id" : 514089961,
      "isCurrent" : false,
      "title" : "Dairyhand",
      "endDate" : {
        "month" : 4,
        "year" : 2013
      },
      "startDate" : {
        "month" : 9,
        "year" : 2012
      }
    },
    {
      "company" : {
        "name" : "Glen Dene Station",
        "industry" : "Computer Software"
      },
      "id" : 514092290,
      "isCurrent" : false,
      "title" : "Shepherd",
      "endDate" : {
        "month" : 9,
        "year" : 2012
      },
      "startDate" : {
        "month" : 6,
        "year" : 2012
      }
    },
    {
      "company" : {
        "type" : "Nonprofit",
        "size" : "11-50 employees",
        "name" : "Iraq and Afghanistan Veterans of America (IAVA)",
        "industry" : "Nonprofit Organization Management",
        "id" : 394616
      },
      "id" : 439331927,
      "isCurrent" : false,
      "title" : "Communications Coordinator",
      "endDate" : {
        "month" : 6,
        "year" : 2012
      },
      "startDate" : {
        "month" : 9,
        "year" : 2011
      }
    },
    {
      "company" : {
        "type" : "Nonprofit",
        "size" : "11-50 employees",
        "name" : "Iraq and Afghanistan Veterans of America (IAVA)",
        "industry" : "Nonprofit Organization Management",
        "id" : 394616
      },
      "id" : 514821971,
      "isCurrent" : false,
      "title" : "Communications Intern",
      "endDate" : {
        "month" : 9,
        "year" : 2011
      },
      "startDate" : {
        "month" : 6,
        "year" : 2011
      }
    }
  ]
})

//Ji Hoo Kim (Tom's Data)
User.create({
 "location": 'New York',
  "relocate": true,
  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "CSRTpH9PMC",
    }
  ],
  "educations" : [
    {
      "activities" : "Dean's List, NYU CEDA Debate Team, ECAASU, NYU AEI Executive Council",
      "degree" : "Bachelor of Arts (B.A.)",
      "fieldOfStudy" : "Economics/Politics/Computer Science",
      "id" : 99687789,
      "schoolName" : "New York University",
      "endDate" : {
        "year" : 2015
      },
      "startDate" : {
        "year" : 2011
      }
    }
  ],
  "email" : "jihokoo@gmail.com",
  "events" : [ ],
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 13164,
    "owned_private_repos" : 0,
    "total_private_repos" : 6,
    "private_gists" : 0,
    "updated_at" : "2014-03-29T20:28:13Z",
    "created_at" : "2012-10-21T18:53:35Z",
    "following" : 6,
    "followers" : 10,
    "public_gists" : 0,
    "public_repos" : 15,
    "bio" : null,
    "hireable" : true,
    "email" : "jihokoo@gmail.com",
    "location" : "New York, New York",
    "blog" : "https://twitter.com/jihokoo",
    "company" : "",
    "name" : "Ji Ho Koo",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/jihokoo/received_events",
    "events_url" : "https://api.github.com/users/jihokoo/events{/privacy}",
    "repos_url" : "https://api.github.com/users/jihokoo/repos",
    "organizations_url" : "https://api.github.com/users/jihokoo/orgs",
    "subscriptions_url" : "https://api.github.com/users/jihokoo/subscriptions",
    "starred_url" : "https://api.github.com/users/jihokoo/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/jihokoo/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/jihokoo/following{/other_user}",
    "followers_url" : "https://api.github.com/users/jihokoo/followers",
    "html_url" : "https://github.com/jihokoo",
    "url" : "https://api.github.com/users/jihokoo",
    "gravatar_id" : "96b8a16a648f888a66b9c82299537df2",
    "avatar_url" : "https://avatars.githubusercontent.com/u/2614565?",
    "id" : 2614565,
    "login" : "jihokoo"
  },
  "interested" : [ ],
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 31
        },
        {
          "skill" : {
            "name" : "Node.js"
          },
          "id" : 32
        },
        {
          "skill" : {
            "name" : "Express"
          },
          "id" : 33
        },
        {
          "skill" : {
            "name" : "AngularJS"
          },
          "id" : 34
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 35
        },
        {
          "skill" : {
            "name" : "Ruby"
          },
          "id" : 36
        },
        {
          "skill" : {
            "name" : "jQuery"
          },
          "id" : 37
        },
        {
          "skill" : {
            "name" : "CSS"
          },
          "id" : 38
        },
        {
          "skill" : {
            "name" : "HTML"
          },
          "id" : 39
        }
      ],
      "_total" : 9
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=168614628&authType=name&authToken=Mz6T&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
        },
        {
          "lastName" : "Yu",
          "id" : "GDSYjeKb_Q",
          "firstName" : "Kelvin"
        },
        {
          "lastName" : "Pazmiño",
          "id" : "En1mNn2tQC",
          "firstName" : "Luis"
        },
        {
          "lastName" : "Xiang",
          "id" : "0CbQxKE7yn",
          "firstName" : "Tong"
        },
        {
          "lastName" : "Tsui",
          "id" : "JmCfHALEkj",
          "firstName" : "Jaclyn"
        },
        {
          "lastName" : "Ingram",
          "id" : "buLJshkhKq",
          "firstName" : "Russell"
        },
        {
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Kim",
          "id" : "f3MHAVxhZP",
          "firstName" : "Howard Jin"
        },
        {
          "lastName" : "D'Alessandro",
          "id" : "WkMxcboGNL",
          "firstName" : "Scott"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "primaryTwitterAccount" : {
      "providerAccountName" : "jihokoo",
      "providerAccountId" : "1931356736"
    },
    "positions" : {
      "values" : [
        {
          "title" : "Software Developer",
          "startDate" : {
            "year" : 2014
          },
          "isCurrent" : false,
          "id" : 517110966,
          "endDate" : {
            "year" : 2014
          },
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Investment Analyst Intern",
          "startDate" : {
            "year" : 2013,
            "month" : 6
          },
          "isCurrent" : false,
          "id" : 515127218,
          "endDate" : {
            "year" : 2013,
            "month" : 8
          },
          "company" : {
            "name" : "Pomona Capital",
            "industry" : "International Affairs"
          }
        },
        {
          "title" : "Summer Analyst",
          "startDate" : {
            "year" : 2011
          },
          "isCurrent" : false,
          "id" : 323426731,
          "endDate" : {
            "year" : 2011
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "AZ",
            "size" : "1001-5000 employees",
            "name" : "Allianz Global Investors",
            "industry" : "Investment Management",
            "id" : 7475
          }
        }
      ],
      "_total" : 3
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_HAcsUdbA_TRZOpZuH-bWUwq873edYpZuQviLUw6AKXy4TZ72kcFnzIt0T7HcjRM8d-zkN2Z5vk_X",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Koo",
    "languages" : {
      "values" : [
        {
          "language" : {
            "name" : "English"
          },
          "id" : 14
        },
        {
          "language" : {
            "name" : "Korean"
          },
          "id" : 15
        },
        {
          "language" : {
            "name" : "Chinese"
          },
          "id" : 16
        }
      ],
      "_total" : 3
    },
    "interests" : "Programming",
    "id" : "CSRTpH9PMC",
    "honorsAwards" : {
      "values" : [
        {
          "name" : "Dean's List",
          "issuer" : "New York University",
          "id" : 11
        },
        {
          "name" : "AMC Accenture Consulting Case Competition",
          "issuer" : "Accenture",
          "id" : 12
        },
        {
          "name" : "Data Privacy Legal Hackathon",
          "issuer" : "Legal Hackers, Hacker League",
          "id" : 13
        }
      ],
      "_total" : 3
    },
    "headline" : "Student at New York University",
    "firstName" : "Ji Ho",
    "emailAddress" : "jihokoo@gmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2011
          },
          "schoolName" : "New York University",
          "id" : 99687789,
          "fieldOfStudy" : "Economics/Politics/Computer Science",
          "endDate" : {
            "year" : 2015
          },
          "degree" : "Bachelor of Arts (B.A.)",
          "activities" : "Dean's List, NYU CEDA Debate Team, ECAASU, NYU AEI Executive Council"
        }
      ],
      "_total" : 1
    }
  },

  "name" : "Ji Ho Koo",
  "projects" : [ ],
  "roles" : [
    "developer"
  ],
  "work_experiences" : [
    {
      "company" : {
        "type" : "Educational Institution",
        "size" : "1-10 employees",
        "name" : "Fullstack Academy",
        "industry" : "Internet",
        "id" : 4985867
      },
      "id" : 517110966,
      "isCurrent" : false,
      "title" : "Software Developer",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2014
      }
    },
    {
      "company" : {
        "name" : "Pomona Capital",
        "industry" : "International Affairs"
      },
      "id" : 515127218,
      "isCurrent" : false,
      "title" : "Investment Analyst Intern",
      "endDate" : {
        "month" : 8,
        "year" : 2013
      },
      "startDate" : {
        "month" : 6,
        "year" : 2013
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "AZ",
        "size" : "1001-5000 employees",
        "name" : "Allianz Global Investors",
        "industry" : "Investment Management",
        "id" : 7475
      },
      "id" : 323426731,
      "isCurrent" : false,
      "title" : "Summer Analyst",
      "endDate" : {
        "year" : 2011
      },
      "startDate" : {
        "year" : 2011
      }
    }
  ]
})

//Jisan data
// User.create({
//   "location": 'New York',
//   "relocate": true,
//   "auth_methods" : [
//     {
//       "provider" : "linkedin",
//       "providerId" : "PvmfqY724t",

//     }
//   ],
//   "educations" : [
//     {
//       "fieldOfStudy" : "Web Development",
//       "id" : 204678887,
//       "schoolName" : "Fullstack Academy of Code",
//       "endDate" : {
//         "year" : 2014
//       },
//       "startDate" : {
//         "year" : 2014
//       }
//     },
//     {
//       "degree" : "Bachelors",
//       "fieldOfStudy" : "History",
//       "id" : 74426792,
//       "schoolName" : "Wesleyan University",
//       "endDate" : {
//         "year" : 2012
//       },
//       "startDate" : {
//         "year" : 2008
//       }
//     },
//     {
//       "id" : 81501045,
//       "notes" : "",
//       "schoolName" : "Stuyvesant High School",
//       "endDate" : {
//         "year" : 2008
//       },
//       "startDate" : {
//         "year" : 2005
//       }
//     }
//   ],
//   "email" : "jzaman@wesleyan.edu",
//   "github" : {
//     "plan" : {
//       "private_repos" : 0,
//       "collaborators" : 0,
//       "space" : 307200,
//       "name" : "free"
//     },
//     "collaborators" : 0,
//     "disk_usage" : 89065,
//     "owned_private_repos" : 0,
//     "total_private_repos" : 11,
//     "private_gists" : 1,
//     "updated_at" : "2014-03-25T16:07:33Z",
//     "created_at" : "2013-05-22T16:40:57Z",
//     "following" : 29,
//     "followers" : 12,
//     "public_gists" : 15,
//     "public_repos" : 36,
//     "bio" : null,
//     "hireable" : true,
//     "email" : "jzaman@wesleyan.edu",
//     "location" : "New York, NY",
//     "blog" : "jisan-octopress.herokuapp.com",
//     "company" : "",
//     "name" : "Jisan Zaman",
//     "site_admin" : false,
//     "type" : "User",
//     "received_events_url" : "https://api.github.com/users/Superjisan/received_events",
//     "events_url" : "https://api.github.com/users/Superjisan/events{/privacy}",
//     "repos_url" : "https://api.github.com/users/Superjisan/repos",
//     "organizations_url" : "https://api.github.com/users/Superjisan/orgs",
//     "subscriptions_url" : "https://api.github.com/users/Superjisan/subscriptions",
//     "starred_url" : "https://api.github.com/users/Superjisan/starred{/owner}{/repo}",
//     "gists_url" : "https://api.github.com/users/Superjisan/gists{/gist_id}",
//     "following_url" : "https://api.github.com/users/Superjisan/following{/other_user}",
//     "followers_url" : "https://api.github.com/users/Superjisan/followers",
//     "html_url" : "https://github.com/Superjisan",
//     "url" : "https://api.github.com/users/Superjisan",
//     "gravatar_id" : "a2619a8a1f6182567a9e63521a3bf982",
//     "avatar_url" : "https://avatars.githubusercontent.com/u/4501479?",
//     "id" : 4501479,
//     "login" : "Superjisan"
//   },
//   "linkedin" : {
//     "volunteer" : {
//       "volunteerExperiences" : {
//         "values" : [
//           {
//             "role" : "Big Brother",
//             "organization" : {
//               "name" : "Big Brothers Big Sisters",
//               "id" : 7171
//             },
//             "id" : 62
//           },
//           {
//             "role" : "Google Hangout Current Events Instructor",
//             "organization" : {
//               "name" : "Selfhelp Community Services",
//               "id" : 121309
//             },
//             "id" : 63
//           }
//         ],
//         "_total" : 2
//       }
//     },
//     "summary" : "I am a junior website developer who is well-versed in JavaScript and Ruby. I am trained in the MEAN (MongoDB, Express, Angular.JS, Node.JS) Stack but am also familiar with Ruby on Rails, Ember.JS, Backbone.JS, and the LAMP stack (Linux, Apache, MySQL, and Perl/Python/PHP). My computer is a Linux Ubuntu machine, and my blog is maintained in WordPress.\n\nI am working on several apps right now that showcase my skills in these different platforms as well as in mobile development. Check out my GitHub page: Superjisan.github.com for some of the projects and code I've done.\n\nHere's my blog about my coding adventures at Fullstack Academy: Superjisan.org/devblog.",
//     "skills" : {
//       "values" : [
//         {
//           "skill" : {
//             "name" : "Tutoring"
//           },
//           "id" : 16
//         },
//         {
//           "skill" : {
//             "name" : "SPSS"
//           },
//           "id" : 38
//         },
//         {
//           "skill" : {
//             "name" : "Data Analysis"
//           },
//           "id" : 39
//         },
//         {
//           "skill" : {
//             "name" : "Critical Thinking"
//           },
//           "id" : 6
//         },
//         {
//           "skill" : {
//             "name" : "Market Research"
//           },
//           "id" : 42
//         },
//         {
//           "skill" : {
//             "name" : "Small Talk"
//           },
//           "id" : 37
//         },
//         {
//           "skill" : {
//             "name" : "Listening Skills"
//           },
//           "id" : 5
//         },
//         {
//           "skill" : {
//             "name" : "Writing"
//           },
//           "id" : 9
//         },
//         {
//           "skill" : {
//             "name" : "Swing Dancing"
//           },
//           "id" : 10
//         },
//         {
//           "skill" : {
//             "name" : "Money Management"
//           },
//           "id" : 11
//         },
//         {
//           "skill" : {
//             "name" : "Supervising"
//           },
//           "id" : 12
//         },
//         {
//           "skill" : {
//             "name" : "Microsoft Excel"
//           },
//           "id" : 30
//         },
//         {
//           "skill" : {
//             "name" : "Microsoft Office"
//           },
//           "id" : 31
//         },
//         {
//           "skill" : {
//             "name" : "Product Management"
//           },
//           "id" : 32
//         },
//         {
//           "skill" : {
//             "name" : "Mobile Marketing"
//           },
//           "id" : 35
//         },
//         {
//           "skill" : {
//             "name" : "Problem Solving"
//           },
//           "id" : 4
//         },
//         {
//           "skill" : {
//             "name" : "Bengali"
//           },
//           "id" : 14
//         },
//         {
//           "skill" : {
//             "name" : "Youth Mentoring"
//           },
//           "id" : 17
//         },
//         {
//           "skill" : {
//             "name" : "Product Development"
//           },
//           "id" : 33
//         },
//         {
//           "skill" : {
//             "name" : "Editing"
//           },
//           "id" : 41
//         },
//         {
//           "skill" : {
//             "name" : "HTML"
//           },
//           "id" : 44
//         },
//         {
//           "skill" : {
//             "name" : "WordPress"
//           },
//           "id" : 51
//         },
//         {
//           "skill" : {
//             "name" : "Blues Dancing"
//           },
//           "id" : 29
//         },
//         {
//           "skill" : {
//             "name" : "HTML 5"
//           },
//           "id" : 45
//         },
//         {
//           "skill" : {
//             "name" : "CSS"
//           },
//           "id" : 46
//         },
//         {
//           "skill" : {
//             "name" : "Ruby"
//           },
//           "id" : 47
//         },
//         {
//           "skill" : {
//             "name" : "Ruby on Rails"
//           },
//           "id" : 48
//         },
//         {
//           "skill" : {
//             "name" : "JavaScript"
//           },
//           "id" : 49
//         },
//         {
//           "skill" : {
//             "name" : "jQuery"
//           },
//           "id" : 50
//         },
//         {
//           "skill" : {
//             "name" : "Web Development"
//           },
//           "id" : 52
//         },
//         {
//           "skill" : {
//             "name" : "Node.js"
//           },
//           "id" : 54
//         },
//         {
//           "skill" : {
//             "name" : "Backbone.js"
//           },
//           "id" : 55
//         },
//         {
//           "skill" : {
//             "name" : "JSON"
//           },
//           "id" : 56
//         },
//         {
//           "skill" : {
//             "name" : "SQL"
//           },
//           "id" : 57
//         },
//         {
//           "skill" : {
//             "name" : "SQLite"
//           },
//           "id" : 58
//         },
//         {
//           "skill" : {
//             "name" : "MongoDB"
//           },
//           "id" : 59
//         },
//         {
//           "skill" : {
//             "name" : "Redis"
//           },
//           "id" : 60
//         },
//         {
//           "skill" : {
//             "name" : "Cricket"
//           },
//           "id" : 64
//         }
//       ],
//       "_total" : 38
//     },
//     "siteStandardProfileRequest" : {
//       "url" : "http://www.linkedin.com/profile/view?id=118698139&authType=name&authToken=3H8C&trk=api*a3226473*s3299743*"
//     },
//     "relatedProfileViews" : {
//       "values" : [
//         {
//           "lastName" : "Domingo",
//           "id" : "hiyN8jWqPW",
//           "firstName" : "Migi"
//         },
//         {
//           "lastName" : "Yu",
//           "id" : "GDSYjeKb_Q",
//           "firstName" : "Kelvin"
//         },
//         {
//           "lastName" : "Cook",
//           "id" : "AjEGjDYQLv",
//           "firstName" : "Eric"
//         },
//         {
//           "lastName" : "Wallace",
//           "id" : "tIxs2lfEnw",
//           "firstName" : "Omari"
//         },
//         {
//           "lastName" : "Ingram",
//           "id" : "buLJshkhKq",
//           "firstName" : "Russell"
//         },
//         {
//           "lastName" : "Pazmiño",
//           "id" : "En1mNn2tQC",
//           "firstName" : "Luis"
//         },
//         {
//           "lastName" : "Tsui",
//           "id" : "JmCfHALEkj",
//           "firstName" : "Jaclyn"
//         },
//         {
//           "lastName" : "Giraldo",
//           "id" : "2qKGhmTNbZ",
//           "firstName" : "Max"
//         },
//         {
//           "lastName" : "Maru",
//           "id" : "7xiZaujHrb",
//           "firstName" : "Nimit"
//         },
//         {
//           "lastName" : "Drury",
//           "id" : "hne4Az6W6H",
//           "firstName" : "James"
//         }
//       ],
//       "_total" : 10
//     },
//     "recommendationsReceived" : {
//       "_total" : 0
//     },
//     "positions" : {
//       "values" : [
//         {
//           "title" : "Student",
//           "startDate" : {
//             "year" : 2014
//           },
//           "isCurrent" : false,
//           "id" : 513835875,
//           "endDate" : {
//             "year" : 2014
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "1-10 employees",
//             "name" : "Fullstack Academy",
//             "industry" : "Internet",
//             "id" : 4985867
//           }
//         },
//         {
//           "title" : "Student",
//           "startDate" : {
//             "year" : 2014
//           },
//           "isCurrent" : false,
//           "id" : 513838091,
//           "endDate" : {
//             "year" : 2014
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "1-10 employees",
//             "name" : "Fullstack Academy",
//             "industry" : "Internet",
//             "id" : 4985867
//           }
//         },
//         {
//           "title" : "Research Assistant",
//           "summary" : "1. Overseeing Product and App Development; \n2. Recruitment for panel and specific project; \n3. Organizing Support/Service Infrastructure; \n4. Developed Company Metrics and Reports; Testing Specialist; Authored Surveys; \n5. Assisted in  development of new technology Location Based Services; \n6. Creating reporting portals for clients and internal evaluations; \n7. Managed the creation of a new Website; \n8. Managed company project planning via ASANA.\n9. Maintained a panel of 100,000+ people and their demographic datapoints via proprietary technology tool.\n10. Manage client projects, present deliverable to clients.",
//           "startDate" : {
//             "year" : 2012,
//             "month" : 10
//           },
//           "isCurrent" : false,
//           "id" : 342035594,
//           "endDate" : {
//             "year" : 2013,
//             "month" : 10
//           },
//           "company" : {
//             "type" : "Partnership",
//             "size" : "11-50 employees",
//             "name" : "Paradigm Sample",
//             "industry" : "Market Research",
//             "id" : 252666
//           }
//         },
//         {
//           "title" : "Residential Assistant",
//           "summary" : "1.Assisted students and staff to ensure a safe and fun environment for learning;\n2.Supervised special-needs students with ADHD, Asperger, and Bipolar disorder; \n3.Organized the yearbook committee and created an online yearbook; \n4.Led fun and educational activities during afternoons and weekends; \n5.Supervised students during dances, weekends, quad-time and field trips; \n6.Maintained a high-energy and positive attitude throughout 6 weeks to provide a better work environment; \n7.Handled emergency situations on a 24-hour basis.",
//           "startDate" : {
//             "year" : 2010,
//             "month" : 6
//           },
//           "isCurrent" : false,
//           "id" : 214911824,
//           "endDate" : {
//             "year" : 2012,
//             "month" : 8
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "10,001+ employees",
//             "name" : "Johns Hopkins University Center for Talented Youth",
//             "industry" : "Higher Education",
//             "id" : 3528
//           }
//         },
//         {
//           "title" : "Treasurer",
//           "summary" : "1.Managed a $200,000 budget; \n2.Created the budget for the upcoming year; Collected rents and dues from members;\n3. Reported to the Adelphic Literary Society (alumni branch) regarding budgetary concerns; \n4. Managed a  $15,000 fund for the Adelphic Educational Fund (AEF), a 501(c) organization ;\n5. Worked with members of the society to create payment plans for students with financial need in order to make membership more accessible; \n6.Followed up with other officers of the Society, its members, local businesses regarding financial transactions;\n7. Partnered with Alumni members to purchase new equipment to increase office functionality; \n8. Institutionalized the use of software such as Google Docs, Boomerang, Expensify for better record keeping; \n9. Received “The Brown Award for Service to the Community” from the AEF.",
//           "startDate" : {
//             "year" : 2011,
//             "month" : 5
//           },
//           "isCurrent" : false,
//           "id" : 214912397,
//           "endDate" : {
//             "year" : 2012,
//             "month" : 5
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "51-200 employees",
//             "name" : "Alpha Delta Phi Society",
//             "industry" : "Higher Education",
//             "id" : 2073909
//           }
//         },
//         {
//           "title" : "Admissions Office Tour Guide",
//           "summary" : "1.Gave over 300 tours to prospective students, parents, alumni, and high school counselors- the most in school history; \n2.Provided a personal and professional perspective about Wesleyan; \n3.Interacted with various people of many different backgrounds; \n4.Showed the facilities that highlighted the university and promoted its reputation, programs and environment;\n5. Acquired knowledge about all aspects of the University thoroughly and incorporated personal stories in order to give factual yet exciting tours; \n6.Earned the “Tour Guide of the Month” award after only one semester.",
//           "startDate" : {
//             "year" : 2009,
//             "month" : 3
//           },
//           "isCurrent" : false,
//           "id" : 214910839,
//           "endDate" : {
//             "year" : 2012,
//             "month" : 5
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "501-1000 employees",
//             "name" : "Wesleyan University",
//             "industry" : "Higher Education",
//             "id" : 15668
//           }
//         },
//         {
//           "title" : "Student",
//           "summary" : "B.A. in History with Honors",
//           "startDate" : {
//             "year" : 2008,
//             "month" : 9
//           },
//           "isCurrent" : false,
//           "id" : 185342794,
//           "endDate" : {
//             "year" : 2012,
//             "month" : 5
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "501-1000 employees",
//             "name" : "Wesleyan University",
//             "industry" : "Higher Education",
//             "id" : 15668
//           }
//         },
//         {
//           "title" : "Van Driver",
//           "startDate" : {
//             "year" : 2008
//           },
//           "isCurrent" : false,
//           "id" : 244958520,
//           "endDate" : {
//             "year" : 2012
//           },
//           "company" : {
//             "name" : "Wesleyan University Office of Community Service",
//             "industry" : "Higher Education"
//           }
//         },
//         {
//           "title" : "Resident Advisor",
//           "summary" : "1.Fostered a community in two different resident halls; \n2. Acted as a liaison between the Office of Residential Life and the residents in the hall; \n3.Advised students on various issues that included policy enforcement, drugs and alcohol, social justice; Updated residents about events on campus;\n4. Raised over $2,000 for community service projects around Wesleyan and Middletown, CT. \n5.Organized various programs that promoted a sense of community; \n6. Earned the “Resident Advisor Of the Year” Award in Spring 2011.",
//           "startDate" : {
//             "year" : 2009,
//             "month" : 8
//           },
//           "isCurrent" : false,
//           "id" : 199950435,
//           "endDate" : {
//             "year" : 2011,
//             "month" : 5
//           },
//           "company" : {
//             "type" : "Educational Institution",
//             "size" : "501-1000 employees",
//             "name" : "Wesleyan University",
//             "industry" : "Higher Education",
//             "id" : 15668
//           }
//         }
//       ],
//       "_total" : 9
//     },
//     "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_jE7gvrM4ZX5CbGoP0muGvtZVs_PCbXVP0HUGvPJo5QbPZ8D1luxlR1SXND1yXiRxpWS_sqFixbuY",
//     "phoneNumbers" : {
//       "_total" : 0
//     },
//     "numRecommenders" : 0,
//     "lastName" : "Zaman",
//     "id" : "PvmfqY724t",
//     "honorsAwards" : {
//       "values" : [
//         {
//           "name" : "Tour Guide of the Month",
//           "issuer" : "Wesleyan University Office of Admissions",
//           "id" : 23
//         },
//         {
//           "name" : "Resident Advisor of The Year",
//           "issuer" : "Wesleyan University Office of Residential Life",
//           "id" : 24
//         },
//         {
//           "name" : "Departmental Honors",
//           "issuer" : "Wesleyan University History Department",
//           "id" : 25
//         },
//         {
//           "name" : "AP Scholar with Distinction",
//           "issuer" : "CollegeBoard",
//           "id" : 26
//         },
//         {
//           "name" : "Gram Award for Service to the Community",
//           "issuer" : "Adelphic Literary Society",
//           "id" : 27
//         },
//         {
//           "name" : "Most Outstanding Cricket Player",
//           "issuer" : "Stuyvesant High School Athletics Department",
//           "id" : 40
//         }
//       ],
//       "_total" : 6
//     },
//     "headline" : "Web Developer, Student at Fullstack Academy of Code",
//     "firstName" : "Jisan",
//     "emailAddress" : "jzaman@wesleyan.edu",
//     "educations" : {
//       "values" : [
//         {
//           "startDate" : {
//             "year" : 2014
//           },
//           "schoolName" : "Fullstack Academy of Code",
//           "id" : 204678887,
//           "fieldOfStudy" : "Web Development",
//           "endDate" : {
//             "year" : 2014
//           }
//         },
//         {
//           "startDate" : {
//             "year" : 2008
//           },
//           "schoolName" : "Wesleyan University",
//           "id" : 74426792,
//           "fieldOfStudy" : "History",
//           "endDate" : {
//             "year" : 2012
//           },
//           "degree" : "Bachelors"
//         },
//         {
//           "startDate" : {
//             "year" : 2005
//           },
//           "schoolName" : "Stuyvesant High School",
//           "notes" : "",
//           "id" : 81501045,
//           "endDate" : {
//             "year" : 2008
//           }
//         }
//       ],
//       "_total" : 3
//     },
//     "dateOfBirth" : {
//       "year" : 1990,
//       "month" : 6,
//       "day" : 4
//     }
//   },
//   "name" : "Jisan Zaman",
//   "roles" : [
//     "developer"
//   ],
//   "work_experiences" : [
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "1-10 employees",
//         "name" : "Fullstack Academy",
//         "industry" : "Internet",
//         "id" : 4985867
//       },
//       "id" : 513835875,
//       "isCurrent" : false,
//       "title" : "Student",
//       "endDate" : {
//         "year" : 2014
//       },
//       "startDate" : {
//         "year" : 2014
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "1-10 employees",
//         "name" : "Fullstack Academy",
//         "industry" : "Internet",
//         "id" : 4985867
//       },
//       "id" : 513838091,
//       "isCurrent" : false,
//       "title" : "Student",
//       "endDate" : {
//         "year" : 2014
//       },
//       "startDate" : {
//         "year" : 2014
//       }
//     },
//     {
//       "company" : {
//         "type" : "Partnership",
//         "size" : "11-50 employees",
//         "name" : "Paradigm Sample",
//         "industry" : "Market Research",
//         "id" : 252666
//       },
//       "id" : 342035594,
//       "isCurrent" : false,
//       "title" : "Research Assistant",
//       "endDate" : {
//         "month" : 10,
//         "year" : 2013
//       },
//       "startDate" : {
//         "month" : 10,
//         "year" : 2012
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "10,001+ employees",
//         "name" : "Johns Hopkins University Center for Talented Youth",
//         "industry" : "Higher Education",
//         "id" : 3528
//       },
//       "id" : 214911824,
//       "isCurrent" : false,
//       "title" : "Residential Assistant",
//       "endDate" : {
//         "month" : 8,
//         "year" : 2012
//       },
//       "startDate" : {
//         "month" : 6,
//         "year" : 2010
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "51-200 employees",
//         "name" : "Alpha Delta Phi Society",
//         "industry" : "Higher Education",
//         "id" : 2073909
//       },
//       "id" : 214912397,
//       "isCurrent" : false,
//       "title" : "Treasurer",
//       "endDate" : {
//         "month" : 5,
//         "year" : 2012
//       },
//       "startDate" : {
//         "month" : 5,
//         "year" : 2011
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "501-1000 employees",
//         "name" : "Wesleyan University",
//         "industry" : "Higher Education",
//         "id" : 15668
//       },
//       "id" : 214910839,
//       "isCurrent" : false,
//       "title" : "Admissions Office Tour Guide",
//       "endDate" : {
//         "month" : 5,
//         "year" : 2012
//       },
//       "startDate" : {
//         "month" : 3,
//         "year" : 2009
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "501-1000 employees",
//         "name" : "Wesleyan University",
//         "industry" : "Higher Education",
//         "id" : 15668
//       },
//       "id" : 185342794,
//       "isCurrent" : false,
//       "title" : "Student",
//       "endDate" : {
//         "month" : 5,
//         "year" : 2012
//       },
//       "startDate" : {
//         "month" : 9,
//         "year" : 2008
//       }
//     },
//     {
//       "company" : {
//         "name" : "Wesleyan University Office of Community Service",
//         "industry" : "Higher Education"
//       },
//       "id" : 244958520,
//       "isCurrent" : false,
//       "title" : "Van Driver",
//       "endDate" : {
//         "year" : 2012
//       },
//       "startDate" : {
//         "year" : 2008
//       }
//     },
//     {
//       "company" : {
//         "type" : "Educational Institution",
//         "size" : "501-1000 employees",
//         "name" : "Wesleyan University",
//         "industry" : "Higher Education",
//         "id" : 15668
//       },
//       "id" : 199950435,
//       "isCurrent" : false,
//       "title" : "Resident Advisor",
//       "endDate" : {
//         "month" : 5,
//         "year" : 2011
//       },
//       "startDate" : {
//         "month" : 8,
//         "year" : 2009
//       }
//     }
//   ]
// });


console.log('Done Seeding Data');
  res.send("You've successfully seeded test data.")
};
