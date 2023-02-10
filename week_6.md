class: center, middle

# MPCS 52553: Web Development
## Week 6: ~~Secure Logins~~ and Single Page Applications
---

class: agenda

# ~~Secure Logins~~
- Assume attackers will get your DB
- Storing secure hashes
- Lab: Securely storing passwords with bcrypt, salt, and pepper

# Single Page Applications
- Static assets in Flask
- SessionStorage, LocalStorage, and Cookies
- Routing and history
- Lab: Who is Best? A toy single-page application

# Watch Party 2: The Single Page Experience
---

# Password Security

You should do your best to keep your database and its contents safe. But
experience teaches us that human organizations are imperfect at best at keeping
database contents secure. We need to plan to minimize damage in the not-all-that
unlikely event that someone is able to steal its contents.

![Rami Malek as hacker Elliot Alderson from Mr Robot](images/mrrobot.jpg)
---

# Password Security

![Chart of Biggest Data Breaches](images/breaches.jpg)

From [CSO Magazine](https://www.csoonline.com/article/2130877/the-biggest-data-breaches-of-the-21st-century.html)
---

# Password Security

Databases of usernames and passwords are valuable because users re-use passwords
for multiple web services. They shouldn't, but they do. So even if your web
project doesn't have anything of value, a large enough list of usernames and
passwords will have some that also get an attacker access to users' bank
accounts, credit cards, or email addresses.

--

As developers we often won't have control over whether the database (or its
backups!) are stored securely, and it only takes one leak for the data to live
forever on the internet. There's no way to unring the bell. What we do have
control over though, is whether our databases store passwords at all in the
first place.
---

# Password Security: One-Way Hashing

The first thing you could do is, instead of storing passwords directly, you
could store a one-way hash. That lets you check whether the password a user
enters is the right one (just hash it and compare the hashes), and there's no
easy way to get the passwords from the hashes.

--

But just because there's no _easy_ way doesn't mean that there's no way. And
modern computers make lots of hard things possible!

--

You might try every possible password, or every likely one by using the words in
a dictionary. You might [cleverly precompute](https://en.wikipedia.org/wiki/Rainbow_table)
hashes in a space-efficient format for re-use.
---

# Password Security: Bcrypt, Salt and Pepper

To protect against those attacks, we're going to do two things: we're going to
use a hashing function (bcrypt) that's **expensive to compute**, so that
guessing passwords by brute force  becomes prohibitively expensive, and we're
going to **salt** passwords with a random unique string, so attackers can't use
pre-computed lookup tables.

We'll also include a second kind of salting that's stored on the application
server and not on the database at all, so it's less likely to be stolen
alongside the database contents.

https://owasp.org/www-project-cheat-sheets/cheatsheets/Password_Storage_Cheat_Sheet
---

# Lab: Passwords

In the `/examples/passwords` directory we have a simple app that creates user
accounts with passwords and checks whether a login was successful. Right now it
is storing passwords in plaintext though. Modify it to:
- Store hashes created with `bcrypt`
- Store a unique salt for each row that's used to create the hash
- Incorporate a pepper stored in a config file

https://github.com/pyca/bcrypt/
---

# Single Page Applications
https://en.wikipedia.org/wiki/Single-page_application

https://flask.palletsprojects.com/en/2.0.x/tutorial/static/
---

# Single Page Applications

https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

https://developer.mozilla.org/en-US/docs/Glossary/Cookie
---

# Lab: Who is Best?

Modify the example app in `spa/` so that the animal we pick as best goes into
our browser history. Make sure that if we load the page with that URL, the
correct animal is identified as best.

https://developer.mozilla.org/en-US/docs/Web/API/History_API
---

# Watch Party 2
## The Single Page Experience

https://mit.cs.uchicago.edu/mpcs52553-sum-21/course/tree/master/week_6/exercise_6
