
# React Scratch Logo Visual Coder

A Scratch-like visual programming application built with React, TypeScript, and Tailwind CSS. This project provides an interactive, block-based coding environment where users can create scripts to control a sprite on a stage, draw complex patterns, and build simple animations.

![React Visual Coder Screenshot](screenshots/ReactVisualCoder.png)

## ✨ Core Features

*   **Block Palette**: A rich library of code blocks, categorized by function (Motion, Looks, Control, Pen, Variables).
*   **Drag-and-Drop Scripting Area**: An intuitive canvas where users can drag blocks from the palette, snap them together to form scripts, and edit their parameters.
*   **Live Stage**: A visual stage where a sprite executes the created scripts in real-time. It includes controls to **Go** (run), **Stop**, and **Reset** the execution.
*   **Pen Drawing**: The sprite is equipped with a virtual pen, allowing it to draw colorful and intricate shapes, patterns, and fractals on the stage as it moves.
*   **Variable Management**: Users can create, set, and modify variables, enabling more complex logic, such as counters for loops or dynamic values for drawing.
*   **Control Flow**: Supports essential control structures like the `repeat` block, which can be nested to create sophisticated loops and recursive patterns.
*   **Extensive Demo Library**: Comes with over 30 pre-built demo scripts—from simple polygons to a beautiful fractal tree—that showcase the application's capabilities and provide a great starting point for users.

## 🚀 Technologies Used

*   **React**: For building the user interface with a component-based architecture.
*   **TypeScript**: For static typing, improving code quality and maintainability.
*   **Tailwind CSS**: For rapidly styling the application with a utility-first CSS framework.

## 🔧 How to Use

1.  **Select Blocks**: Browse the **Block Palette** on the left to find the blocks you need.
2.  **Build Your Script**: Drag blocks from the palette and drop them into the **Script Area** in the center. They will snap together automatically.
3.  **Customize Parameters**: Click on the input fields within the blocks to change values, select colors, or use variables.
4.  **Run Your Code**: Click the **"When clicked"** button above the script or the green **"Go"** flag on the Stage to see your script come to life.
5.  **Explore Demos**: Don't know where to start? Click on any of the buttons in the **Demos** panel to load a pre-made project and see how it works!
6.  **Reset**: Click the **"Reset"** button on the stage to clear the drawing canvas, reset the sprite's position, and clear all variables.
