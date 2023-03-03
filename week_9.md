class: center, middle

# Web Development Winter 2022
## Week 9: Production
---

class: agenda

# Warm-Up: Handling the Enter Key
- `onKeyPress` and `preventDefault`

# Automated Testing
- Time-consistency vs correctness
- `pytest`
- Lab: Add Tests to Passwords App

# Continuous Integration
- GitLab.com CI
- CircleCI and TravisCI
- Lab: GitLab CI for the Passwords App

# Deployment to Cloud Hosting
- AWS Free Usage Tier
- Heroku Free Resources

# Stretch: Feature Flags
---

# Event Handling: Enter Key
### Lab: Enter Key
https://github.com/UChicagoWebDev/lecture_notes/tree/master/examples/week_9/enter_key
---

class: bigquote

# Automated Testing

![Woman from The Onion](images/americanvoices6.jpg)
> &quot;If my code is wrong, won't my tests just be wrong in the same way?&quot;
---

# Automated Testing

You do get some amount of correctness validation by writing out your business
logic a second time. It can work like a form of [Rubber Duck Debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging).

--

More importantly, we use tests for **time consistency**. They future developers,
including future us, make changes and additions to the code with **confidence
that they're not accidentally breaking something**.
---

# Automated Testing

As a bonus, automated tests run much faster than conducting tests by hand.
---

# Automated Testing: `pytest`

There is a testing library called `unittest` built into the Python standard
library, but the most commonly used framework is an external library called
`pytest`

https://docs.pytest.org/en/latest/
---

# Lab: Add Tests to Password App

https://github.com/UChicagoWebDev/lecture_notes/tree/master/examples/week_9/passwords_with_tests
---

# Continuous Integration

Once we have the computer running our tests for us, the next step is to have it
run the tests every time we make a change.

https://en.wikipedia.org/wiki/Continuous_integration
---

# Continuous Integration

Current best practice is to have a cluster of computers automatically run all
the tests every time anyone on the team pushes a new commit to version control.
Several providers offer this as a service:
- https://github.com/features/actions
- https://circleci.com/
- https://travis-ci.com/
- https://docs.gitlab.com/ee/ci/

All of the above offer automated continuous integration for free some some
projects.
---

# Deployment to Cloud Hosting

Cloud hosting is an enormous business. In Q4 2022, Amazon Web Services was responsible for nearly
200% of the company's profits. It made $5.2 billion, while subsidizing the rest of the business to
the tune of $2.4B.

> North America segment operating loss was $0.2 billion, compared with operating loss of $0.2 billion in fourth quarter 2021.
International segment operating loss was $2.2 billion, compared with operating loss of $1.6 billion in fourth quarter 2021.
AWS segment operating income was $5.2 billion, compared with operating income of $5.3 billion in fourth quarter 2021.

https://ir.aboutamazon.com/news-release/news-release-details/2023/Amazon.com-Announces-Fourth-Quarter-Results/default.aspx
---

# Deployment to Cloud Hosting

Cloud hosting has those same self-reinforcing feedback loops we've talked about in other parts of 
the course, so the big providers all offer free usage tiers to attract developers to their platforms:

https://aws.amazon.com/free/

https://azure.microsoft.com/en-us/pricing/free-services/

https://cloud.google.com/free

---

# Stretch: Feature Flags

https://martinfowler.com/articles/feature-toggles.html

Especially the Release Toggles section: https://martinfowler.com/articles/feature-toggles.html#CategoriesOfToggles

https://en.wikipedia.org/wiki/Feature_toggle

https://launchdarkly.com/use-cases/
