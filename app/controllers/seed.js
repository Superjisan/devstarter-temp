'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.seed = function(req, res) {
    console.log("Inserting data");
//Jisan
// User.create({

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

//Migi's Data
User.create(
{

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

//Howard Kim
User.create(
{

  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "f3MHAVxhZP",
    }
  ],
  "educations" : [
    {
      "id" : 205761463,
      "notes" : "Fullstack Academy is an immersive, full-time course in web development offered in New York City. After completing the Fullstack Curriculum, you will be ready for top development jobs at tech firms and startups. You provide the enthusiasm, hunger and dedication to learning and we will provide a world-class environment for becoming a great software developer.",
      "schoolName" : "Fullstack Academy",
      "endDate" : {
        "year" : 2014
      },
      "startDate" : {
        "year" : 2014
      }
    },
    {
      "activities" : "Northeastern University Entrepreneurs' Club, Northeastern University Investments' Club",
      "fieldOfStudy" : "Computer Science, Business Administration",
      "id" : 175470293,
      "schoolName" : "Northeastern University",
      "endDate" : {
        "year" : 2013
      },
      "startDate" : {
        "year" : 2012
      }
    }
  ],
  "email" : "howardjink@gmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 5432,
    "owned_private_repos" : 0,
    "total_private_repos" : 14,
    "private_gists" : 0,
    "updated_at" : "2014-03-25T16:38:43Z",
    "created_at" : "2014-01-14T04:30:54Z",
    "following" : 2,
    "followers" : 4,
    "public_gists" : 0,
    "public_repos" : 5,
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/kimhowardj/received_events",
    "events_url" : "https://api.github.com/users/kimhowardj/events{/privacy}",
    "repos_url" : "https://api.github.com/users/kimhowardj/repos",
    "organizations_url" : "https://api.github.com/users/kimhowardj/orgs",
    "subscriptions_url" : "https://api.github.com/users/kimhowardj/subscriptions",
    "starred_url" : "https://api.github.com/users/kimhowardj/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/kimhowardj/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/kimhowardj/following{/other_user}",
    "followers_url" : "https://api.github.com/users/kimhowardj/followers",
    "html_url" : "https://github.com/kimhowardj",
    "url" : "https://api.github.com/users/kimhowardj",
    "gravatar_id" : "cbac2ab761193b9b51f2ba938d7924a4",
    "avatar_url" : "https://avatars.githubusercontent.com/u/6396188?",
    "id" : 6396188,
    "login" : "kimhowardj"
  },
  "linkedin" : {
    "summary" : "In a nutshell: I was born in Seoul, Korea until my Dad sought better opportunities for the family and decided that we move to America which led us to New York City. I then matriculated to Northeastern University (Boston, MA) for Computer Science and Business Administration until I realized I wasn't getting the kind of education I really wanted. So I dropped out and now, I'm currently in Fullstack Academy (a programming bootcamp) where I'm learning the full-stack of web development; I'm basically living my dream.",
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "HTML 5"
          },
          "id" : 37
        },
        {
          "skill" : {
            "name" : "CSS3"
          },
          "id" : 38
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 39
        },
        {
          "skill" : {
            "name" : "Node.js"
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
            "name" : "Git"
          },
          "id" : 42
        },
        {
          "skill" : {
            "name" : "MongoDB"
          },
          "id" : 43
        },
        {
          "skill" : {
            "name" : "Test Driven Development"
          },
          "id" : 44
        },
        {
          "skill" : {
            "name" : "SQLite"
          },
          "id" : 45
        },
        {
          "skill" : {
            "name" : "Github"
          },
          "id" : 46
        },
        {
          "skill" : {
            "name" : "MySQL"
          },
          "id" : 47
        },
        {
          "skill" : {
            "name" : "Java"
          },
          "id" : 48
        },
        {
          "skill" : {
            "name" : "Racket"
          },
          "id" : 49
        },
        {
          "skill" : {
            "name" : "Stocks"
          },
          "id" : 50
        },
        {
          "skill" : {
            "name" : "RSpec"
          },
          "id" : 51
        },
        {
          "skill" : {
            "name" : "Angular.js"
          },
          "id" : 52
        }
      ],
      "_total" : 16
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=282326395&authType=name&authToken=C58_&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
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
          "lastName" : "Tam",
          "id" : "yV3QGJfBVK",
          "firstName" : "Waine"
        },
        {
          "lastName" : "Wallace",
          "id" : "tIxs2lfEnw",
          "firstName" : "Omari"
        },
        {
          "lastName" : "Tsui",
          "id" : "JmCfHALEkj",
          "firstName" : "Jaclyn"
        },
        {
          "lastName" : "Giraldo",
          "id" : "2qKGhmTNbZ",
          "firstName" : "Max"
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
          "lastName" : "Koo",
          "id" : "CSRTpH9PMC",
          "firstName" : "Ji Ho"
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
    "positions" : {
      "values" : [
        {
          "title" : "Web Developer in Training",
          "summary" : "Making the whole sandwich: HTML, CSS, Javascript, Node.js, etc.",
          "startDate" : {
            "year" : 2014,
            "month" : 1
          },
          "isCurrent" : true,
          "id" : 504279362,
          "company" : {
            "type" : "Educational Institution",
            "size" : "1-10 employees",
            "name" : "Fullstack Academy",
            "industry" : "Internet",
            "id" : 4985867
          }
        },
        {
          "title" : "Barista",
          "summary" : "Can make a mean cup of coffee.",
          "startDate" : {
            "year" : 2013,
            "month" : 4
          },
          "isCurrent" : false,
          "id" : 504278333,
          "endDate" : {
            "year" : 2013,
            "month" : 11
          },
          "company" : {
            "type" : "Public Company",
            "ticker" : "SBUX",
            "size" : "10,001+ employees",
            "name" : "Starbucks",
            "industry" : "Retail",
            "id" : 2271
          }
        }
      ],
      "_total" : 2
    },
    "pictureUrl" : "http://m.c.lnkd.licdn.com/mpr/mprx/0_oCf8Sdu-c4xI9h1EeipPSE2gvRHoq5CEHhR0SEw2EOpRI3voQk0uio0GUveqBC_QITDYCDJxk6vm",
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Kim",
    "languages" : {
      "values" : [
        {
          "language" : {
            "name" : "English"
          },
          "id" : 58
        },
        {
          "language" : {
            "name" : "Korean"
          },
          "id" : 59
        },
        {
          "language" : {
            "name" : "Spanish"
          },
          "id" : 60
        }
      ],
      "_total" : 3
    },
    "id" : "f3MHAVxhZP",
    "headline" : "Web Developer in Training at Fullstack Academy",
    "firstName" : "Howard Jin",
    "emailAddress" : "howardjink@gmail.com",
    "educations" : {
      "values" : [
        {
          "startDate" : {
            "year" : 2014
          },
          "schoolName" : "Fullstack Academy",
          "notes" : "Fullstack Academy is an immersive, full-time course in web development offered in New York City. After completing the Fullstack Curriculum, you will be ready for top development jobs at tech firms and startups. You provide the enthusiasm, hunger and dedication to learning and we will provide a world-class environment for becoming a great software developer.",
          "id" : 205761463,
          "endDate" : {
            "year" : 2014
          }
        },
        {
          "startDate" : {
            "year" : 2012
          },
          "schoolName" : "Northeastern University",
          "id" : 175470293,
          "fieldOfStudy" : "Computer Science, Business Administration",
          "endDate" : {
            "year" : 2013
          },
          "activities" : "Northeastern University Entrepreneurs' Club, Northeastern University Investments' Club"
        }
      ],
      "_total" : 2
    },
    "courses" : {
      "values" : [
        {
          "number" : "CS2500",
          "name" : "Fundamentals of Computer Science 1",
          "id" : 24
        },
        {
          "number" : "ECON1115",
          "name" : "Principles of Macroeconomics",
          "id" : 25
        },
        {
          "number" : "CS1800",
          "name" : "Discrete Structures of Computer Science",
          "id" : 26
        },
        {
          "number" : "ARCH1450",
          "name" : "Understanding Design of Architecture",
          "id" : 27
        },
        {
          "number" : "CS2510",
          "name" : "Fundamentals of Computer Science 2",
          "id" : 28
        },
        {
          "number" : "CS2800",
          "name" : "Logic and Computation of Computer Science",
          "id" : 29
        },
        {
          "number" : "ECON1116",
          "name" : "Principles of Microeconomics",
          "id" : 30
        },
        {
          "number" : "ACCT1201",
          "name" : "Financial Accounting and Reporting",
          "id" : 31
        },
        {
          "number" : "INTB1203",
          "name" : "International Business and Global Social Responsibility",
          "id" : 32
        },
        {
          "number" : "MGSC2301",
          "name" : "Business Statistics",
          "id" : 33
        }
      ],
      "_total" : 10
    }
  },
  "name" : "Howard Jin Kim",
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
      "id" : 504279362,
      "isCurrent" : true,
      "title" : "Web Developer in Training",
      "startDate" : {
        "month" : 1,
        "year" : 2014
      }
    },
    {
      "company" : {
        "type" : "Public Company",
        "ticker" : "SBUX",
        "size" : "10,001+ employees",
        "name" : "Starbucks",
        "industry" : "Retail",
        "id" : 2271
      },
      "id" : 504278333,
      "isCurrent" : false,
      "title" : "Barista",
      "endDate" : {
        "month" : 11,
        "year" : 2013
      },
      "startDate" : {
        "month" : 4,
        "year" : 2013
      }
    }
  ]
});

//Peter Espinosa
User.create({
  "__v" : 1,
  "auth_methods" : [
    {
      "provider" : "linkedin",
      "providerId" : "gYd6XGSzom",
    }
  ],
  "email" : "peterespinosa78@gmail.com",
  "github" : {
    "plan" : {
      "private_repos" : 0,
      "collaborators" : 0,
      "space" : 307200,
      "name" : "free"
    },
    "collaborators" : 0,
    "disk_usage" : 6676,
    "owned_private_repos" : 0,
    "total_private_repos" : 0,
    "private_gists" : 0,
    "updated_at" : "2014-03-26T01:27:48Z",
    "created_at" : "2013-07-30T15:27:03Z",
    "following" : 3,
    "followers" : 3,
    "public_gists" : 0,
    "public_repos" : 3,
    "bio" : null,
    "hireable" : false,
    "email" : "",
    "location" : "",
    "blog" : "",
    "company" : "",
    "name" : "Peter Espinosa",
    "site_admin" : false,
    "type" : "User",
    "received_events_url" : "https://api.github.com/users/peterespinosa/received_events",
    "events_url" : "https://api.github.com/users/peterespinosa/events{/privacy}",
    "repos_url" : "https://api.github.com/users/peterespinosa/repos",
    "organizations_url" : "https://api.github.com/users/peterespinosa/orgs",
    "subscriptions_url" : "https://api.github.com/users/peterespinosa/subscriptions",
    "starred_url" : "https://api.github.com/users/peterespinosa/starred{/owner}{/repo}",
    "gists_url" : "https://api.github.com/users/peterespinosa/gists{/gist_id}",
    "following_url" : "https://api.github.com/users/peterespinosa/following{/other_user}",
    "followers_url" : "https://api.github.com/users/peterespinosa/followers",
    "html_url" : "https://github.com/peterespinosa",
    "url" : "https://api.github.com/users/peterespinosa",
    "gravatar_id" : "c6cb4f394a65e585ef01ff30cd9fddad",
    "avatar_url" : "https://avatars.githubusercontent.com/u/5122260?",
    "id" : 5122260,
    "login" : "peterespinosa"
  },
  "linkedin" : {
    "skills" : {
      "values" : [
        {
          "skill" : {
            "name" : "Software Development"
          },
          "id" : 9
        },
        {
          "skill" : {
            "name" : "Software Engineering"
          },
          "id" : 10
        },
        {
          "skill" : {
            "name" : "Linux"
          },
          "id" : 11
        },
        {
          "skill" : {
            "name" : "Embedded Systems"
          },
          "id" : 12
        },
        {
          "skill" : {
            "name" : "Agile Methodologies"
          },
          "id" : 13
        },
        {
          "skill" : {
            "name" : "XML"
          },
          "id" : 14
        },
        {
          "skill" : {
            "name" : "JavaScript"
          },
          "id" : 15
        },
        {
          "skill" : {
            "name" : "SQL"
          },
          "id" : 16
        },
        {
          "skill" : {
            "name" : "Python"
          },
          "id" : 18
        },
        {
          "skill" : {
            "name" : "Web Services"
          },
          "id" : 19
        }
      ],
      "_total" : 10
    },
    "siteStandardProfileRequest" : {
      "url" : "http://www.linkedin.com/profile/view?id=273467332&authType=name&authToken=71nc&trk=api*a3226473*s3299743*"
    },
    "relatedProfileViews" : {
      "values" : [
        {
          "lastName" : "F.",
          "id" : "rbg3BBO1-S",
          "firstName" : "Julie"
        },
        {
          "lastName" : "U.",
          "id" : "TaaWGFU5Zr",
          "firstName" : "Jamie"
        },
        {
          "lastName" : "J.",
          "id" : "NooJPn--Rn",
          "firstName" : "Arlene"
        },
        {
          "lastName" : "L.",
          "id" : "ncZxEcw2DT",
          "firstName" : "Amarylis"
        },
        {
          "lastName" : "B.",
          "id" : "_etjwSlgCO",
          "firstName" : "Millie"
        },
        {
          "lastName" : "J.",
          "id" : "z_L5pALvWQ",
          "firstName" : "Harry"
        },
        {
          "lastName" : "H.",
          "id" : "HCcqgg52IH",
          "firstName" : "Susan"
        },
        {
          "lastName" : "M.",
          "id" : "nzxeGpmwUS",
          "firstName" : "Scott"
        },
        {
          "lastName" : "F.",
          "id" : "LWV_M2-tTp",
          "firstName" : "Jason"
        },
        {
          "lastName" : "F.",
          "id" : "IMWA2zwYp3",
          "firstName" : "Derek"
        }
      ],
      "_total" : 10
    },
    "recommendationsReceived" : {
      "_total" : 0
    },
    "positions" : {
      "_total" : 0
    },
    "phoneNumbers" : {
      "_total" : 0
    },
    "numRecommenders" : 0,
    "lastName" : "Espinosa",
    "languages" : {
      "values" : [
        {
          "language" : {
            "name" : "English"
          },
          "id" : 1
        },
        {
          "language" : {
            "name" : "Spanish"
          },
          "id" : 2
        }
      ],
      "_total" : 2
    },
    "id" : "gYd6XGSzom",
    "headline" : "Software Engineer",
    "firstName" : "Peter",
    "emailAddress" : "peterespinosa78@gmail.com",
    "educations" : {
      "_total" : 0
    }
  },
  "name" : "Peter Espinosa",
  "roles" : [
    "developer"
  ]
});

//Max Giraldo
User.create({
  "__v" : 1,
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

console.log('Done Seeding Data');
  res.send('200')
};
