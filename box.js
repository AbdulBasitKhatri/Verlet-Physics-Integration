class Box {
    constructor(x, y, w, h, showConstrains = false, showVertices = false) {
        this.vertices = [];
        this.vertices.push(new Vertex(x, y, 3));
        this.vertices.push(new Vertex(x + w, y, 3));
        this.vertices.push(new Vertex(x + w, y + h, 3));
        this.vertices.push(new Vertex(x, y + h, 3));
        this.constrains = [];
        this.constrains.push(new Constraint(this.vertices[0], this.vertices[1], w));
        this.constrains.push(new Constraint(this.vertices[1], this.vertices[2], h));
        this.constrains.push(new Constraint(this.vertices[2], this.vertices[3], w));
        this.constrains.push(new Constraint(this.vertices[3], this.vertices[0], h));
        this.constrains.push(new Constraint(this.vertices[0], this.vertices[2], Math.sqrt(w ** 2 + h ** 2)));
        this.constrains.push(new Constraint(this.vertices[1], this.vertices[3], Math.sqrt(w ** 2 + h ** 2)));
        this.showConstrains = showConstrains;
        this.showVertices = showVertices;
    }
    update() {
        for (let vertex of this.vertices) {
            vertex.update();
        }
        for (let i = 0; i < 5; i++) {
            for (let constrain of this.constrains) {
                constrain.update();
            }
            for (let vertex of this.vertices) {
                if (vertex.worldBound) { vertex.worldBoundCheck(); }
            }
        }
        if (this.showConstrains) {
            for (let constrain of this.constrains) {
                constrain.draw();
            }
        }
        if (this.showVertices) {
            for (let vertex of this.vertices) {
                vertex.draw();
            }
        }
    }
}
