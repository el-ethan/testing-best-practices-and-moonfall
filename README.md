# Testing Best Practices: how Roland Emmerich's 2022 classic [Moonfall](https://www.rottentomatoes.com/m/moonfall) changed the construction industry forever

This repo uses a working, full-featured and fully tested web app as a case study in some testing best practices. The best practices illustrated here should:

- be easy understand and apply to your own tests.
- apply to just about any programming language.
- apply to just about any testing paradigm (unit, functional, e2e, integration, etc.)

# What makes a "good" test?

The list below contains some of the things that I think are most important. It is not an exhaustive list, and it is in no particular order.

* Only fails when the system under test (SUT) is broken
* Only passes when the SUT is **not** broken
* Executes as fast as it can (which won't always be fast)
* When it fails, it's clear why
* It's clear _what_ is being tested
* Not dependent on other tests/test order
* Deterministic: same inputs, same code for SUT, same test result