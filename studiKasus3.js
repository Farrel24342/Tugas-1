const hero = [
    "layla",
    "ling",
    "franco",
    "fanny",
    "miya",
    "eudora",
];
for (let i = 0; i < hero.length; i++) {
    let namaHero = hero[i];
    if  (namaHero.charAt (0).toUpperCase() === "f") {
        console.log(`Nama Hero: ${namaHero}, Status: Hero Favorit`);
        console.log(namaHero + " Hero Assassin/Tank Favorit"); 
    } else {
        console.log (namaHero + " Hero Biasa");
    }
}