function knightMoves(startingSquare, endSquare) {

    const POSSIBLEMOVES = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ]

    const start = startingSquare // [x, y]
    const end = endSquare // [x, y]

    const queue = []
    queue.push({ position: start, path: [start] })

    while (queue.length > 0) {
        const current = queue.shift();

        if (current.position.toString() === end.toString()) {
            return `You made it in ${current.path.length - 1} moves! Here's your path: ${JSON.stringify(current.path)}`
        }

        for (let [dx, dy] of POSSIBLEMOVES) {
            const [x, y] = current.position
            const newPosition = [dx + x, dy + y]

            if (isValid(newPosition)) {
                queue.push({ position: newPosition, path: [...current.path, newPosition] })
            }
        }
    }

    function isValid([x, y]) {
        return x >= 0 && x < 8 && y >= 0 && y < 8
    }
}

export default knightMoves