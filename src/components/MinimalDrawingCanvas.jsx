// // MinimalDrawingCanvas.jsx
// import React, { useEffect, useState } from 'react';
//
// const MinimalDrawingCanvas = ({ canvasRef, lines, setLines, color, isErasing }) => {
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [currentLine, setCurrentLine] = useState([]);
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         context.fillStyle = 'white';
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         drawAllLines(lines, canvas);
//     }, [canvasRef, lines]);
//
//     const startDrawing = (event) => {
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         setIsDrawing(true);
//         if (!isErasing) {
//             setCurrentLine([{ x, y }]);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     const endDrawing = () => {
//         setIsDrawing(false);
//         if (!isErasing) {
//             setLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: currentLine }]
//             });
//             setCurrentLine([]);
//         }
//         canvasRef.current.getContext('2d').beginPath();
//     };
//
//     const draw = (event) => {
//         if (!isDrawing) return;
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         if (!isErasing) {
//             const newCurrentLine = [...currentLine, { x, y }];
//             setCurrentLine(newCurrentLine);
//             drawAllLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: newCurrentLine }]
//             }, canvasRef.current);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     const erasePoints = (x, y) => {
//         const eraserSize = 5;
//         const newLines = { red: [], yellow: [], green: [] };
//
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 let newLine = [];
//                 line.points.forEach(point => {
//                     if (Math.hypot(point.x - x, point.y - y) > eraserSize) {
//                         newLine.push(point);
//                     } else {
//                         if (newLine.length > 0) {
//                             newLines[color].push({ points: newLine });
//                             newLine = [];
//                         }
//                     }
//                 });
//                 if (newLine.length > 0) {
//                     newLines[color].push({ points: newLine });
//                 }
//             });
//         });
//
//         setLines(newLines);
//         drawAllLines(newLines, canvasRef.current);
//     };
//
//     const drawAllLines = (lines, canvas) => {
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 if (line.points.length > 0) {
//                     context.strokeStyle = color;
//                     context.beginPath();
//                     context.moveTo(line.points[0].x, line.points[0].y);
//                     for (let i = 1; i < line.points.length; i++) {
//                         context.lineTo(line.points[i].x, line.points[i].y);
//                     }
//                     context.stroke();
//                 }
//             });
//         });
//     };
//
//     const getCoordinates = (event, canvas) => {
//         const rect = canvas.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//         return { x, y };
//     };
//
//     return (
//         <div>
//             <canvas
//                 ref={canvasRef}
//                 width={800}
//                 height={600}
//                 style={{ border: '1px solid black' }}
//                 onMouseDown={startDrawing}
//                 onMouseUp={endDrawing}
//                 onMouseMove={draw}
//             />
//         </div>
//     );
// };
//
// export default MinimalDrawingCanvas;



// // MinimalDrawingCanvas.jsx
// import React, { useEffect, useState } from 'react';
//
// // The MinimalDrawingCanvas component provides a simple drawing canvas with drawing and erasing functionalities.
// const MinimalDrawingCanvas = ({ canvasRef, lines, setLines, color, isErasing }) => {
//     const [isDrawing, setIsDrawing] = useState(false); // State to track if the user is currently drawing
//     const [currentLine, setCurrentLine] = useState([]); // State to store the current line being drawn
//
//     // useEffect hook to initialize the canvas with a white background and draw all existing lines
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         context.fillStyle = 'white';
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         drawAllLines(lines, canvas);
//     }, [canvasRef, lines]);
//
//     // Function to start drawing, gets called when the user presses the mouse button down on the canvas
//     const startDrawing = (event) => {
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         setIsDrawing(true);
//         if (!isErasing) {
//             setCurrentLine([{ x, y }]);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     // Function to end drawing, gets called when the user releases the mouse button
//     const endDrawing = () => {
//         setIsDrawing(false);
//         if (!isErasing) {
//             setLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: currentLine }]
//             });
//             setCurrentLine([]);
//         }
//         canvasRef.current.getContext('2d').beginPath();
//     };
//
//     // Function to draw on the canvas, gets called when the user moves the mouse while the button is pressed
//     const draw = (event) => {
//         if (!isDrawing) return;
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         if (!isErasing) {
//             const newCurrentLine = [...currentLine, { x, y }];
//             setCurrentLine(newCurrentLine);
//             drawAllLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: newCurrentLine }]
//             }, canvasRef.current);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     // Function to erase points around a given coordinate
//     const erasePoints = (x, y) => {
//         const eraserSize = 5;
//         const newLines = { red: [], yellow: [], green: [] };
//
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 let newLine = [];
//                 line.points.forEach(point => {
//                     if (Math.hypot(point.x - x, point.y - y) > eraserSize) {
//                         newLine.push(point);
//                     } else {
//                         if (newLine.length > 0) {
//                             newLines[color].push({ points: newLine });
//                             newLine = [];
//                         }
//                     }
//                 });
//                 if (newLine.length > 0) {
//                     newLines[color].push({ points: newLine });
//                 }
//             });
//         });
//
//         setLines(newLines);
//         drawAllLines(newLines, canvasRef.current);
//     };
//
//     // Function to draw all lines on the canvas
//     const drawAllLines = (lines, canvas) => {
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 if (line.points.length > 0) {
//                     context.strokeStyle = color;
//                     context.beginPath();
//                     context.moveTo(line.points[0].x, line.points[0].y);
//                     for (let i = 1; i < line.points.length; i++) {
//                         context.lineTo(line.points[i].x, line.points[i].y);
//                     }
//                     context.stroke();
//                 }
//             });
//         });
//     };
//
//     // Function to get the coordinates of the mouse event relative to the canvas
//     const getCoordinates = (event, canvas) => {
//         const rect = canvas.getBoundingClientRect();
//         const x = event.clientX - rect.left;
//         const y = event.clientY - rect.top;
//         return { x, y };
//     };
//
//     // Rendering the canvas element
//     return (
//         <div>
//             <canvas
//                 ref={canvasRef}
//                 width={800}
//                 height={600}
//                 style={{ border: '1px solid black' }}
//                 onMouseDown={startDrawing}
//                 onMouseUp={endDrawing}
//                 onMouseMove={draw}
//             />
//         </div>
//     );
// };
//
// export default MinimalDrawingCanvas;


// import React, { useEffect, useState } from 'react';
//
// const MinimalDrawingCanvas = ({ canvasRef, lines, setLines, color, isErasing }) => {
//     const [isDrawing, setIsDrawing] = useState(false);
//     const [currentLine, setCurrentLine] = useState([]);
//
//     useEffect(() => {
//         const canvas = canvasRef.current;
//         const context = canvas.getContext('2d');
//         context.fillStyle = 'white';
//         context.fillRect(0, 0, canvas.width, canvas.height);
//         drawAllLines(lines, canvas);
//     }, [canvasRef, lines]);
//
//     const startDrawing = (event) => {
//         event.preventDefault(); // Prevent scrolling on touch devices
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         setIsDrawing(true);
//         if (!isErasing) {
//             setCurrentLine([{ x, y }]);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     const endDrawing = (event) => {
//         event.preventDefault(); // Prevent scrolling on touch devices
//         setIsDrawing(false);
//         if (!isErasing) {
//             setLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: currentLine }]
//             });
//             setCurrentLine([]);
//         }
//         canvasRef.current.getContext('2d').beginPath();
//     };
//
//     const draw = (event) => {
//         event.preventDefault(); // Prevent scrolling on touch devices
//         if (!isDrawing) return;
//         const { x, y } = getCoordinates(event, canvasRef.current);
//         if (!isErasing) {
//             const newCurrentLine = [...currentLine, { x, y }];
//             setCurrentLine(newCurrentLine);
//             drawAllLines({
//                 ...lines,
//                 [color]: [...lines[color], { points: newCurrentLine }]
//             }, canvasRef.current);
//         } else {
//             erasePoints(x, y);
//         }
//     };
//
//     const erasePoints = (x, y) => {
//         const eraserSize = 5;
//         const newLines = { red: [], yellow: [], green: [] };
//
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 let newLine = [];
//                 line.points.forEach(point => {
//                     if (Math.hypot(point.x - x, point.y - y) > eraserSize) {
//                         newLine.push(point);
//                     } else {
//                         if (newLine.length > 0) {
//                             newLines[color].push({ points: newLine });
//                             newLine = [];
//                         }
//                     }
//                 });
//                 if (newLine.length > 0) {
//                     newLines[color].push({ points: newLine });
//                 }
//             });
//         });
//
//         setLines(newLines);
//         drawAllLines(newLines, canvasRef.current);
//     };
//
//     const drawAllLines = (lines, canvas) => {
//         const context = canvas.getContext('2d');
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         Object.keys(lines).forEach(color => {
//             lines[color].forEach(line => {
//                 if (line.points.length > 0) {
//                     context.strokeStyle = color;
//                     context.beginPath();
//                     context.moveTo(line.points[0].x, line.points[0].y);
//                     for (let i = 1; i < line.points.length; i++) {
//                         context.lineTo(line.points[i].x, line.points[i].y);
//                     }
//                     context.stroke();
//                 }
//             });
//         });
//     };
//
//     const getCoordinates = (event, canvas) => {
//         const rect = canvas.getBoundingClientRect();
//         const x = event.touches ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
//         const y = event.touches ? event.touches[0].clientY - rect.top : event.clientY - rect.top;
//         return { x, y };
//     };
//
//     return (
//         <div className="canvas-container">
//             <canvas
//                 ref={canvasRef}
//                 width={800}
//                 height={600}
//                 style={{ border: '1px solid black' }}
//                 onMouseDown={startDrawing}
//                 onMouseUp={endDrawing}
//                 onMouseMove={draw}
//                 onTouchStart={startDrawing}
//                 onTouchEnd={endDrawing}
//                 onTouchMove={draw}
//             />
//         </div>
//     );
// };
//
// export default MinimalDrawingCanvas;




import React, { useEffect, useState } from 'react';

const MinimalDrawingCanvas = ({ canvasRef, lines, setLines, color, isErasing, width }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentLine, setCurrentLine] = useState([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.lineWidth = 3;
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawAllLines(lines, canvas);
    }, [canvasRef, lines]);

    const startDrawing = (event) => {
        event.preventDefault(); // Prevent scrolling on touch devices
        const { x, y } = getCoordinates(event, canvasRef.current);
        setIsDrawing(true);
        if (!isErasing) {
            setCurrentLine([{ x, y }]);
        } else {
            erasePoints(x, y);
        }
    };

    const endDrawing = (event) => {
        event.preventDefault(); // Prevent scrolling on touch devices
        setIsDrawing(false);
        if (!isErasing) {
            setLines({
                ...lines,
                [color]: [...lines[color], { points: currentLine }]
            });
            setCurrentLine([]);
        }
        canvasRef.current.getContext('2d').beginPath();
    };

    const draw = (event) => {
        event.preventDefault(); // Prevent scrolling on touch devices
        if (!isDrawing) return;
        const { x, y } = getCoordinates(event, canvasRef.current);
        if (!isErasing) {
            const newCurrentLine = [...currentLine, { x, y }];
            setCurrentLine(newCurrentLine);
            drawAllLines({
                ...lines,
                [color]: [...lines[color], { points: newCurrentLine }]
            }, canvasRef.current);
        } else {
            erasePoints(x, y);
        }
    };

    const erasePoints = (x, y) => {
        const eraserSize = 5;
        const newLines = { red: [], yellow: [], green: [] };

        Object.keys(lines).forEach(color => {
            lines[color].forEach(line => {
                let newLine = [];
                line.points.forEach(point => {
                    if (Math.hypot(point.x - x, point.y - y) > eraserSize) {
                        newLine.push(point);
                    } else {
                        if (newLine.length > 0) {
                            newLines[color].push({ points: newLine });
                            newLine = [];
                        }
                    }
                });
                if (newLine.length > 0) {
                    newLines[color].push({ points: newLine });
                }
            });
        });

        setLines(newLines);
        drawAllLines(newLines, canvasRef.current);
    };

    const drawAllLines = (lines, canvas) => {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        Object.keys(lines).forEach(color => {
            lines[color].forEach(line => {
                if (line.points.length > 0) {
                    context.strokeStyle = color;
                    context.beginPath();
                    context.moveTo(line.points[0].x, line.points[0].y);
                    for (let i = 1; i < line.points.length; i++) {
                        context.lineTo(line.points[i].x, line.points[i].y);
                    }
                    context.stroke();
                }
            });
        });
    };

    const getCoordinates = (event, canvas) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.touches ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
        const y = event.touches ? event.touches[0].clientY - rect.top : event.clientY - rect.top;
        return { x, y };
    };

    return (
        <div className="canvas-container">
            <canvas
                ref={canvasRef}
                width={width}
                height={width} //the canvas ratio should always be 1:1 therefore height = width
                // style={{ border: '1px solid black' }}
                onMouseDown={startDrawing}
                onMouseUp={endDrawing}
                onMouseMove={draw}
                onTouchStart={startDrawing}
                onTouchEnd={endDrawing}
                onTouchMove={draw}
            />
        </div>
    );
};

export default MinimalDrawingCanvas;
