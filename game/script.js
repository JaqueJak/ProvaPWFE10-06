let currentPlayer = 'X';
        let board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        function playMove(row, col) {
            if (board[row][col] === '') {
                board[row][col] = currentPlayer;
                renderBoard();
                if (checkWinner()) {
                    alert(currentPlayer + ' venceu!');
                    resetBoard();
                } else if (checkDraw()) {
                    alert('Empate!');
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function renderBoard() {
            const cells = document.querySelectorAll('.cell');
            cells.forEach((cell, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                cell.querySelector('span').textContent = board[row][col];
            });
        }

        function checkWinner() {
            // Verifica linhas
            for (let i = 0; i < 3; i++) {
                if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                    return true;
                }
            }
            // Verifica colunas
            for (let j = 0; j < 3; j++) {
                if (board[0][j] !== '' && board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
                    return true;
                }
            }
            // Verifica diagonais
            if (board[0][0] !== '' && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
                return true;
            }
            if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
                return true;
            }
            return false;
        }

        function checkDraw() {
            for (let row = 0; row < 3; row++) {
                for (let col = 0; col < 3; col++) {
                    if (board[row][col] === '') {
                        return false;
                    }
                }
            }
            return true;
        }

        function resetBoard() {
            currentPlayer = 'X';
            board = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
            renderBoard();
        }