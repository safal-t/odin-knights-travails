# odin-knights-

A JavaScript implementation of the classic Knight's shortest-path problem on a chessboard.

## 🧠 Problem Statement

Given a standard 8x8 chessboard, this program finds the shortest possible path a knight can take to move from a starting square to a target square. It uses a **Breadth-First Search (BFS)** algorithm to guarantee the shortest path in terms of number of moves.

## ♞ Approach

- The board is treated as an implicit graph where:
  - Each square is a **node**
  - Each valid knight move is an **edge**
- BFS is used to explore all paths in increasing order of length.
- Each queue element carries its own **position** and the **path taken so far**.

## 🔍 Example

```js
knightMoves([0, 0], [7, 7]);
// You made it in 6 moves! Here's your path: [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
```
