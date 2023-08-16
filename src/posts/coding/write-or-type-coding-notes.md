---
title: Stop! Top 3 mistakes you make when learning to code
slug: three-mistakes-learning-to-code
excerpt: "Gone are the days of writing notes on coding. Coding is inherently different than other disciplines. Just making projects isn't enough, and writing down notes is too slow. What you need is a complete overhaul - digitized."
date: 2023-02-21
author: Aadil Mallick
description: "This is the first post of my new Astro blog."
image:
  url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*KrOh4U8fO0vbwEO4.png"
  alt: "Guy coding"
tags: ["coding"]
sub_tags: []
---

Learning to code is a practical process that may _seem_ like it doesn't need note-taking, but the actual truth is the exact opposite.

Whether you've been creating your 354th todo-do app in React for that "hands-on learning", or you frantically stab your notebook with graphite like you're in Bio 203, I can guarantee one thing:

> you're doing it wrong

Here are three common mistakes that developers commit when taking notes on coding:

1. Not taking notes at all.
2. Taking notes in a paper notebook (please, no).
3. Doing projects without a _what I learned_ section

Let's go into these in detail.

## You must take notes

If you've been a developer long enough, then you already know how to finish a sentence that starts with _hands-on_ or _personal_.

I'm not here to refute how personal projects are good for learning. Really. But ask yourself this: is what you're doing _learning_, or _doing_?

You can absorb some concepts in coding through doing, and others through learning. Trying to learn firebase with authentication and firestore might require a "doing" approach, but for other high level topics like machine learning, resist your indoctrination: go turn off vscode and open a google doc.

> You simply won't remember as much through a "doing" approach.

Because projects only enhance your ability to code, not so much your ability to understand it. If you want to understand code, you need a "learning" approach, which includes all the things you might hate - documentation, video tutorials, and note-taking.

A learning approach lets you understand the purpose of a piece of code, letting you master any use case for that code snippet as you see fit.

For example, let's dissect a simple function that most JavaScript developers know, and compare the differences in how a "doer" and "learner" developer examine this code:

```javascript
x = [1,2,3,4]
x.map(...)
```

**Doer**

After hundreds of hours of devouring FreeCodeCamp and Traversy Media videos, the doer can close his eyes and insert an arrow function in 0.024 seconds.

```javascript
x = [1, 2, 3, 4];
x.map((num) => console.log("I am so smart lol" + x));
```

Maybe he forgot that normal functions you could define with the `function` keyword actually exist.

99% of times, the major use case of the `map()` method is to only iterate through the elements. And while the doer's efficiency appears like an obvious benefit, he lacks some aspects that the smart learner took the time to learn...

**Learner**

The learner took five extra minutes to learn all use case cases for the `map()` method, and what you actually pass in instead of an arrow function.

```javascript
x = [1, 2, 3, 4];
x.map((element, index) => {
  console.log("The map method has access to the element and index.");

  console.log(element, index);
  console.log("The Geneva Convention was a ...");
});
```

You may think that something as small as how to use `map()` isn't important, and you'd be right. But don't underestimate the mindset of a learner. Taking the initiative to learn about a function, a situation - anything - is essential for strengthening what you _can_ do with a piece of code.

And trust me: when implementing something like google OAuth, you'll be glad you read the documentation and studied videos instead of jumping into a Github gist; and almost always, the code snippet uses an unmaintained npm package and thus sinks you deeper into the icy sea of debugging.

**Learning vs Doing summary**

But in short, here are the major benefits for a "doing" approach:

- More practice with code.
- Useful for low-level practice with services and APIs.

And the benefits for a "learning" approach:

- Promotes a high-level understanding of difficult topics, like data structures and machine learning
- Helps understand code better, such as how and where to use it.

I'm not saying to not do projects. Because honestly, results are what matter in the end. projects give you those results. But learning makes the creating process easier, and if you want to improve your programming skills, you need to not only _do_ - but also _learn_.

## Type rather than write

The average writing speed is **40 letters per minute**. On the other "hand" (at least I think it's a decent pun), the average person types at 43 _words_ per minute. I can't stress this huge speed differenc enough.

To help you visualize this further, we'll move forward with a famous thought experiment: the 52 factorial cards arrangement theory (source: I made it up).

Imagine two people: a writer and a typist. Their task is to write down all the possible combinations you can arrange a deck of cards, with no repetition. The number of unique arrangements possible is 52!(factorial), which is 52 times 51 times 50 ... all the way down to 1. Pretty big, huh?

Now here's the real hoot'n holler about this thought experiment, which Albert Einstein himself (probably) theorized :

- The writer and typist keep recording the arrangements of the cards, until the end of time or at least until they both die.
- Although the typist dies first because of severe carpal tunnel, he records ten times the number of arrangements than the writer does.

Even though finishing the recording task would take longer than the time it takes for the universe to reach heat death, we learned something valuable from this experiment:

> typing is faster than writing

That was a long-winded way of saying it, but yes - put down the notebook and take out your laptop. Coding is a vast, expansive subject. It's easy to understand, but make no mistake - you will never know everything there is to know about coding.

And that's good. Coding isn't about memorization, as opposed to other subjects like medicine where memorization is the thin line between life or death.

The main reason why experts tout writing down your notes as the best writing method is because it promotes memorization. We developers don't need that benefit. We memorize patterns, ideas - and let our fingers do the work.

## Skimping out on projects

It's been 12 hours. You were on the roll for the first 10, but then for the last 2 hours, a cryptic error bogged you down deeper into your chair, with rage building up in your body that wants to make you tear your hair out.

But your dream project is finally done. You push your code to github, ungratefully slam your laptop shut, and lie down in your bed. And then you never touch your project again.

> What did you do wrong here?

You learned so many concepts, API structures, and programming patterns in this project, and then you did ... nothing. Nothing at all.

You'll forget everything after a week, maybe two if you're lucky. Then what if you want to use those concepts that you learned in your project again? The answer isn't pretty: you'd have to build a new project.

If you want to escape this cycle, you have to write down what you learned from this project. I'm not talking about platitudes like _calling the API was tough, but I finally figured it out_, but rather technical details explaining the actual code you wrote.

Here's a quick example illustrating what you would write down for a TODO app using firebase:

- Code and steps for setting up firebase.
- Any authentication steps, andy custom hooks you create.
- Any firestore method calls you use, the code to create, read, update, and delete TODOs.

But do you want a neat solution that wraps all three of these concepts into a compact, convenient gift? Then let's collaborate with Colab.

## Using Google Colab

Google Colab is an online version of the Jupyter Notebook system, which is a way of combining code and markdown to have pretty code files.

![google colab notebook](https://miro.medium.com/max/1400/0*RrtMcK8prO33i9lY)

> See? Real nice and pretty.

The perfect way to take notes is to paste code into a code cell, and then explain the code concepts of that cell in a markdown cell.

With separation of code from text, understanding your project and code is much, much easier.
