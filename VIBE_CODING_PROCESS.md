# Vibe Coding Process — Portfolio Web App

> This is a first draft based on how the project was actually built. Read
> it, and rewrite anything in your own words before submitting — the
> assignment specifically asks for *your* explanation of *your* decisions,
> not a generated one.

## 1. What I used

- **AI tool:** Claude (Anthropic), used through the claude.ai chat interface
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Hosting:** Vercel (deployed from GitHub)

## 2. Where I started

I started from data I already had, not from a blank page:
- My existing CV (`CV_หางานไทย.pdf`) — education, skills, and five
  project write-ups
- The assignment brief itself, which specifies exactly which sections a
  recruiter-ready portfolio needs (Hero, About, Skills, Projects,
  Experience, CV+Contact)

## 3. Key prompts

**First prompt** — gave the AI the assignment brief PDF and my CV PDF
together, and asked it to build a portfolio web app following the
brief's structure using my real content, in React + Tailwind.

**Follow-up prompts** (the ones that actually shaped the result, not
just the first one):
- Chose React + Tailwind over plain HTML when asked, since it better
  shows the frameworks listed in my skills section
- Asked for a design that didn't look like a generic AI-generated
  template — a dark, developer-toned layout instead of a default
  card-grid with a centered hero
- Reviewed the project cards and decided the AI Chatbot project
  (RAG + FAISS + Groq API) should be the *Featured* project, since it's
  the most technically distinctive one and best matches the "AI
  Engineer" roles I want to apply to

## 4. What the AI helped with

- Turning CV bullet points into the Problem / Solution / Role / Tech /
  Outcome structure the assignment's rubric asks for, for each project
- Generating the React component structure and Tailwind styling
- Writing the deployment and pre-submission checklist steps

## 5. A problem I ran into (fill in your real one)

Example: *The CV listed project names and feature bullets, but not a
clear "problem statement" for each project — I had to go back and
think through, for each one, what problem it was actually solving
before the content could match the rubric's Problem/Solution format.*

Replace this with what actually happened when you set it up yourself —
a broken mobile menu, a link that didn't work, content that felt too
generic, etc.

## 6. How I fixed it

Example: *For each project I wrote a one-line "why does this exist"
problem statement before letting the AI restructure the rest of the
bullet points around it, instead of asking it to invent the problem
statement itself.*

## 7. Where the AI got it wrong

Note at least one thing the AI generated that you didn't accept as-is —
a wrong tone, an inaccurate technical claim, a design choice you
overrode. Recruiters and instructors specifically want to see that you
reviewed the output critically instead of shipping it blind.

## 8. What I decided myself

- Which projects to feature and in what order
- The wording of my own bio and career target
- Whether the AI's technical claims about each project were accurate
- Final review of every link before deployment

## 9. Why this design

Short version: a developer's portfolio should look like something a
developer built, not a marketing landing page. The dark, code-panel
aesthetic and file-tree navigation are a deliberate reference to the
tools I actually use daily, and the project cards mirror the
Problem/Solution/Role/Tech/Outcome structure the assignment itself uses
to judge project evidence.

## 10. What I'd improve next

Space for your own reflection — e.g. adding real screenshots per
project, a downloadable PDF resume link, or expanding the About section
once you have more work experience.
