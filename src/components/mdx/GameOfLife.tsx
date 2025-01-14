'use client';
import { useEffect, useRef, useState } from 'react';

const CELL_SIZE = 8;

interface Cell {
  alive: boolean;
  color: number;
}

export default function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Cell[][]>([]);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);
  const frameIdRef = useRef<number | undefined>(undefined);

  // Initialize grid
  useEffect(() => {
    const updateDimensions = () => {
      if (!canvasRef.current) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      
      const cols = Math.floor(width / CELL_SIZE);
      const rows = Math.floor(height / CELL_SIZE);
      setCols(cols);
      setRows(rows);

      // Create random initial state with random colors
      gridRef.current = Array(rows).fill(null).map(() =>
        Array(cols).fill(null).map(() => ({
          alive: Math.random() > 0.85,
          color: Math.floor(Math.random() * 360)
        }))
      );
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Game loop
  useEffect(() => {
    if (!gridRef.current.length) return;

    const computeNextGen = (grid: Cell[][]) => {
      const nextGen = Array(rows).fill(null).map(() => Array(cols).fill(null));
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          let neighbors = 0;
          const neighborColors: number[] = [];
          
          // Count neighbors and collect their colors
          for (let di = -1; di <= 1; di++) {
            for (let dj = -1; dj <= 1; dj++) {
              if (di === 0 && dj === 0) continue;
              const ni = (i + di + rows) % rows;
              const nj = (j + dj + cols) % cols;
              if (grid[ni][nj].alive) {
                neighbors++;
                neighborColors.push(grid[ni][nj].color);
              }
            }
          }

          // Determine new state and color
          const alive = grid[i][j].alive 
            ? neighbors === 2 || neighbors === 3
            : neighbors === 3;

          // Average color of neighbors
          let newColor = grid[i][j].color;
          if (alive && neighborColors.length > 0) {
            newColor = neighborColors.reduce((a, b) => a + b) / neighborColors.length;
          }

          nextGen[i][j] = { alive, color: newColor };
        }
      }
      
      return nextGen;
    };

    const drawGrid = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw cells with their colors
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (gridRef.current[i][j].alive) {
            const hue = gridRef.current[i][j].color;
            ctx.fillStyle = `hsla(${hue}, 70%, 50%, 0.5)`;
            ctx.fillRect(
              j * CELL_SIZE,
              i * CELL_SIZE,
              CELL_SIZE - 1,
              CELL_SIZE - 1
            );
          }
        }
      }
    };

    const animate = () => {
      gridRef.current = computeNextGen(gridRef.current);
      drawGrid();
      frameIdRef.current = requestAnimationFrame(animate);
    };

    frameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
    };
  }, [cols, rows]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50"
    />
  );
}