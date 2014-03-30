#SEED DATA
In order to seed three developer data, please follow this method after merging your files:
*  1. Run your server
*  2. Change the url to localhost:3000/seed
*  3. If you see a white screen that says " You have successfully seeded data", then the seed should be transported to your mongodb.
* 4. Please comment out your own seed data before seeding or Angular.JS will give a duplication error.

#ADMIN Status
In order to give yourself admin status, run the following command in your mongo after you have switched to the devstarter database:

```
db.users.update({name: "YOUR NAME HERE"}, { $push: { roles: "admin" }})
```

After doing this, go to localhost:3000/users/admin and approve the users you want to see in the developers listing page.

Currently, it is setup so that each time you approve a user it sends them an e-mail via node-mailer. I highly recommend that you test just with yourself or other members of the team before spamming others.


