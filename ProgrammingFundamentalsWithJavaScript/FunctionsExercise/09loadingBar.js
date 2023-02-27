function loadingBar(percentComplete) {
    let complete = '%'.repeat(percentComplete / 10);

    let incomplete = '.'.repeat(10 - complete.length);

    if (percentComplete === 100) {
        console.log(`100% Complete!`);
    } else {
        console.log(`${percentComplete}% [${complete}${incomplete}] `);
        console.log(`Still loading...`);
    }
}
loadingBar(30)