"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000
app.use((0, cors_1.default)({
    origin: ['http://localhost:5173', 'https://my-frontend.com']
}));
// Basic middleware to parse JSON bodies
app.use(express_1.default.json());
// Define a simple route
app.get('/', (req, res) => {
    res.send({
        message: 'Hello, TypeScript with Express!',
    });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
