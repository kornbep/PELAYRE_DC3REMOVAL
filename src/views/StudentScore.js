export const StudentScore = {
    data() {
        return {
            name: "Dill Doe",
            score:100,
        }
    },
    methods: {
        addScore() {
            this.score += 10;
        },
        decreaseScore() {
            this.score -= 10;
        },

        resetScore() {
            this.score = 0;
        }
    },

}