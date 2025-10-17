// Sample game data - in a real application, this would come from an API
const games = [
    {
        id: 1,
        homeTeam: "Lakers",
        awayTeam: "Warriors",
        date: "2025-01-30",
        time: "19:30",
        league: "NBA",
        venue: "Crypto.com Arena"
    },
    {
        id: 2,
        homeTeam: "Chiefs",
        awayTeam: "Ravens",
        date: "2025-01-29",
        time: "16:00",
        league: "NFL",
        venue: "Arrowhead Stadium"
    }
];

class GameSchedule {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentMonth = new Date();
        this.selectedLeague = 'All';
        this.init();
    }

    init() {
        this.render();
        this.addEventListeners();
    }

    createHeader() {
        return `
            <div class="schedule-header">
                <h2>Game Schedule</h2>
                <div class="controls">
                    <select id="leagueFilter">
                        <option value="All">All Leagues</option>
                        ${[...new Set(games.map(game => game.league))]
                            .map(league => `<option value="${league}">${league}</option>`)
                            .join('')}
                    </select>
                    <div class="month-navigation">
                        <button id="prevMonth">&lt;</button>
                        <span>${this.currentMonth.toLocaleDateString('en-US', { 
                            month: 'long', 
                            year: 'numeric' 
                        })}</span>
                        <button id="nextMonth">&gt;</button>
                    </div>
                </div>
            </div>
        `;
    }

    formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
    }

    filterGames() {
        return games.filter(game => {
            const gameDate = new Date(game.date);
            const sameMonth = gameDate.getMonth() === this.currentMonth.getMonth();
            const sameYear = gameDate.getFullYear() === this.currentMonth.getFullYear();
            return (this.selectedLeague === 'All' || game.league === this.selectedLeague) 
                   && sameMonth && sameYear;
        });
    }

    createGamesList() {
        const filteredGames = this.filterGames();
        
        if (filteredGames.length === 0) {
            return '<div class="no-games">No games scheduled for this month and league selection.</div>';
        }

        return filteredGames.map(game => `
            <div class="game-card" data-game-id="${game.id}">
                <div class="game-main">
                    <div class="game-teams">
                        <div class="game-team-name">${game.homeTeam} vs ${game.awayTeam}</div>
                        <div class="game-venue">${game.venue}</div>
                    </div>
                    <div class="game-time">
                        <div class="game-date">${this.formatDate(game.date)}</div>
                        <div class="game-hour">${game.time}</div>
                    </div>
                </div>
                <div class="game-league">${game.league}</div>
            </div>
        `).join('');
    }

    render() {
        this.container.innerHTML = `
            ${this.createHeader()}
            <div class="games-container">
                ${this.createGamesList()}
            </div>
        `;
    }

    addEventListeners() {
        // League filter change
        document.getElementById('leagueFilter').addEventListener('change', (e) => {
            this.selectedLeague = e.target.value;
            this.render();
        });

        // Month navigation
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            this.render();
        });

        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
            this.render();
        });

        // Game card click for additional details
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const gameId = parseInt(e.currentTarget.dataset.gameId);
                const game = games.find(g => g.id === gameId);
                if (game) {
                    alert(`
                        Match Details:\n
                        ${game.homeTeam} vs ${game.awayTeam}\n
                        Date: ${this.formatDate(game.date)}\n
                        Time: ${game.time}\n
                        Venue: ${game.venue}\n
                        League: ${game.league}
                    `);
                }
            });
        });
    }
}