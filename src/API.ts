export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opendb.com/api.php?amont${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json() // wait for fetching endpoint and we wait it to be converted in json
    console.log('data:', data);
}