# Objective

Build a simple React application (preferably using TypeScript) with a home page including the
hero section as below and following the best practices in regards to the code structure, CSS,
API integration and setting the application up for scale.

## Requirements

- Create a page with the hero section based on the designs in Figma (it will be a simple
  page with only this one section)
- You have a complete discretion over what components you decide to build and how you
  structure your code, although we will look at it from the best practices perspective
  (please refrain from using existing components libraries)
  PRIVATE AND CONFIDENTIAL
- We want to see how you will implement the custom styling and how proficient you are in
  CSS (please use Figma as a guide in terms of the colors, spacing, resources etc)
- The section should be responsive - in Figma you will also find the designs for different
  screen sizes
- Please have a look at Figma file and the card behavior description (in regards to the
  accordion and a clickable area)
- The list items data for a free consultation and a therapy sessions (accordions) should
  come from the mocked API: https://moshhero.free.beeceptor.com/my/api/options
  The rest of the copy is static.
- The buttons can link to:
  - Get started - https://www.getmosh.com.au/quizzes/mental_health_quiz
  - Book therapist - https://www.getmosh.com.au/booking/mental_health

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

### Cool bits

- CI/CD hooks
- Next js
- Mocked api down backed up by hard coded mocks
- Css modules (not convinced by this approach)
- Use Query to fetch data, It is a standard now
- Type guard to sort `renderAction` TS issue

### Could be better with more time

- theme spacing
- Accordion items `display: none` => renders twice in the DOM
- Maybe there is a better way to handle the accordion toggling
- Image specific per device size to avoid "zooming effect" on mobile

### Not covered

- Accessibility
- Cross browser check
- Paid font family for h1 (Clearface ITC Pro) replaced with a similar one
- Server component fetching / SSR / SSG
- Suspense loading
- Api fetching error/loading UI
- BEM css naming convention

### Assumptions

- Figma does not indicate the minWidth for breakpoint (1440px for Desktop is far too large) so I arbitrary chose them
- Hug Sub text not breaking the same on mobile device, I assumed it is a design bug
