async function fetchHarryPotterData() {
    const baseUrl = 'https://api.potterdb.com/v1';
    
    try {
        // FETCH THE LIST OF BOOKS
        let response = await fetch(`${baseUrl}/books`);
        if (!response.ok) throw new Error(`Error fetching books: ${response.statusText}`);
        let books  = await response.json();
        
        // CHECK IF BOOKS ARE AVAILABLE
        if (books.data.length === 0 && books.data[0].id) {
            console.log("No books found.");
            return;
        }
        
        const firstBookId = books.data[0].id;

        // FETCH CHAPTERS OF THE FIRST BOOK
        let chaptersResponse = await fetch(`${baseUrl}/books/${firstBookId}/chapters`);
        if (!response.ok) throw new Error(`Error fetching chapters: ${response.statusText}`);
        let chaptersData = await chaptersResponse.json();

        // CHECK IF CHAPTERS ARE AVAILABLE
        const chapters = chaptersData.data;
        if (chapters.length === 0) {
            console.log("No chapters found for the selected book.");
            return;
        }

        // SELECT THE LAST CHAPTER
        const lastChapter = chapters[chapters.length - 1];
        const summary = lastChapter.attributes && lastChapter.attributes.summary ? lastChapter.attributes.summary : null ;
        if(summary) {
            // OUTPUT THE SUMMARY OF THE LAST CHAPTER
            console.log("Summary of the last chapter:", summary);
        }
        
    } catch (error) {
        // ERROR HANDLING FOR NETWORK/API ISSUES
        console.error("Failed to fetch data from Harry Potter API:", error.message);
    }
}

fetchHarryPotterData();
