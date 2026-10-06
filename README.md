# Path Finder

Path Finder is a lightweight browser-based visualization tool for exploring common pathfinding algorithms on a grid. It helps you understand how algorithms such as Dijkstra, BFS, DFS, Best First Search, and A* explore the graph and reconstruct the shortest path step by step.

![Path Finder Demo](./homeAnimation1.gif)

## Features

- Visualize multiple pathfinding algorithms:
  - Depth First Search (DFS)
  - Breadth First Search (BFS)
  - Best First Search
  - Dijkstra
  - A*
- Draw walls and obstacles directly on the grid
- Drag and reposition the start and end nodes
- Generate a random maze
- Adjust visualization speed
- Clear the whole grid or just the path/visited nodes
- Step-by-step animation of visited nodes and the final shortest path

## Tech Stack

- HTML
- CSS
- JavaScript

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/just-ctrlC-ctrlV/Path-Visualizer.git
cd Path-Visualizer
```

### 2. Run the project

You can either open `index.html` directly in your browser or serve the project locally.

Option A: Open directly

```bash
open index.html
```

Option B: Use a local server

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## How to Use

1. Click and drag on the grid to create walls.
2. Drag the start and end nodes to change their positions.
3. Select an algorithm from the dropdown.
4. Choose a speed for the animation.
5. Click `Visualize` to see how the algorithm explores the grid.
6. Use `Clear Grid` or `Clear Path and Visited Nodes` to reset the board.

## Project Structure

```text
Path-Visualizer/
├── index.html
├── style.css
├── scriptBasics.js
├── homeAnimation1.gif
├── start.svg
├── end.svg
├── icnon.png
├── README.md
```

## License

This project is available for educational and personal use.

