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

    addEdge(vertex1, vertex2, weight) {
        if (!(vertex1 instanceof Vertex) || !(vertex2 instanceof Vertex)) {
            throw Error('Both must be Vertices');
        } else {
            const edgeWeight = this.isWeighted ? weight : null;
            vertex1.addEdge(vertex2, edgeWeight);
            if (!this.isDirected) {
                vertex2.addEdge(vertex1, edgeWeight);
            }
        }
    }
}

const g = new Graph();

const one = g.addVertex(1);
const two = g.addVertex(2);

g.addEdge(one, two);


console.log(g);