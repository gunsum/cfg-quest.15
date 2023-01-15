let reginaGeorge = {
    name: "Regina George",
    age: 16,
    group: "The Plastics",
    mood: ["thinks that's the ugliest skirt she's ever seen",
    "thinks you look cute in that skirt"][Math.floor(Math.random() * 2)],
    BirthYear: 1991,
    BirthPlace: "Chicago, Illinois",
    friends: ["Karen Smith, Gretchen Wieners, Cady Heron"],
    popularity: function() {
        if (this.group === "The Plastics" && this.mood === "thinks you look cute in that skirt") {
            console.log("Regina George is the most popular girl in school");
        } else {
            console.log("Everyone feels personally victimised by Regina George.");
        }
        }
    }
   reginaGeorge.popularity();