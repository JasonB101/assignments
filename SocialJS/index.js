var user = {
    id: "id100001",
    name: "Jason Brown",
    email: [
        "jason.brown91@outlook.com", 
        "whatnowson@hotmail.com"
    ],
    friends: [{
            id: "id100002",
            name: "Bob",
            email: [
                "bob@bob.com",
                "bobbybrown@thebomb.com"
            ],
            follow: true,
            },
        {
            id: "id100003",
            name: "Carol",
            email: [
                "carol@hellyeah.com",
                "csmith@thebomb.com",
                "alibi@tcia.gov"
            ],
            follow: false,
            },
    ],
    numFriends: function() {
        console.log(this.friends.length)
        return this.friends.length;
        },
    image: "https://avatars3.githubusercontent.com/u/24565906?s=400&u=e8ad590a5245dc9e681779bcfad6db30b9afc818&v=4",
    pref: {
        timeline: {
            sort: "ascending",
            noAds: true,
            scroll: "sidescroll"
        },
        theme: {
            mainColor: "blue",
            text: "white",

        },
        notfollowing: function() {
            var newArray = [];
            for (i in user.friends){
                user.friends[i].follow ? null : newArray.push(user.friends[i].id);
            }
            
            console.log(newArray);
            return newArray;
            
        },

        
    },
}

function addFriend(){
    var index = user.friends.length - 1;
    var name = "Kyle"
    var follow = Math.random() >= .5 ? true : false;
    var emails = [];
    for (i = Math.floor(Math.random() * 5); i > -1; i-- ){
        emails.push(Math.floor(Math.random()*200000000) + "@randomlygenerated.com")
    }
    console.log(emails)
    var newFriend = {
        id: "id" + (Number(user.friends[index - 1].id.substr(2)) + 1),
        name: name,
        email: emails,
        follow: follow
    }
        
user.friends.push(newFriend)
}
console.log(user);
addFriend();
console.log(user);
