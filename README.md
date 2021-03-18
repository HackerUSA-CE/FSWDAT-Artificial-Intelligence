# FSWDAT-Artificial-Intelligence

Development of our twelve hour Artificial Intelligence Unit included in the Advanced Topics for the Full Stack Development program.

References: 
- https://i.am.ai/roadmap
- https://github.com/aimacode/aima-exercises
- http://aimacode.github.io/aima-javascript/

## Lesson 1 - 

Artificial intelligence in computer science strives to make an "intelligent" machine that is a flexible rational agent that perceives its environment and takes actions that maximize its chance of success at some goal.

## Lesson 1 - Supervised Learning

There are two types of Supervised Learning: Classification and Regression

Classification is the process of taking some kind of input and mapping it to some kind of discrete label

Regression is all about continuous values. For example, given some point you can use regression to map it to some value based on the location of other similar points on some graph.

### Classification Learning Terms

Instance: These are vectors of attributes that define whatever your input space is. They can be pictures and all the pixels that make them up, or credit score examples. The set of things that you are looking at.

Concept: A function that maps inputs to outputs. A mapping between objects in the world and membership in a set, which makes it a function.

Target Concept: The concept we are trying to find. The actual answer.

Hypothesis Class: The set of all concepts I am willing to think about. You would want to specify what concepts are in your Hypothesis class because if you look at all possible concepts it is much less efficient.

Sample (Training Set): We have all these instances, we want to find a particular (target) concept, and we have this set of functions we are willing to look at (Hypothesis set). We determine what the right answer is by using a sample, also called a training set. It is a set of all of our inputs, like pictures of people, paired with a label, which is the correct output. We want to make it as if we were walking down the street and pointing out examples of cars and non-cars to you so you could learn to classify them yourself - thats what we want to teach the program to do.

Candidate: A concept that you think might be the target concept.

Testing Set: To check whether our candidate is right or wrong we use a testing set. The testing set looks just like a training set BUT THEY MUST BE DIFFERENT DATA. We use the testing set to determine whether our program works or not by testing it.

### QUIZ - Classification Or Regression:

Input: Credit history 
Output: Should I lend money to this person (T/F)? 
Answer: Classification 
Explain: Output is binary, therefore we classify it

Input: Image Of Person 
Output: Are they in school, undergrad college, graduate college? 
Answer: Classification 
Explain: Output is one of three categories (or discrete sets), therefore classification

Input: Image of person 
Output: Age 
Answer: Regression, but you could do it with Classification too, but not as well as with Regression 
Explain: Since Age is continuous regression would be best, but you could also make a discrete set of all ages and do classification too. It would not preform as well, though.

## Lesson 2 - 

## Script
