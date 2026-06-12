Magic 8

A minimalist, interactive web application that mimics the classic Magic 8-Ball to give you a second opinion

- **Mouse-Movement Shake Trigger**: Tracking algorithm measures cursor distance (`totalMovement > 1000`) across the ball to trigger physical shake animations.
- **Dynamic Fortune Color-Coding**: The prediction triangle dynamically shifts color gradients and glow effects based on the outcome:
  -  **Positive Outcomes**: Green radial gradient, upside-down triangle (`180deg`), and intense green shadow glow.
  -  **Vague/Retry Outcomes**: Yellow/olive radial gradient, upright triangle, and yellow shadow glow.
  -  **Negative Outcomes**: Red radial gradient, upright triangle, and red shadow glow.
- **Classic Response Matrix**: Implements all 20 original standard Magic 8-Ball answers categorised strictly into Good, Redo, and Bad matrices.
- **Pure CSS Animations**: Smooth `@keyframes` implementations handling aggressive fluid shakes and soft reset wiggles.


The project consists of three lightweight files:
- `index.html` - Structured layout containing the layered 8-Ball DOM components (`Ball` -> `Glass` -> `triangle` -> `StartText`).
- `answers.js` - Application logic handling mouse vector tracking, random fortune selection, and dynamic inline DOM style updates.
- `Fortune.css` - Custom styling defining the deep radial dark ball finishes, clip-path geometry for the inner triangle, and custom CSS animations.
How to Start-
1. Save all three files (`index.html`, `answers.js`, and `Fortune.css`) together inside the same folder.
2. Double-click `index.html` to instantly open the interactive application inside your default web browser.
3. Hover your cursor over the black 8-Ball and move your mouse quickly side-to-side to trigger the shake.
