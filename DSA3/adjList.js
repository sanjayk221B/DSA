class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }

    vertices() {
        let s = Object.keys(this.adjacencyList)
        console.log(s)
    }


    bfs(startingVertex) {
        let visited = {}
        let queue = []

        visited[startingVertex] = true
        queue.push(startingVertex)

        while (queue.length > 0) {
            const vertex = queue.shift()
            console.log(vertex)

            for (let neighbour of this.adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            }
        }

        for (let vertex in this.adjacencyList) {
            if (!visited[vertex]) {
                console.log(vertex)
                visited[vertex] = true
            }
        }
    }

    dfs(startingVertex) {
        let allValues = new Set(Object.keys(this.adjacencyList))
        let visited = {}

        for (let vertex of allValues) {
            visited[vertex] = false
        }

        const dfsHelper = (vertex) => {
            visited[vertex] = true
            console.log(vertex)
            allValues.delete(vertex)

            for (let neighbour of this.adjacencyList[vertex]) {
                if (!visited[neighbour]) {
                    dfsHelper(neighbour)
                }
            }
        }

        dfsHelper(startingVertex)

        for (let vertex of allValues) {
            if (!visited[vertex]) {
                dfsHelper(vertex)
            }
        }
    }
}

const graph = new Graph()

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A", "B")
// graph.addEdge("A", "E")
// graph.addEdge("B", "C")

// // graph.display()
// // console.log(graph.hasEdge("A", "B"))

// // graph.removeVertex("B")
// // graph.display()
// // graph.vertices()

// graph.bfs('B')
// console.log('akshfhjsahfkjasfh');
// graph.dfs('B')


graph.addVertex(35);
graph.addVertex(10);
graph.addVertex(30);
graph.addVertex(60);
graph.addVertex(5);
graph.addVertex(20);


graph.addEdge(35, 10);
graph.addEdge(30, 10);
graph.addEdge(35, 30);
graph.addEdge(5, 20);
// graph.display()

console.log('=====DFS')
graph.dfs(10);
console.log('=====BFS')
graph.bfs(35);