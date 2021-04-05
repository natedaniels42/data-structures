const Vertex = require('./Vertex');
const Queue = require('../Queue');

class Graph {
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);
        return newVertex;
    }
}

const g = new Graph();

const one = g.addVertex(1);

console.log(g);