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

    removeVertex(vertex) {
        if (!(vertex instanceof Vertex)) {
            throw Error('Must be a Vertex');
        } else {
            vertex.edges.map(edge => edge.end.removeEdge(vertex));
            this.vertices = this.vertices.filter(x => x !== vertex);
        }
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

    removeEdge(vertex1, vertex2) {
        if (!(vertex1 instanceof Vertex) || !(vertex2 instanceof Vertex)) {
            throw Error('Both must be Vertices');
        } else {
            vertex1.removeEdge(vertex2);
            if (!this.isDirected) {
                vertex2.removeEdge(vertex1);
            }
        }
    }

    depthFirstTraversal(start, visitedVertices = [start]) {
        console.log(start.data);

        start.edges.forEach(edge => {
            const neighbor = edge.end;

            if (!visitedVertices.includes(neighbor)) {
                visitedVertices.push(neighbor);
                this.depthFirstTraversal(neighbor, visitedVertices);
            }
        })
    }

    print() {
        this.vertices.map(vertex => vertex.print());
    }
}

const g = new Graph(true);

const one = g.addVertex(1);
const two = g.addVertex(2);
const three = g.addVertex(3);
const four = g.addVertex(4);
const five = g.addVertex(5);
const six = g.addVertex(6);
const seven = g.addVertex(7);
const eight = g.addVertex(8);
const nine = g.addVertex(9);
const ten = g.addVertex(10);

g.addEdge(one, two, 100);
g.addEdge(one, three, 200);
g.addEdge(two, five, 400);
g.addEdge(three, four, 150);
g.addEdge(five, four, 250);
g.addEdge(four, six, 600);
g.addEdge(six, seven, 75);
g.addEdge(seven, nine, 500);
g.addEdge(six, eight, 450);
g.addEdge(eight, ten, 1000);

g.depthFirstTraversal(one);
//g.print();