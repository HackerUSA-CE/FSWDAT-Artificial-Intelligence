# FSWDAT-Artificial-Intelligence

Development of our twelve hour Artificial Intelligence Unit included in the Advanced Topics for the Full Stack Development program.

References: 
- https://i.am.ai/roadmap
- https://github.com/aimacode/aima-exercises
- http://aimacode.github.io/aima-javascript/

# Unit 1 - Diving Into AI

## Lesson 1 - What Is Artificial Intelligence?

Artificial intelligence in computer science strives to make an "intelligent" machine that is a flexible rational agent that perceives its environment and takes actions that maximize its chance of success at some goal.

- Board description of AI & what is intelligence?
- Talk about branches of AI and explain that new techniques are being created and evolving every month
- Describe some of the largest problems being solved in the real-world using AI across many different branches of AI
- Set expectation for what will be covered in the 12 hours and what will not, especially on the mathematical side. Explain that the purpose is to give them enough knowledge to know what they're talking about in the field of AI. Explain that to become entry-level for an AI-heavy role at a prestigious company, an average person will need at least six months of 10 hour days researching and building personal projects to be competent - and this 12 hour session will serve as a great intro into that six month hustle for those who are interested.

## Lesson 2 - Game Theory - https://study.com/academy/lesson/game-theory-in-artificial-intelligence.html

- Define an AI agent and how an agent is created inside an environment to solve a specific problem. A chess AI should not be told to drive a car, and a self-driving car AI should not be told to play chess!
- Game theory is the study of mathematical models of strategic interaction among rational decision-makers.
- Zero-sum is a situation in game theory in which one person's gain is equivalent to another's loss, so the net change in wealth or benefit is zero. A zero-sum game may have as few as two players or as many as millions of participants.
- Game Theory is essential to enable some of the key capabilities required in multi-agent environments in which different AI programs need to interact or compete in order to accomplish a goal.
- A heuristic technique, or a heuristic is any approach to problem solving or self-discovery that employs a practical method that is not guaranteed to be optimal, perfect, or rational, but is nevertheless sufficient for reaching an immediate, short-term goal or approximation.
- Explain how "TicTacToe" has 9! game states that we can use to construct a tree structure to denote every possible game state and every win/loss condition. 
- Dive into a bit of the math at a high level explaining concepts and not diving into proving everything mathematically and discussing every detail (But providing resources for students who want that to go and read for themselves) (Explain the WHAT and WHY of the math without talking too much about the HOW)

## Lesson 3 - Activity: The Legendary Undefeatable TicTacToe

- Everyone clones the starter code and starts working on the TODO blocks

# Unit 2 - Machine Learning: Supervised Learning

## Lesson 1 - Decision Trees

## Lesson 2 - Hypothesis Testing

# Unit 3 - Machine Learning: Neural Nets

## Lesson 1 - Linear Regression

## Lesson 2 - Multi-Linear Regression

## Lesson 4 - Neural Networks & Code-Along Activity

## Lesson 5 - Naive Bayes & Natural Language Processing

- Naive Bayes is good because: (1) Easy to implement, (2) Very efficient to run this algorithm on large datasets, it scales, (3) It is great for text categorization where it uses every word of an article as a feature (detect span, etc.)
- Naive Bayes can't handle phrases that are composed of multiple words (If you search "Chicago Bulls" it will give you pictures of Chicago and pictures of Bulls, not basketball)

## Lesson 6 - Support Vector Machines

## Lesson 7 - KNN Activity (Supervised)

- Compare to SVM https://www.quora.com/What-is-better-k-nearest-neighbors-algorithm-k-NN-or-Support-Vector-Machine-SVM-classifier-Which-algorithm-is-mostly-used-practically-Which-algorithm-guarantees-reliable-detection-in-unpredictable-situations

## Lesson 8 - Convolutional Neural Networks

## Lesson 9 - Generative Adversarial Neural Networks

## Lesson 10 - K-Means Clustering (Unsupervised)

- Unsupervised clustering is the problem of discerning multiple categories in a collection of UNSUPERVISED CLUSTERING objects. The problem is unsupervised because the category labels are not given. For example, suppose we record the spectra of a hundred thousand stars; are there different types of stars revealed by the spectra, and, if so, how many types and what are their characteristics? We are all familiar with terms such as “red giant” and “white dwarf,” but the stars do not carry these labels on their hats—astronomers had to perform unsupervised clustering to identify these categories. Other examples include the identification of species, genera, orders, and so on in the Linnæan taxonomy and the creation of natural kinds for ordinary objects.


_________________

Naive Bais - https://machinelearningmastery.com/naive-bayes-for-machine-learning/
_______________

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







This twelve hour AI unit will be structured like a taste tester for many different popular AI implementations that ends each AI topic with a working fun and/or useful activity

1. What is AI?
   - Board description of AI & what is intelligence?
   - Talk about branches of AI and explain that new techniques are being created and evolving every month
   - Describe some of the largest problems being solved in the real-world using AI across many different branches of AI
   - Set expectation for what will be covered in the 12 hours and what will not, especially on the mathematical side. Explain that the purpose is to give them enough knowledge to know what they're talking about in the field of AI. Explain that to become entry-level for an AI-heavy role at a prestigious company, an average person will need at least six months of 10 hour days researching and building personal projects to be competent - and this 12 hour session will serve as a great intro into that six month hustle for those who are interested.
2. Game Theory
   - Define an AI agent and how an agent is created inside an environment to solve a specific problem. A chess AI should not be told to drive a car, and a self-driving car AI should not be told to play chess!
   - Game Theory is essential to enable some of the key capabilities required in multi-agent environments in which different AI programs need to interact or compete in order to accomplish a goal
   - Explain how "TicTacToe" has 9! game states that we can use to construct a tree structure to denote every possible game state and every win/loss condition. 
   - Dive into a bit of the math at a high level explaining concepts and not diving into proving everything mathematically and discussing every detail (But providing resources for students who want that to go and read for themselves) (Explain the WHAT and WHY of the math without talking too much about the HOW)
   - Activity: The Legendary Undefeatable TicTacToe


What is AI?
- Keep it broad, explain popular variants of AI, explain how there are dozens of different types of AI and more are being created every day. The purpose of this lesson is to ease students into how to think about AI and what to expect. Should be an easy lesson of just listening.
- Make it very clear what the scope of the next 12 hours will include and what it will not. Then explain topics we will cover in a high level "movie trailer" type of fashion. 
- https://www.thedifferenceengine.tech/blog/2019/11/an-introduction-to-artificial-intelligence-the-four-types-of-ai

https://www.quora.com/What-are-some-of-the-most-important-branches-of-artificial-intelligence
- Robotics
- Expert systems
- Fuzzy logic
- Genetic programming, http://www.genetic-programming.com/gpanimatedtutorial.html

- Game theory (https://www.kdnuggets.com/2020/03/crash-course-game-theory-machine-learning.html#:~:text=In%20the%20context%20of%20artificial,order%20to%20accomplish%20a%20goal
- Min/Max Algorithm AI (minimizing the possible loss for a worst case (maximum loss) scenario) with Heuristics - Heuristic functions are used in some approaches to search to measure how far a node in a search tree seems to be from a goal. Heuristic predicates that compare two nodes in a search tree to see if one is better than the other, i.e. constitutes an advance toward the goal, may be more useful
- Programming Tic Tac Toe using Min-Max Algorithm (https://en.wikipedia.org/wiki/Minimax)

- Machine Learning (Supervised, Semi-Supervised, Unsupervised, Reinforcement Learning) - (https://blogs.nvidia.com/blog/2018/08/02/supervised-unsupervised-learning/)
- Linear Regression
- Multi-Linear Regression
- Gaussian Distribution
- Gradient Descent
- Back Propagation (backpropagation computes the gradient of the loss function with respect to the weights of the network for a single input–output example, and does so efficiently, unlike a naive direct computation of the gradient with respect to each weight individually. This efficiency makes it feasible to use gradient methods for training multilayer networks, updating weights to minimize loss; gradient descent, or variants such as stochastic gradient descent, are commonly used. The backpropagation algorithm works by computing the gradient of the loss function with respect to each weight by the chain rule, computing the gradient one layer at a time, iterating backward from the last layer to avoid redundant calculations of intermediate terms in the chain rule; this is an example of dynamic programming) https://en.wikipedia.org/wiki/Backpropagation
- Neural Networks
- Convolution neutral network for image recognition
- Natural language processing for sentiment analysis
